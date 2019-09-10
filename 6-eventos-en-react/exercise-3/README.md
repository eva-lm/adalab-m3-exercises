EJERCICIO 3
Expreso mi odio en rojo
Partiendo del código ejercicio 1, vamos a hacer que nuestro componente ocupe toda la pantalla disponible, y tenga el textarea en el centro. Vamos a hacer que al detectar la palabra cebolla en el texto, en vez de mostrar un alert mostrando nuestro odio, pongamos el fondo del componente de color rojo. Al volver a un texto sin cebolla, el fondo vuelve a ser blanco.
Guardaremos la información de si estamos odiando o no en un atributo de la clase que al comienzo es falso this.isHating = false
En la función que maneja el evento change del textarea modificaremos el atributo isHating y usaremos el método forceUpdate para forzar el repintado
PISTA: recuerda que para que el this funcione correctamente en nuestra función de handle debemos hacer el bind adecuado en el constructor
BONUS: ¿Podrías hacer que nuestro odio aparezca tanto si 'cebolla' tiene mayúsculas o minúsculas?