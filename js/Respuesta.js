let x=document.getElementById('sis').value;
let y=document.getElementById('nop').value;
let z=document.getElementById('nosep').value;

x.addEventListener(respuesta_1);
y.addEventListener(respuesta_2);
z.addEventListener(otra_respuesta);

function respuesta_1(){
    alert("Estas segura??? no pasara nada si no quieres seguiremos siendo buenos amigos");
    location.href='Segura.html';
}
function respuesta_2(){
    alert("Comprendo seria mejor ser solo amigos, no te preocupes");
}
function otra_respuesta(){
    alert("Como asi?? Entiendo dime cual es esa respuesta");
}