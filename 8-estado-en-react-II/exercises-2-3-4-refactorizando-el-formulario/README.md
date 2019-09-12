EJERCICIO 2
Refactor del formulario
Vamos a hacer un pequeño refactor del código del ejercicio anterior: usaremos una única función escuchadora para el evento change de cada campo. Para eso, recordad que podemos acceder a la clave de un objeto cuyo nombre tenemos en una variable usando el operador [key] siendo key la variable que tiene el nombre de un campo del objeto.

EJERCICIO 3
Más datos de las pelis
Vamos a añadir más información a nuestro formulario de películas
clasificación por edades, donde usaremos radio buttons con las opciones: A (todos los públicos, aparece marcada por defecto), 7, 12, 16 y 18
género, donde usaremos checkboxes y podrán marcarse un máximo de 3 de las opciones: comedia, drama, fantasía, acción, familia, terror


EJERCICIO 4
Pelis con carátula
Partiendo del ejercicio anterior, vamos a añadir un campo más al formulario que sea la carátula de la película. Al elegir el usuario una carátula, se muestra una previsualización de la misma, y se guardan los datos en el estado. Recuerda que para leer la información de ficheros debemos usar un FileReader y para recoger la información de una imagen su método readAsDataURL.