var texto = document.getElementById("publicarTxt");
var imagen = document.getElementById("publicarImg");
var cita = document.getElementById("publicarCita");
var nota = document.getElementById("publicarNota");
var receptor = document.getElementById("receptor");
var areaTexto = document.createElement("textarea");
var titulos = document.createElement("input");
var botonPost = document.createElement("input");
var botonCerrar = document.createElement("input");

window.addEventListener("load", function(){

  texto.addEventListener("click", function(){
    postUno();
  });
  imagen.addEventListener("click",function(){
    postDos();
  });
  cita.addEventListener("click", function(){
    postTress();
  });
  nota.addEventListener("click", function(){
    postCuatro();
  });

});

function postUno(){
    var element = document.createElement("div");
    element.insertBefore(areaTexto,element.childNodes[1]);
    element.insertBefore(titulos,element.childNodes[0]);
    botonPost.setAttribute("type", "submit");
    botonPost.setAttribute("value", "Post");
    element.insertBefore(botonPost,element.childNodes[2]);
    botonCerrar.setAttribute("type", "submit");
    botonCerrar.setAttribute("value", "Cerrar");
    element.insertBefore(botonCerrar,element.childNodes[3]);
    element.classList.add("post");
    receptor.insertBefore(element, receptor.childNodes[0]);
};
function postDos(){
    var newElement = document.createElement("div");
    newElement.insertBefore(areaTexto,newElement.childNodes[1]);
    newElement.insertBefore(titulos,newElement.childNodes[0]);
    botonPost.setAttribute("type", "submit");
    botonPost.setAttribute("value", "Post");
    newElement.insertBefore(botonPost,newElement.childNodes[2]);
    botonCerrar.setAttribute("type", "submit");
    botonCerrar.setAttribute("value", "Cerrar");
    newElement.insertBefore(botonCerrar,newElement.childNodes[3]);
    newElement.classList.add("post");
    receptor.insertBefore(newElement, receptor.childNodes[0]);
};


