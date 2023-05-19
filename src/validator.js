export const validator={
  isValid: function(numeroDeTarjeta){
    //creo una cnstante que sera mi base a seguir
   // const numeroDeTarjeta = '4083952015263';
    //creo una variable que usaremos varias veces con yna cadena en blanco
    let numbers = '' ;
    //con el ciclofor le digo que sea igual ala longitud, le quitaremos uno 
    //xq lalongitud sera mayor que la matriz y luego mantenemos ese ciclo mientras i sea mayor que o mayor que cero y restamos uno de cada ciclo que se ejecute
        for (let i = numeroDeTarjeta.length -1; i >= 0; i--){
          //cada vez que el ciclo corre vamos a decir que la nueva variable sera igual a la original en la posicion i para volver a comenzar pero desde el final
      numbers += numeroDeTarjeta[i];
      console.log(numeroDeTarjeta[i])
    // aca recorro mi arreglo de uno en uno
      //for (let i = 0; i < numeroDeTarjeta.length; i + 1){
        // aca le digo si mi numero es divisible por 2 y da 0 lo tomo 
       // if (i % 2 !==0) {
          numeroDeTarjeta[i] = numeroDeTarjeta[i] *2
          
     //     console.log(numbers);
    //    }
    //  }  
      
        
      }
    }
    
    }


    

       