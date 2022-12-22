const lista=["Alberto","Davide","Marco","Matteo"];
console.log(lista);
// lista.includes(0)
const myChoose=prompt("inserisci email");
console.log(myChoose);
alert(myChoose);
const trovato=lista.includes(myChoose);
if(trovato==false){
    alert("email non valida");
}
else{
    alert( "email valida");
}


// for(let i=0;i<lista.length;i++){
//     if(lista[i]==myChoose){
//         alert("email  valida");
//     }
    
 
// }
// const stopCiclo=lista;
//     for(let i=0;i>=stopCiclo;i++){
//         if(stopCiclo[i]==myChoose){
//             alert("email non valida")
//         }
           
//     }
// comporre una  lista tramite array
// creare un prompt con scritto inserisci email
// se la lista è diverso dalla variabile che ho creato tramite il prompt, l email non è valida
// altrimenti l email è valida