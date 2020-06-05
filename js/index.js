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


      let min = 1;
      let max = 100;
      var valorRespuesta;



      for(var intentos = 0; intentos < 3; intentos++ ){
         let valorRespuesta = document.getElementById("respuesta").value;
         

          if(valorRespuesta>= min && valorRespuesta <= max){
            console.log(intentos)

            if (numeroCorrecto > valorRespuesta){
               console.log("¡Fallaste, el numero es mayor a la respuesta correcta!");
            } else if(numeroCorrecto < valorRespuesta){
               console.log("¡Fallaste el numero es menor a la respuesta correcta!")
            }
            else if(numeroCorrecto == valorRespuesta){
               console.log("Felicidades, has ganado!");
            }

         }else{
            console.log("Ingrese un valor valido");
         }
      }
      valorRespuesta

      if(valorRespuesta == numeroCorrecto){
         alert("Felicidades adivinaste el numero en " +intentos+ " intentos.");
      } else {
         console.log("¡Te has terminado tus intentos, vuelve a intentarlo!");
      }

   }
   );

