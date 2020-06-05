//let contador = 0;
let numeroCorrecto = Math.floor(Math.random() * 100) + 1;
console.log(numeroCorrecto);
document.getElementById("btnEnviar").addEventListener(
   "click",
   () => {
      /*
      contador++;
      console.log(contador);
      */
      let valorRespuesta = document.getElementById("respuesta").value;
      if(valorRespuesta) {
         console.log(valorRespuesta);
         //Hacer condicionales if - else para determinar si la respuesta es menor, mayor o igual que numeroCorrecto
      } else{
         console.log("No has ingresado ninguna respuesta. Intenta otra vez");
      }
   }
);