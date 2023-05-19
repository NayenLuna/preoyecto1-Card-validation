import {validator} from './validator.js';
//creo una constante que llame al boton validar
const validarButton=document.querySelector('#validation-message')
// creo un evento que escuche al momento de hacer click
validarButton.addEventListener("click",function(event){
    event.preventDefault()
    let numeros = document.querySelector("#numerodetarjeta").value;
    console.log(numeros)
    validator.isValid(numeros)
    //console.log(numeroDeTarjeta.value)
});
 

const validarFecha=document.querySelector('#exp-month')
validarButton.addEventListener("keypress",function(event){
    event.preventDefault()
    let expMonth = document.querySelector("#exp-month")
    console.log(expMonth.value)
})




