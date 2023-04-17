window.onload=inicio;
var credito=Math.floor(Math.random()*4)+9;
var imagenes=["chupetin.png","camara.png","gorra.png","llavero.png","sacapuntas.png","tenedor.png","rey.png"];
var premios=[3,2,3,2,2,3,6];
var numeros_actuales=[];
var activos = false;


function inicio(){
document.getElementById("tirar").onclick=lanzar_inicio;
document.getElementById("cruz").onclick=cerrar;
for(let k=0;k<document.getElementsByClassName("boton").length;k++){
    document.getElementsByClassName("boton")[k].onclick=lanzar_uno;
}
actualizar();
}


function lanzar_inicio(){
if(credito>0){
    activos=true;
    numeros_actuales=[];
for(let k=0;k<document.getElementsByClassName("boton").length;k++){
    numeros_actuales.push(escoger_numero(""));
    mostrar_imagen(k,numeros_actuales[k]);
}
    comparar();
}
}


function lanzar_uno(){
    if(credito>0 && activos==true){
        let hijos=this.parentNode.parentNode.children;
        let i=-1;
        for(let k=0; k<hijos.length; k++){
            if(this.parentNode==hijos[k]){
                i=k;
                break;
            }
        }
        if(i>=0){
            let anterior=numeros_actuales[i];
            let nuevo=escoger_numero(numeros_actuales.filter((_,j)=>j!==i));
            numeros_actuales[i]=nuevo;
            mostrar_imagen(i,nuevo);
            comparar();
        }
    }
}


function lanzar_uno(){
if(credito>0 && activos==true){
    let hijos=this.parentNode.parentNode.children;
    for(let k=0; k<hijos.length; k++){
        if(this.parentNode == hijos[k]){
            numeros_actuales[k]=escoger_numero(numeros_actuales[k]);
            mostrar_imagen(k,numeros_actuales[k]);
            comparar();
            break;
        }
    }
}
}

/*
function escoger_numero(actual){
    do{
        var azar=Math.floor(Math.random()*imagenes.length);
    } while (azar==actual)

return azar;
}
*/

function escoger_numero(actual){
    var azar;
    do {
      azar = Math.floor(Math.random()*imagenes.length);
    } while (azar === actual);
  
    return azar;
  }
  




function mostrar_imagen(num,im){
//document.getElementsByClassName("imagen")[num,im].getElementsByTagName("img")[0].src="img/"+imagenes[im];
document.querySelectorAll(".imagen img")[num].src = "img/" + imagenes[im];

}

function comparar(){
    if(numeros_actuales[0]==numeros_actuales[1] && numeros_actuales[1]==numeros_actuales[2]){
        //tenemos premio
        activos=false;
        let p = premios[numeros_actuales[0]];
        let mensaje=`Has ganado ${p} monedas<div>`;
        for(let k=0; k<p; k++){
            mensaje+=`<img src="img/moneda.png">`;
        }
        mensaje+=`</div>`;
        mostrar_mensaje(mensaje);
        credito+=premios[numeros_actuales[0]];
    }
    credito--;
    actualizar();
}

function actualizar(){
    document.getElementById("dinero").innerHTML=credito;
    document.getElementById("monedas").innerHTML="";
    for(let k=1; k<=credito; k++){
        document.getElementById("monedas").innerHTML += `<img src="img/moneda.png">`;
    }
    if(credito<1){
        mostrar_mensaje("<b>GAME OVER</b><div class='subtitulo'>No te queda mas dinero</div>");
    }
}

function mostrar_mensaje(m){
    document.getElementById("velo").style.display="flex";
    document.getElementById("mensaje").innerHTML=m;
}

function cerrar(){
    document.getElementById("velo").style.display="none";
}

function sonar(){

}