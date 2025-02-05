let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;


// para hacerlo generico los parametros son elemento y texto
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);//
    elementoHTML.innerHTML = texto;
    
    return;
}

function verificarIntento(){
    // es para asignarle el valor al input
    //para tener disponible el valor
    //obtener el valor por id
 
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
  

    //el triple = es para indicar que no solo sea igual el valos sino tambien el tipo todos sean numero o todos seas String
    
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `Acertaste el número ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
   
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        //el usuario no acerto
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p', 'El número secreto es menor');
        }else{
            asignarTextoElemento('p', 'El número secreto es mayor');
        }
    }
    intentos++;
    limpiaCaja();
    return;
}
// una funcion para que limpie
function limpiaCaja(){
    // document es para optener el elemento
    document.querySelector('#valorUsuario').value = '';
   

}
function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    // si ya sorteamos todos los numeros
    if(listaNumerosSorteados.length == numeroMaximo){ 
         asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');

    }else{

   
    //Si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    } else {
        //Si el numero generado está incluido en la lista se hace una operacion sino la otra
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}
}
function condicionesIniciales(){

    asignarTextoElemento('h1', 'juego del número secreto');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);

      //generar el número aleatorio
    numeroSecreto = generarNumeroSecreto();
    // inicializar el número intentos
    intentos = 1;
    console.log(numeroSecreto);
}

function reiniciarJuego() {
    //limpiar caja
    limpiaCaja();
    //indicar mensaje de intervalo de números
    //generar el número aleatorio
    // inicializar el número intentos
    condicionesIniciales();
    //deshabilitar el boton de nuevo juego  
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales(); 




// se les asigna un valor a los parametros


//desafio
/* 
function hola(){
    console.log("Hola Mundo");
}
function conParametro(nombre){
     nombre =  prompt("nombre");
    console.log(`hola ${nombre}`);

}
function doblenum(numero){
    numero = prompt("numero");
    let res = numero*2;
    console.log(res);
}
function tresnumeros(num1, num2, num3){
    num1 = prompt("numero 1");
    num2 = prompt("numero 2");
    num3 = prompt("numero 3");
    let suma = +num1+(+ num2)+(+num3);
    console.log(suma);
}
function mayor(num1, num2){
    num1 = prompt("numero 1");
    num2 = prompt("numero 2");
    if(num1 > num2){
        console.log(num1);

    }else{
        console.log(num2);
    }
}
function MultiplicacionPorSiMismo(numero){
    numero = prompt("numero");
    let res = (numero * numero);
    console.log(res);
} 

    //Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de
    //  su altura en metros y peso en kilogramos, que se recibirán como parámetros.

    function masaCorporal(altura, peso){
        peso = prompt("dame tu peso en kilogramos");
        altura = prompt("dame tu altura en metros");
       
        let elevacion = peso / (altura * altura );
        let resultado = (peso / elevacion);
        console.log(elevacion);
        //peso = 70kg
        // altura = 1.65
        // resultado = 25,4


    }
   // masaCorporal();

*/