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
         if(isNaN( valorRespuesta)){
            if (numeroCorrecto > valorRespuesta){
               console.log("¡Fallaste, el numero es mayor a la respuesta correcta!");
            } else if(numeroCorrecto < valorRespuesta){
               console.log("¡Fallaste el numero es menor a la respuesta correcta!")
            }
            else{
               console.log("Felicidades, has ganado!");
            }
         }
         else{
            ("No es un valor numerico lo siento :(")
            return
         }
         
         //Hacer condicionales if - else para determinar si la respuesta es menor, mayor o igual que numeroCorrecto
      } else{
         console.log("Aun no ingresas un numero, intentalo de nuevo :(");
      }
   }
);