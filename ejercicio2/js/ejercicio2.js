/*
  Ejercicio 2
  Programa la función comprobarEdad para comprobar si la fecha introducida en el campo de fecha
  corresponde a alguien mayor de 18 años o no.
  La función mostrará un mensaje por consola indicando si es mayor de edad o no.
*/

/*
  Autor: Sergio Matamoros Delgado
  Fecha: 13-10-2021
*/

'use strict'


function comprobarEdad(fecha) {

  /*let fechaActual = new Date();
  let cumpleanios = new Date(fecha);
  let edad = cumpleanios.getFullYear() - fechaActual.getFullYear();
  let mes = cumpleanios.getMonth() - fechaActual.getMonth();

  let edadTotal =0;

  for(let i=0;i<fechaActual.getFullYear();i++) {
    edad++;
  }*/

  var hoy = new Date();
  var cumpleanos = new Date(fecha);
  var edad = hoy.getFullYear() - cumpleanos.getFullYear();
  var mes = hoy.getMonth() - cumpleanos.getMonth();
  if (mes < 0 || (mes === 0 && hoy.getDate() < cumpleanos.getDate())) {
      edad--;
  }

  console.log("Tienes: "+edad);


  

  if(edad >=18) console.log("Eres mayor de edad");
  else console.log("No eres mayor de edad");

  console.log(fecha);
}


