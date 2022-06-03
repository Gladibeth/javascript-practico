// Cuadrados
console.group('Cuadrados')
/* const ladoCuadrado = 5;
console.log(`El lado cuadrado es de ${ladoCuadrado}cm`);
const perimetroC = ladoCuadrado * 4;
console.log(`El perimetro del mi cuadrado es de ${perimetroC}cm`);
const areaC = ladoCuadrado * ladoCuadrado;
console.log(`El area de mi cuadrado es de ${areaC}cm^2`); */

console.groupEnd();


function perimetroC(lado){
  return lado * 4;
}

function areaC(lado){
  return lado * lado;
}
// Triangulos
console.group('Triangulos');
/* const ladoT1 = 6;
const ladoT2 = 6;
const baseT = 4;
const perimetroT = ladoT1 + ladoT2 + baseT;
const alturaT = 5.5;
const areaT = (alturaT * baseT) / 2;
console.log(`Los lados de mi triangulo miden ${ladoT1}cm, ${ladoT2}cm, ${baseT}cm`);
console.log(`La altura de mi triangulo es de ${alturaT}`);
console.log(`El perimetro de mi cuadrado es de ${perimetroT}`)
console.log(`El area de mi triangulo es de ${areaT}cm^2`) */
console.groupEnd();

function perimetroT(lado1,lado2,base){
  return parseFloat(lado1)  + parseFloat(lado2) + parseFloat(base);
}

function areaT(base, altura){
  return (base * altura) / 2;
}

// Circulo
console.group('Circulo');
/* const radio = 4;
console.log(`El radio del circulo es de ${radio}cm`);
const diametro = radio * 2;
console.log(`El diametro del circulo es de ${diametro}cm`)
const circunsferencia = diametro * PI;
console.log(`La circunsferencia es de ${circunsferencia}cm`)
const areaCirculo = (radio * radio) * PI;
console.log(`El area del circulo es de ${areaCirculo}cm^2`)
 */
console.groupEnd();
const PI = Math.PI;
console.log(`El PI es de ${PI}`);

function diametroCirculo(radio){
  return radio * 2;
}

function perimetroCirculo(radio){
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

function areaCirculo(radio){
  return (radio * radio) * PI;
}

/* Cuadrado */
function calcularPerimetroC(){
  let mensajeC = document.getElementById('mensajeCuadrado');
  let input = document.getElementById('inputCuadrado').value;
  let perimetro = perimetroC(input);
  mensajeC.innerText = `El perimetro de nuestro cuadrado es de ${perimetro}cm`;
}

function calcularAreaC(){
  let mensajeC = document.getElementById('mensajeCuadrado');
  let input = document.getElementById('inputCuadrado').value;
  let area = areaC(input);
  mensajeC.innerText = `El area de nuestro cuadrado es de ${area}cm^2`;
}

/* Triangulo */
function calcularPerimetroT(){
  let mensajeT = document.getElementById('mensajeTriangulo');
  let lado1 = document.getElementById('inputTriangulo1').value;
  let lado2 = document.getElementById('inputTriangulo2').value;
  let base = document.getElementById('inputTrianguloBase').value;
  
  
  let perimetroTriangulo = perimetroT(lado1,lado2,base);
  mensajeT.innerText = `El perimetro de nuestro triangulo es de ${perimetroTriangulo}cm`;
}

function calcularAreaT(){
  let mensajeT = document.getElementById('mensajeTriangulo');
  let base = document.getElementById('inputTrianguloBase').value;
  let altura = document.getElementById('inputTrianguloAltura').value;
  let area = areaT(base,altura);
  mensajeT.innerText = `El area de nuestro triangulo es de ${area}cm^2`;
}

/* Circulo*/
function calcularDiametroCirculo(){
  let mensajeC = document.getElementById('mensajeCirculo');
  let input = document.getElementById('inputCirculo').value;
  let diametro = diametroCirculo(input);
  mensajeC.innerText = `El diametro de nuestro circulo es de ${diametro}cm`;
}

function calcularPerimetroCirculo(){
  let mensajeC = document.getElementById('mensajeCirculo');
  let input = document.getElementById('inputCirculo').value;
  let perimetro = perimetroCirculo(input);
  mensajeC.innerText = `El perimetro de nuestro circulo es de ${perimetro}cm`;
}

function calcularAreaCirculo(){
  let mensajeC = document.getElementById('mensajeCirculo');
  let input = document.getElementById('inputCirculo').value;
  let area = areaCirculo(input);
  mensajeC.innerText = `El area de nuestro circulo es de ${area}cm^2`;
}

function isoceles(lado1,lado2,base){
  let mensajeI = document.getElementById('mensajeTrianguloIsoceles');
  if(lado1 == lado2 && lado1 != base){
    mensajeI.innerText = `Es un triangulo Isoceles`;
    const altura = Math.sqrt(lado1**2 - base**2/ 4)
    return altura;
  }else{
    mensajeI.innerText = `No es un triangulo Isoceles`;
  }
}

/* Triangulos isoceles */
function calcularIsoceles(){
  let mensajeT = document.getElementById('mensajeTrianguloAltura');
  let lado1 = document.getElementById('inputIsoceles1').value;
  let lado2 = document.getElementById('inputIsoceles2').value;
  let base = document.getElementById('inputIsocelesBase').value;
  
  let altura = isoceles(lado1,lado2,base);
  if (lado1 == lado2){
    mensajeT.innerText = `La altura de nuestro triangulo isoceles es de ${altura}cm`;
  }
}