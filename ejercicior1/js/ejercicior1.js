/*
  Ejercicio R1
  Haz una función que reciba un número de NIF (para personas físicas nacionales, no empresas ni extranjeros) y compruebe si la letra es correcta.
  Busca el algoritmo de comprobación en internet.
*/

/*
  Autor: Sergio Matamoros Delgado <smatamorosdelgado.guadalupe@alumnado.fundacionloyola.net>
  Fecha: 13-10-2021
  Licencia: GNU Affero General Public License v3.0
*/

'use strict'

//Declara aquí la función

//Comprueba si el DNI es correcto,
//Returns true si es correcto, false si no lo es
function comprobar(nif) {
  //REGEX del DNI
  if (/^\d{8}[a-zA-Z]$/.test(nif)) {
    var n = nif.substr(0,8);
    var c = nif.substr(8,1);
    if(c.toUpperCase() == 'TRWAGMYFPDXBNJZSQVHLCKET'.charAt(n%23))
      return true; // DNI correcto ?
  }
  return false; // DNI incorrecto
}

//Programa de Comprobación
probar('44546750M', true)
probar('16180225W', false)
probar('52348825c', true)
probar('Q', false)
probar('', false)
probar(null, false)

function probar(nif, resultado) {
  let ERROR = Symbol();
  document.write('<br />NIF: ' + nif)
  let ok = false
  try {
    if (comprobar(nif) == resultado)
      ok = true
  } catch (e) {
    if (resultado == ERROR)
      ok = true;
  }
  if (ok)
    document.write(' <span class=ok>CORRECTO</span>')
  else
    document.write(' <span class=ko>ERROR</span>')
}
