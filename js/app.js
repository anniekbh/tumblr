  var texto = document.getElementById("publicarTxt");
  var imagen = document.getElementById("publicarImg");
  var cita = document.getElementById("publicarCita");
  var nota = document.getElementById("publicarNota");
  var receptor = document.getElementById("receptor");

window.addEventListener("load", function(){

  texto.addEventListener("click", function(){
    test();
  });

  function test(){
    var element = document.createElement("div");
    receptor.appendChild(element);
  }

});