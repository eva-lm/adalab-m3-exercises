/* EJERCICIO 11
Clasificación de la carrera
Volviendo a nuestra carrera de escobas, queremos tener el array del ejercicio 8 ordenado para poder tener una clasificación de la carrera: ¿nos ayudar a hacerlo usando sort?
PISTA: la función que le pasamos a sort toma como parámetros 2 elementos del array, así que para acceder a una propiedad de un objeto en la función podemos hacerlo con el operador punto (a.time), como hemos hecho hasta ahora ;). */

const runners = [
  { name: "Gregory Goyle", time: 56 },
  { name: "Nymphadora Tonks", time: 9 },
  { name: "Luna Lovegood", time: 45 },
  { name: "Cedric Diggory", time: 28 },
  { name: "Cho Chang", time: 35 }
];

runners.sort((a, b) => {
  return a.time - b.time;
});
console.log("resultado carrera de escobas: ", runners);

/* EJERCICIO 12
Poniendo orden en nuestros usuarios
Vamos a volver al listado de usuarios del ejercicio 6, porque nos ha dado la manía de tenerlos ordenados. ¿Podrías ordenarlos por orden alfabético? ¿Y por su número de PIN? */

const users = [
  { name: "María", isPremium: false, pin: 2389 },
  { name: "Lucía", isPremium: true, pin: 2384 },
  { name: "Susana", isPremium: true, pin: 2837 },
  { name: "Rocío", isPremium: false, pin: 5232 },
  { name: "Inmaculada", isPremium: false, pin: 8998 }
];

users.sort((a, b) => {
  return a.pin - b.pin;
});
console.log("ordenado por pin: ", users);

users.sort((a, b) => {
  let nameA = a.name.toUpperCase();
  let nameB = b.name.toUpperCase();
  if (nameA < nameB) {
    return -1; //devuelve un valor negativo
  }
  if (nameA > nameB) {
    return 1; //devuelve un valor positivo
  }
  return 0;
});

console.log("ordenado por nombre", users);
