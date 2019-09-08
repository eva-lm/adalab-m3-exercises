/* EJERCICIO 1
Ya tenemos las notas del examen! Los profes, como somos así, las hemos metido en un array: const marks = [5, 4, 6, 7, 9];. Casi todo el mundo lo ha hecho bastante bien pero... vamos a hacer un poco de trampa de la buena :) Vamos a modificar las notas de todas para añadirles 1 punto, ¿no? Pues usemos nuestro reciente amigo map para crear un nuevo array inflatedMarks con las notas modificadas. Finalmente, mostraremos en la consola las notas modificadas para ver que funciona correctamente. ¡Al lío! */

const marks = [5, 4, 6, 7, 9];
const inflatedMarks = marks.map(mark => mark + 1);

console.log("inflated marks ->", inflatedMarks);
console.log("normal marks ->", marks);

/* EJERCICIO 2
Saludar es de buena educación
Estamos creando una aplicación web, y lo primero que queremos hacer es saludar al usuario por su nombre, ¡como es debido! Tenemos un array con el listado de usuarios de nuestra aplicación const names = ['María', 'Lucía', 'Susana', 'Rocío', 'Inmaculada']; y queremos conseguir otro array con los saludos, por ejemplo, 'Bienvenida Yolanda'. ¿Podríamos usar map para que nos echase una mano? */

const names = ["María", "Lucía", "Susana", "Rocío", "Inmaculada"];

const regards = names.map(item => "Bienvenida " + item);
console.log("regards:", regards);

/* EJERCICIO 3
Gracias por confiar en nosotros
Seguimos desarrollando nuestra aplicación web que romperá el mercado. Pero antes, queremos agradecer a nuestros usuarios premium (de pago) su ayuda en el saludo de la aplicación. Por tanto, a los usuarios premium queremos saludarles así 'Bienvenida Yolanda. Gracias por confiar en nosotros.', y mantener el saludo simple 'Bienvenida Yolanda' para el resto de usuarios.
Vamos a partir de este array con el listado de usuarios que incluye tanto su nombre como si son usuarios premium o no.
Tenemos que crear un nuevo array con los saludos. ¿Podremos hacerlo con map? */

const users = [
  { name: "María", isPremium: false },
  { name: "Lucía", isPremium: true },
  { name: "Susana", isPremium: true },
  { name: "Rocío", isPremium: false },
  { name: "Inmaculada", isPremium: false }
];

const premiumRegards = users.map(item => {
  if (item.isPremium === true) {
    return "Bienvenida " + item.name + ". Gracias por confiar en nosotros.";
  } else {
    return "Bienvenida " + item.name;
  }
});
console.log("premium regards -> ", premiumRegards);

/* EJERCICIO 4
Solo los premium
Seguimos con nuestra app de moda y vamos a utilizar el listado de usuarios del ejercicio 3. Pero ahora queremos tener un listado de usuarios (en un array premiumUsers) que solo tenga los usuarios premium. ¿Sabremos hacerlo con filter? */

const premiumUsers = users.filter(item => item.isPremium === true);

console.log("only premium users ->", premiumUsers);
