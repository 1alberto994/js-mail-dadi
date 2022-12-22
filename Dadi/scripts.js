const random=Math.random();
const randomDue=Math.random()
const dadi=Math.floor(random*6+1);
const dadiDue=Math.floor(randomDue*6+1)
console.log(dadi);
const utente=dadi;
console.log("utente",utente);
const cpu=dadiDue;
console.log( "cpu",cpu)
if(utente>cpu){
    alert("vince utente")
}
else{
    alert("vince cpu")
}