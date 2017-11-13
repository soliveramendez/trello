//primero debo saber que es lo que tengo que crear un boton y un input
function trello(){
var container=document.getElementById("container"); //conteniene todos los elementos
var btn =document.createElement("button");//creo boton
var input=document.createElement("input");//creo imput
var nodoText= document.createTextNode("guardar");//letra al boton

//atributo
input.setAttribute("id", "valor");//creando atributo ej. cantidad, tamaño,etc
input.setAttribute("placeholder","añadir una lista")//palceholder es el espacio que tengo para escribir
//nodos
btn.appendChild(nodoText);//estoy guardando el texto en el boton
container.appendChild(btn);//metiendo el boton en el container
container.appendChild(input);//metiendo input en el container

//luego quiero que al apretar el boton se desplegue otra lista desplegable
btn.addEventListener("click", function(){//el escuchador del boton que se despliega al utilizarlo declarar la funcion dentro del boton
 var list=document.getElementById("valor").value;//quiero rescatar el valor del input que lleva dentro el valor-todo lo que rescato de input
document.getElementById("valor").value = "";//limpiando placeholder(lugar donde se escribe)
 var contiene=document.getElementById("contiene");//llamando al div contiene
 var parrafo =document.createElement("p");//creando elemento p
 var textNuevo=document.createTextNode(list);//creando nodo de texto list, no va con comilla
 var add= document.createElement("a");//creando a para añaddir tarjeta
 add.setAttribute("href", "#");//le damos atributos a a
 var textAdd =document.createTextNode("añadir tarjeta")//creando el texto añador tarjeta

 parrafo.appendChild(textNuevo);//palabras ingresado en el parrafo
 contiene.appendChild(parrafo);
 add.appendChild(textAdd);
 contiene.appendChild(add);

add.addEventListener("click", function(){
  var title=this.parentNode;
    var textarea = document.createElement("textarea");
    var add= document.createElement("a");//creando a para añaddir tarjeta
    add.setAttribute("href", "#");//le damos atributos a a
    var textAdd =document.createTextNode("añadir tarjeta")//creando el texto añador tarjeta
    add.appendChild(textAdd);
    title.appendChild(textarea);
    title.appendChild(add);
});
})

}
