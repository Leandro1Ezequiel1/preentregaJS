// Condicionales

let usuario1 ="Lea";
let usuario2 ="Plantera"
let nombreUsuario =prompt ("Ingrese su nombre de usuario");
if(nombreUsuario =="Lea"){
    alert("Bienvenido" + nombreUsuario);
}
else if(nombreUsuario == "Plantera"){
    alert("bienvenido" + nombreUsuario);
}
else{
    alert("Nombre de usuario incorrecto");
}
let edad = prompt("ingrese su edad");
if (edad >=18) {
    alert("sos mayor de 18 puedes ingresar.");
}
else{
    alert("sos menor de edad. No puedes ingresar.");
}
let hora = prompt("Ingrese la hora");
if (hora >= 6 && hora < 12){
  alert("Buenos dias!");
}
else if(hora >= 12 && hora < 20){
    alert("Buenas Tardes!");
}
else{
    alert("Buenas Noches!")
}
// while
let Lea=0;
while( Lea <10){
    alert("ahora a vale" + Lea);
    console.log("ejemplo de ciclo");
    Lea = Lea + 1;
}
// for
for (let a = 0; a <10; a = a + 1){
        console.log("Ciclo numero" + Lea )
}
