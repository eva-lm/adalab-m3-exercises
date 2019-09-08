/* EJERCICIO 7
La media de la carrera
Hemos organizado una carrera de escobas para que podáis exprimir a fondo vuestra flamante Nimbus 2000. Tenemos los tiempos en este array y nos gustaría conocer la media: ¿nos ayudas a calcularla usando reduce? (Con reduce siempre hay que hacer un return!!!! si no da undefined.) */

const times = [56, 9, 45, 28, 35];
//debugger;
const result = times.reduce((acc, number) => acc + number) / times.length;

console.log("el resultado de la media es ", result);

//const media = result / times.length;
//console.log(media);

/* 
EJERCICIO 8
El ganador de la carrera
Ya hemos conseguido los nombres de los competidores y nos gustaría que usases reduce para averiguar quién ha ganado.
PISTA: en este caso el acumulador puede ser no sólo un número sino cualquier valor. Por ejemplo un objeto que sea nuestro candidato a ganador :) */

/* const runners = [
  { name: "Gregory Goyle", time: 56 },
  { name: "Nymphadora Tonks", time: 9 },
  { name: "Luna Lovegood", time: 45 },
  { name: "Cedric Diggory", time: 28 },
  { name: "Cho Chang", time: 35 }
]; */

/* EJERCICIO 9
El ganador de los estudiantes
Como en el ejemplo anterior vamos a averiguar quién ha ganado usando reduce, pero queremos saber el ganador de los estudiantes, por lo que tendremos que filtrar primero quiénes lo son. */

const runners = [
  { name: "Gregory Goyle", time: 56, student: true },
  { name: "Nymphadora Tonks", time: 9, student: false },
  { name: "Luna Lovegood", time: 45, student: true },
  { name: "Cedric Diggory", time: 28, student: true },
  { name: "Cho Chang", time: 35, student: true }
];

const winners = runners
  .filter(winner => winner.student === true)
  .reduce((prev, current) => {
    if (prev.time < current.time) {
      return prev;
    } else {
      return current;
    }
  }); //si es igual habría que hacer algo

console.log(winners);
