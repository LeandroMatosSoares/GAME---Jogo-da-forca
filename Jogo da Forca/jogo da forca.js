</DOCTYPE html>
<html lang="pt-br">
<head>
    <title>Aula 50</title>
 <meta charset="utf-8" />
 <style>
     .jogo{
      display:inline-block;
  }
  #container{
   padding:10px 30px;
   position:absolute;
  }
  #nav{
      position:absolute;
      width:100px;
   height:30px;
   font-size:20px;
   margin:205px 0px 0px 28px;
   }
  #jogo{
      margin:150px 0px 0px 150px;
   position:absolute;
  }
  #jogar{
      display:inline-block;
   margin:200px 0px 0px 250px;
  }
  #jogadas{
      width:300px;
   margin-left:40px;
   padding-left:0px;
  }
  #bt{
      margin-left:50px;
  }
     .letra, .ler{
      font-size:20px;
   padding-left:10px;
   margin-left:10px;
   border:none;
   border-bottom:1px solid #000;
   background-color:#fff;
   outline:none;   
   width:35px;
  }
  
  /*desenho*/
  #d1{
      width:60px;
   height:60px;
   border:6px solid #000;
   border-radius:50%;
  }
  #d2{
      position:absolute;
      width:3px;
   height:80px;
   border:2px solid #000;
   margin-left:31px;
   background-color:#000;
  }
  #d3{
      position:absolute;
      width:0px;
   background-color:#000;
   height:45px;
   border:3px solid #000;
   transform:rotate(-45deg);
   margin-left:50px;
  }
  #d4{
      position:absolute;
      width:0px;
   background-color:#000;
   height:45px;
   border:3px solid #000;
   transform:rotate(45deg);
   margin-left:12px;
  }
  #d5{
      position:absolute;
      width:0px;
   background-color:#000;
   height:45px;
   border:3px solid #000;
   transform:rotate(45deg);
   margin:72px 0px 0px 12px;
  }
  #d6{
      position:absolute;
      width:0px;
   background-color:#000;
   height:45px;
   border:3px solid #000;
   transform:rotate(-45deg);
   margin:72px 0px 0px 50px;
  }
 </style>
 <script type="text/javascript">
     var palavras = ["brinquedo", "bicicleta", "carro", "televisao", "dinheiro", "shopping", "brincadeira"];
  var palavra;
     var input;
        var novoInput;
  var inputLetra;
  var num;
  var numer;
  var tmp;
  var posicao;
  var s;
  var c;
  var g;
  var cont;
  var controle;
  var evt = true;
  window.addEventListener("load", inicia);
  function inicia(){
      posicao = [];
   cont = 0;
   controle = false;
   s = 0;
      c = 0;
   g = 0;
      for(i=1;i<=6; i++){
       document.getElementById("d"+i).style.display="none";
   }
      gerarPalavra();
      for(i=0;i<palavra.length; i++){
    novoInput = criarInput(i);
    document.getElementById("jogo").appendChild(novoInput);
   }
   document.getElementById("btn").addEventListener("click", reiniciar);
   if(evt){
    document.getElementById("jog").addEventListener("keyup", function(){
        document.getElementById("nav").innerHTML="";
     verificar(this);
    });
    evt=false;
   }
  }
  //para verificar se e uma letra que foi digita
  function verificar(input){
      if(input.value.match(/[a-z]/)){
       verificarLetra(input);
   }else{
       document.getElementById("nav").innerHTML="Somente letras";
    input.value="";
    return false;
   }
  }
  // verifica se a palavra tem a letra digitada
  function verificarLetra(input){
   for(i=0;i<palavra.length; i++){
       if(palavra[i]==input.value){
        posicao[s] = i;
     s++;
     controle = true;
    }
   }
   insereLetra(input);
   tmp = setTimeout(function(){input.value="";}, 200);
  }
  //adiciona a letra na posiçao 
  function insereLetra(input){
      letraRep(input);
   if(!controle){
       cont++;
       document.getElementById("jogadas").value+=" "+input.value;
    document.getElementById("d"+cont).style.display="block";
    if(cont >= 6){
        document.getElementById("jog").setAttribute("disabled", "disabled");
     document.getElementById("nav").innerHTML="PERDEU";
     document.getElementById("nav").style.color="#f00";
    }
   }else{
       inputLetra = document.getElementsByClassName("letra").length;
    for(i=0; i<inputLetra; i++){
     if(i == posicao[c] ){
      document.getElementById("letra"+i).value=input.value;
      c++;
      g++;
      controle=false;
     }
    }
    if(g == palavra.length){
     document.getElementById("nav").innerHTML="GANHOU";
     document.getElementById("nav").style.color="#00f";
     document.getElementById("jog").setAttribute("disabled", "disabled");
    }
   }
  }
  //verifica se a letra digitada ja tem 
  function letraRep(input){
      var nInput = document.getElementsByClassName("letra");
      for(i=0; i<nInput.length; i++){
       if(document.getElementById("letra"+i).value==input.value){
           g--;
    }
   }
  }
  function reiniciar(){
   for(i=0;i<posicao.length; i++){
    posicao.shift();
   }
   input = document.getElementsByClassName("letra");
      for(i=0; i<palavra.length; i++){
       document.getElementById("jogo").removeChild(input[0]);
   }
   document.getElementById("jogadas").value = "";
   document.getElementById("jog").value = "";
   document.getElementById("nav").innerHTML="";
   document.getElementById("jog").removeAttribute("disabled", "disabled");
   inicia();
  }
  //gera a palavra que vem de um array
  function gerarPalavra(){
      num = Math.floor(Math.random()*palavras.length);
   if(numer == num ){
       num = Math.floor(Math.random()*palavras.length);
   }
   numer = num;
   palavra = palavras[num];
  }
  //cria inputs dimanicamente
  function criarInput(i){
      input = document.createElement("input");
   input.setAttribute("type", "text");
   input.setAttribute("id", "letra"+i);
   input.setAttribute("class", "letra");
   input.setAttribute("disabled", "disabled");
   input.setAttribute("maxlength", "1");
   return input;
  }
 </script>
</head>
<body> 
    <div id="container" class="jogo">
     <!--desenho-->
     <div id="d1"></div>
  <div id="d4"></div>
  <div id="d2"></div>
  <div id="d3"></div>
  <div id="d5"></div>
  <div id="d6"></div>
 </div>
 <div id="nav"></div>
 <div id="jogo" class="jogo"></div>
 <div id="jogar"><input type="text" id="jog" class="ler" maxlength="1"/></div>
 <div id="jogando" class="jogo"><input type="text" id="jogadas" class="ler" disabled="disabled"/></div>
 <div id="bt" class="jogo"><button id="btn">Nova Palavra</button></div>
 
</body>
</html>