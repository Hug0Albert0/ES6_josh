let intentos = null;
let numeroCorrecto = null;
let mensaje = "";
let inputRespuesta = document.getElementById("respuesta");
let contenedorMensaje = document.getElementById("mensajes");
let btnReiniciar = document.getElementById("btnReintentar");
let btnEnviar = document.getElementById("btnEnviar");

const fnCargarJuego = () => {
   intentos = 3;
   numeroCorrecto = Math.floor(Math.random() * 100) + 1;
   console.log(numeroCorrecto)
   contenedorMensaje.innerHTML = "";
   inputRespuesta.value = "";
   btnReiniciar.classList.add("hidden");
   inputRespuesta.disabled = false;
   btnEnviar.disabled = false;
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
document.getElementById("btnReintentar").addEventListener(
   "click",
   () => {
      fnCargarJuego();
   }
);
const fnJugar = () => {
   let valorRespuesta = inputRespuesta.value;
   if (valorRespuesta) {
      if(!isNaN(Number(valorRespuesta))) {
         if (valorRespuesta >= 1 && valorRespuesta <= 100) {
            if (valorRespuesta > numeroCorrecto){
              intentos--;
               mensaje = `
                  <h4>¡Fallaste! <span>&#x1F613;</span>  <span>&#x1F446;</span>  <span>&#x1F446;</span> </h4>
                  <h5>El número es mayor a la respuesta correcta!
                  Te quedan ${intentos} intento(s).</h5>
               `;
               contenedorMensaje.innerHTML = mensaje;
               inputRespuesta.value = "";
               fnComprobarIntentos();
            }
            else if(valorRespuesta < numeroCorrecto){
              intentos--;
               mensaje = `
                  <h4>¡Fallaste!<span>&#x1F613;</span> <span>&#x1F447;</span> <span>&#x1F447;</span> </h4>
                  <h5>El número es menor a la respuesta correcta!
                  Te quedan ${intentos} intento(s).</h5>
               `;
               contenedorMensaje.innerHTML = mensaje;
               inputRespuesta.value = "";
               fnComprobarIntentos();
            }
            else {
               mensaje = `
                  <h4><span>&#x1F389;</span>¡¡¡Felicidades!!! <span>&#x1F973;</span> <span>&#x1F3C6;</span> <span>&#x1F389;</span></h4>
                  <h5> Has adivinado, tu número de la suerte es: ${numeroCorrecto}!!!</h5>`;
               contenedorMensaje.innerHTML = mensaje;
               inputRespuesta.value = "";
               btnReiniciar.classList.remove("hidden");
               inputRespuesta.disabled = true;
               btnEnviar.disabled = true;
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
}

const fnError = () => {
   mensaje = `<h4>Ingresa un número entero del 1 al 100  <span>&#x1F62C;</span>	.</h4>`;
   contenedorMensaje.innerHTML = mensaje;
   inputRespuesta.value = "";
}

const fnTerminaTurno = () => {
   mensaje = `
      <h4>¡Has perdido! <span>&#x1F62D;</span> <span>&#x1F62D;</span> <span>&#x1F62D;</span>	</h4>
      <h5>Ya no te quedan intentos :(( .</h5>`;
   contenedorMensaje.innerHTML = mensaje;
   inputRespuesta.value = "";
   btnReiniciar.classList.remove("hidden");
   inputRespuesta.disabled = true;
   btnEnviar.disabled = true;
}

const fnComprobarIntentos = () => {
   if(intentos == 0) {
      fnTerminaTurno();
   }
}