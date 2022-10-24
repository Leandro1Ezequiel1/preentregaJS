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

