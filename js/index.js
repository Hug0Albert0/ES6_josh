let intentos = null;
let numeroCorrecto = null;
let mensaje = "";
let inputRespuesta = document.getElementById("respuesta");
let contenedorMensaje = document.getElementById("mensajes");

const fnCargarJuego = () => {
   intentos = 3;
   numeroCorrecto = Math.floor(Math.random() * 100) + 1;
}

fnCargarJuego();
document.getElementById("btnEnviar").addEventListener(
   "click",
   () => {
      fnJugar();
   }
);
document.onkeydown = (evento) => {
   if (evento.keyCode == "13") {
      fnJugar();
   }
}
console.log(numeroCorrecto)

const fnJugar = () => {
   if (intentos > 0) {
      let valorRespuesta = inputRespuesta.value;
      if (valorRespuesta) {
         if(!isNaN(Number(valorRespuesta))) {
            if (valorRespuesta >= 1 && valorRespuesta <= 100) {
               if (valorRespuesta > numeroCorrecto){
                  intentos--;
                  mensaje = `
                     <h4 align='center'>¡Fallaste, el numero es mayor a la respuesta correcta! 😓👆👆
                     Te quedan ${intentos} intento(s).</h4>
                  `;
                  contenedorMensaje.innerHTML = mensaje;
                  inputRespuesta.value = "";
               }
               else if(valorRespuesta < numeroCorrecto){
                  intentos--;
                  mensaje = `
                     <h4 align='center'>¡Fallaste el numero es menor a la respuesta correcta! 😓👇👇
                     Te quedan ${intentos} intento(s).</h4>
                  `;
                  contenedorMensaje.innerHTML = mensaje;
                  inputRespuesta.value = "";
               }
               else {
                  mensaje = `<h4 align='center'>🎉🎉¡Felicidades adivinaste el numero: ${numeroCorrecto}!🥳🏆🎉🎈🎈
                ¡Lo resolviste al ${intentos} intento(s)!.</h4>
                  `;
                  contenedorMensaje.innerHTML = mensaje;
                  inputRespuesta.value = "";
               }
            } else {
               fnError();
            }
         } else {
            fnError();
         }
      } else {
         fnError();
      }
   } else {
      mensaje = `<h4 align='center'>¡Has perdido, ya no te quedan intentos!😭😭😭.</h4>`;
      contenedorMensaje.innerHTML = mensaje;
      inputRespuesta.value = "";
   }
}

const fnError = () => {
   mensaje = `<h4 align='center'>Ingresa un número entero del 1 al 100 😬.</h4>`;
   contenedorMensaje.innerHTML = mensaje;
   inputRespuesta.value = "";
}