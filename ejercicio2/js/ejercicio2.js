/*
  Ejercicio 2
  Programa la función comprobarEdad para comprobar si la fecha introducida en el campo de fecha
  corresponde a alguien mayor de 18 años o no.
  La función mostrará un mensaje por consola indicando si es mayor de edad o no.
*/

/*
  Autor: Sergio Matamoros Delgado <smatamorosdelgado.guadalupe@alumnado.fundacionloyola.net>
  Fecha: 13-10-2021
  Licencia: GNU Affero General Public License v3.0
*/

'use strict'

//Función que comprueba la edad actual a partir de una fecha dada
function comprobarEdad(fecha) {

  let hoy = new Date();
  let cumpleanios = new Date(fecha);
  let edad = cumpleanios.getFullYear();
  let mes = cumpleanios.getMonth();
  if(hoy.getDate() < cumpleanios.getDate())
    edad--;




 /* let hoy = new Date();
  let cumpleanos = new Date(fecha);
  let edad = hoy.getFullYear() - cumpleanos.getFullYear();
  let mes = hoy.getMonth() - cumpleanos.getMonth();
  if (mes < 0 || (mes === 0 && hoy.getDate() < cumpleanos.getDate())) {
      edad--;
  }*/

  console.log("Tienes: "+edad);


  

  if(edad >=18) console.log("Eres mayor de edad");
  else console.log("No eres mayor de edad");

  console.log(fecha);
}


