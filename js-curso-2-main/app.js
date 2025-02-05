let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora del Desafío';
// Crea una función que muestre en la consola el mensaje "El botón fue clicado"
//  siempre que se presione el botón "Console".
function btConsola(){
    console.log("El boton fue clicado");
}
//Crea una función que se ejecute cuando se haga clic en el botón "prompt", preguntando el 
// nombre de una ciudad de Brasil. Luego, muestra una alerta con el mensaje 
// concatenando la respuesta con el texto: "Estuve en {ciudad} y me acordé de ti".
function btPrompt(){
    let nombre;
    let pregunta = prompt('Nombre de una ciudad de Brasil  ');

    alert(`Estuve en la ${pregunta} y me acordé de ti` );
}
//Crea una función que muestre una 
// alerta con el mensaje: "Yo amo JS" siempre que se presione el botón "Alerta".
function btAlerta(){
    alert("yo amo JS");
}
//Al hacer clic en el botón "suma", pide 2 números y muestra el resultado de la suma en una alerta.
function btsumar(){
    let num1 = prompt("Primer número");
    let num2 = prompt("Segundo número");
    let resul= +num1+(+ num2); // solo de esta forma se logra que se sumen los números
    alert(resul);
}