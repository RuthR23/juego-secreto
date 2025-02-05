let numeroMaximoPosible =50;
let numeroSecreto = Math.floor(Math.random()*numeroMaximoPosible)+1;
let numeroUsuario =0;
let intentos = 1;
let maximosIntentos = 3;
 console.log(numeroSecreto);

while(numeroUsuario != numeroSecreto){
 numeroUsuario =parseInt( prompt(`Me indicas un número entre el 1 y ${numeroMaximoPosible} por favor`));

console.log(numeroUsuario);

if(numeroSecreto == numeroUsuario){
    alert(`Acertaste el número ${numeroUsuario}. , lO hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`);

}
else{
    if(numeroSecreto>numeroUsuario)
    {
        alert(`El número secrteto es mayor:   ${numeroUsuario} `);
    }
    else{
        alert(`El número secreto es menor:  ${numeroUsuario}`);
    }
    // incrementamos el contador cuando no aciertA
    intentos= intentos + 1;
   // palabraVeces = ' veces';
    if(intentos > maximosIntentos ){
        alert(`llegaste al número maximo de intentos ${maximosIntentos} intentos`);
        break;
    }

} 
}
 

/* 
//para que el contador vaya de arriba a bajo
let numero = prompt("dame un numero");
let contador = 0;

while(numero >= 0){
console.log(numero);
numero --;

} */


//1- Crea un programa que utilice console.log para mostrar un mensaje de bienvenida.
// console.log("Bienbenido")
//2-.Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza console.log para mostrar el mensaje "¡Hola, [tu nombre]!" en la consola del navegador.
/* let nombre = 'Ruth';
console.log(`Hola, ${nombre}`); */
//3-.Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza alert para mostrar el mensaje "¡Hola, [tu nombre]!".
/* let nombre = 'Ruth';
alert(`Hola, ${nombre}`) */
//4-.Utiliza prompt y haz la siguiente pregunta: ¿Cuál es el lenguaje de programación que más te gusta?. Luego, almacena la respuesta en una variable y muestra la respuesta en la consola del navegador.
/* let lenguaje = prompt("Cuál es el lenguaje de programación que más te gusta?");
console.log(lenguaje); */
//5-.Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. Luego, realiza la suma de estos dos valores y almacena el resultado en una tercera variable llamada "resultado". Utiliza console.log para mostrar el mensaje "La suma de [valor1] y [valor2] es igual a [resultado]." en la consola.
/* let valor1 = 2;
let valor2 = 4;
let resultado = valor1 + valor2;
console.log(`Lasuma de ${valor1} y ${valor2} es = ${resultado}`); */
//6-.Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. Luego, realiza la resta de estos dos valores y almacena el resultado en una tercera variable llamada "resultado". Utiliza console.log para mostrar el mensaje "La diferencia entre [valor1] y [valor2] es igual a [resultado]." en la consola.
/* let valor1 = 5;
let valor2 = 4;
let resultado = valor1 - valor2;
console.log(`La diferencia entre ${valor1} y  ${valor2} es = ${resultado}`); */
//7-. Pide al usuario que ingrese su edad con prompt. Con base en la edad ingresada, utiliza un if para verificar si la persona es mayor o menor de edad y muestra un mensaje apropiado en la consola.
/* let edad = prompt("ingrese su edad");
if(edad >= 18){
    console.log("Usted es mayor de edad");

}
else{
    console.log("usted es menor de edad");
}
 */
//8-. Crea una variable "numero" y solicita un valor con prompt. Luego, verifica si es positivo, negativo o cero utilizando un if-else y muestra el mensaje correspondiente.
/* let numero= prompt("Ingrese un número");
if(numero >0){
    console.log("tu numero es positivo");
}else if(numero < 0){
    console.log("tu numero es negativo");
}else if(numero == 0){
    console.log("tu numero es cero");
}else{
    console.log("Sabra Dios que ecribiste ");
} */
//9-.Crea una variable "nota" y asígnale un valor numérico. Utiliza un if-else para determinar si la nota es mayor o igual a 7 y muestra "Aprobado" o "Reprobado" en la consola.
/* let nota = prompt("Pon tu calificacion");
if(nota >= 7 && nota <11){
    console.log(`Aprobado con ${nota}`)
}else if (nota < 7 ){
    console.log(`Échale ganas mijo, sacaste ${nota}`);|
}else{
    console.log("quien sabe quien sea ese");
} */
//11-.Utiliza Math.random para generar cualquier número aleatorio y muestra ese número en la consola.
/* let numero = Math.floor(Math.random()*100);
console.log(numero); */
//12-.Utiliza Math.random para generar un número entero entre 1 y 10 y muestra ese número en la consola.
/* let numero = Math.floor(Math.random()*10)+1;
console.log(numero); */
//13-.Utiliza Math.random para generar un número entero entre 1 y 1000 y muestra ese número en la consola.
/* let numero = Math.floor(Math.random()*1000)+1;
console.log(numero); */