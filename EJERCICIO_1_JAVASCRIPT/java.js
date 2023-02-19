//Operadores lógicos
// EJERCICIOS

var v=true;
var f=false;

console.log("OPERADORES LÓGICOS EN JAVASCRIPT")
console.log("NOT: !")
console.log("AND: &&")
console.log("OR:  ||")
console.log("VERDADERO: true")
console.log("FALSO: false")
console.log("OPERADORES BINARIAS EN JS, SÓLO SE USAN CON NÚMEROS")
console.log("NOT BINARIO: !")
console.log("AND BINARIO: &")
console.log("XOR BINARIO:  ^")
//1.- V AND F = F
var ejercicio_1= v && f;
console.log("EJERCICIO 1.- V AND F = F")
console.log(ejercicio_1)
//2.- F OR V = V
var ejercicio_2=f || v;
console.log("EJERCICIO 2.- F OR V = V")
console.log(ejercicio_2)
//3.- NOT (V AND F) = NOT (F) = V
var ejercicio_3=!(v && f);
console.log("EJERCICIO 3.- NOT (V AND F) = NOT (F) = V")
console.log(ejercicio_3)
//4.- V AND (F OR V) = V AND (V) = V
var ejercicio_4= v && (f || v);
console.log("EJERCICIO 4.- V AND (F OR V) = V AND (V) = V")
console.log(ejercicio_4)
//5.- F OR NOT (F AND F) = F OR NOT (F) = F OR V = V
var ejercicio_5=f || ! (f && f);
console.log("EJERCICIO 5.- F OR NOT (F AND F) = F OR NOT (F) = F OR V = V")
console.log(ejercicio_5)

//MÁS EJERCICIOS
//6.- false && true
var ejercicio_6= f && t;
console.log("EJERCICIO 6.- false && true")
console.log(ejercicio_6)
//7.- !true || true;
var ejercicio_7= ! v || v;
console.log("EJERCICIO 7.-  !true || true")
console.log(ejercicio_7)
//8.-   false || !( true && (false || false) )=
var ejercicio_8= f || ! (v && (f || f));
console.log("EJERCICIO 8.-   false || !( true && (false || false) )=")
console.log(ejercicio_8)
//9.- !(false || true || false || false) =
var ejercicio_9= !(f||v||f||f);
console.log("EJERCICIO 9.- !(false || true || false || false) =")
console.log(ejercicio_9)
//10.-  !( !false && true ) && !(false || true) =
var ejercicio_10=!(!f && v) && !(f||v);
console.log("EJERCICIO 10.-  !( !false && true ) && !(false || true) =")
console.log(ejercicio_10)

//OPERADORES DE COMPARACIÓN
console.log("OPERADORES DE COMPARACIÓN")

//Menor que: <
console.log("Menor que: <")
//Mayor que: >
console.log("Mayor que: >")
//Menor que o igual: <=
console.log("Menor que o igual: <=")
//Mayor que o igual: >=
console.log("Mayor que o igual: >=")
//Igual: ==
console.log("Igual: ==")
//Estrictamente Igual: ===
console.log("Estrictamente Igual: ===")
//No igual: !=
console.log("No igual: !=")
//Estrictamente No Igual: !==
console.log("Estrictamente No Igual: !==")

//Comprobar sus condiciones

console.log("Ejercicios Comprobar sus condiciones")
//CONDICIÓN 1
let X;
let Y;
let condicion= X && Y;

console.log("10 <= X && Y <= 100")
console.log("DAME EL PRIMER NÚMERO")
X=prompt("Ingrese su primer número, MAYOR A 10")
Y=prompt("Ingrese su segundo número, MENOR A 100")
console.log(condicion)

if(10 <= X && Y <= 100){
    console.log("10 <= " + X + " && " + Y + " <= 100" + " = VERDADERO")
}
else{
    console.log("10 <= " + X + " && " + Y + " <= 100" + " = FALSO")
}

//EJEMPLOS Y EJERCICIOS
let pregunta_1=prompt("Los campos de un inicio de sesión representados por usuario y contraseña necesitan estar completos. ¿Qué condición utilizamos? TIP: usuario && contraseña")
console.log("Los campos de un inicio de sesión representados por usuario y contraseña necesitan estar completos. ¿Qué condición utilizamos? usuario && contraseña")
if(pregunta_1=="usuario && contraseña"){
    console.log("TU RESPUESTA " + pregunta_1 + " ES:" )
    console.log("CORRECTA")
}
else{
    console.log("TU RESPUESTA " + pregunta_1 + " ES:" )
    console.log("ERRÓNEA!!!")
}
console.log("Condición que valida si dos cadenas/palabras son iguales: cadena1 == cadena2 cadena 1 === cadena2")

//EJEMPLOS Y EJERCICIOS
let pregunta_2=prompt("Para registrarte en un sitio tienes que revisar si de los campos correo, teléfono y nombre de usuario, al menos uno está completo. ¿Qué condición uso? TIP= correo || teléfono || nombre de usuario")
console.log("Para registrarte en un sitio tienes que revisar si de los campos correo, teléfono y nombre de usuario, al menos uno está completo. ¿Qué condición uso? TIP= correo || teléfono || nombre de usuario")
if(pregunta_2=="correo" || pregunta_2=="teléfono" || pregunta_2=="nombre de usuario"){
    console.log("TU RESPUESTA " + pregunta_2 + " ES:" )
    console.log("CORRECTA")
}
else{
    console.log("TU RESPUESTA " + pregunta_2 + " ES:" )
    console.log("ERRÓNEA!!!")
}
console.log("Condición que valida si dos cadenas/palabras son iguales: cadena1 == cadena2 cadena 1 === cadena2")

//EJEMPLOS Y EJERCICIOS
let pregunta_3=prompt("Requiero que solo cuando no estén seleccionados ninguno de 3 campos donde a, b, c son sus valores booleanos de selección realice una acción. TIP = a || b || c")
console.log("Requiero que solo cuando no estén seleccionados ninguno de 3 campos donde a, b, c son sus valores booleanos de selección realice una acción. TIP = a || b || c")
if(pregunta_3=="a" || pregunta_3=="b" || pregunta_3=="c"){
    console.log("TU RESPUESTA " + pregunta_3 + " ES:" )
    console.log("ERRÓNEA!!!")
}
else{
    console.log("TU RESPUESTA " + pregunta_3 + " ES:" )
    console.log("CORRECTA")
}
console.log("Condición que valida si dos cadenas/palabras son iguales: cadena1 == cadena2 cadena 1 === cadena2")