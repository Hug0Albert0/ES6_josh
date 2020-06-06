let intentos = 3;
let numeroCorrecto = Math.floor(Math.random() * 100) + 1;
console.log(numeroCorrecto);
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
const fnJugar = () => {
   if (intentos > 0) {
      let valorRespuesta = document.getElementById("respuesta").value;
      if (valorRespuesta) {
         if(!isNaN(Number(valorRespuesta))) {
            if (valorRespuesta > numeroCorrecto){
               intentos--;
               console.log(`
                  ¡Fallaste, el numero es mayor a la respuesta correcta!
                  Te quedan ${intentos} intento(s).
               `);
               document.getElementById("respuesta").value = "";
            }
            else if(valorRespuesta < numeroCorrecto){
               intentos--;
               console.log(`
                  ¡Fallaste el numero es menor a la respuesta correcta!
                  Te quedan ${intentos} intento(s).
               `);
               document.getElementById("respuesta").value = "";
            }
            else {
               console.log("Felicidades adivinaste el numero");
            }
         } else {
            console.log("Ingresa un número entero del 1 al 100");
            document.getElementById("respuesta").value = "";
         }
      } else {
         console.log("Ingresa un número entero del 1 al 100");
         document.getElementById("respuesta").value = "";
      }
   } else {
      console.log("Has perdido, ya no te quedan intentos");
   }
}