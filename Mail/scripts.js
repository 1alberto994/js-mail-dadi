const lista=["Alberto","Davide","Marco","Matteo"];
console.log(lista);
const myChoose=prompt("inserisci email");
console.log(myChoose)
alert([myChoose]);


if(isNaN(myChoose)){
    alert("email non valida")
}
else{
    alert(lista[myChoose], "prosegui con l'iscrizione")
}