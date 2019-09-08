/* EJERCICIO 5
Los pares pueden entrar
Tenemos un listado de las contraseñas (PIN de 4 números) de los usuarios de nuestra web:
const pins = [2389, 2384, 2837, 5232, 8998];
De ese listado de contraseñas, queremos que solo puedan entrar los que han elegido una contraseña que es un número par para hacer A/B testing. ¿Nos ayudas a encontrar las contraseñas usando filter?
PISTA: Recuerda que el resto de la división entera (módulo %) de número par es 0. */

const pins = [2389, 2384, 2837, 5232, 8998];

const isPairPin = pins.filter(item => {
  if (item % 2 == 0) {
    return true;
  }
});
console.log(`Los pines pares son: ${isPairPin}`);

/* EJERCICIO 6
Los usuarios que pueden entrar
Ya hemos conseguido las contraseñas pertenecientes a cada usuario. ¿Podrías darnos un array con los usuarios que pueden acceder a la aplicación, es decir, los que tienen como PIN un número par? */

const users = [
  { name: "María", isPremium: false, pin: 2389 },
  { name: "Lucía", isPremium: true, pin: 2384 },
  { name: "Susana", isPremium: true, pin: 2837 },
  { name: "Rocío", isPremium: false, pin: 5232 },
  { name: "Inmaculada", isPremium: false, pin: 8998 }
];

const userPair = users.filter(item => {
  if (item.pin % 2 == 0) {
    return true;
  }
});
console.log("Los usarios que pueden acceder son: ", userPair);
