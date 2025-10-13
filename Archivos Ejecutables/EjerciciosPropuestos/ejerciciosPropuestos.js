// Los objetos son estructuras de datos complejas que se caracterizan por sus propiedades y por que pueden realizar acciones sobre si mismo (métodos). Para empezar mira en detalle la sección dedicada a  los objetos en Javascript y luego resuelve estos ejercicios básicos sobre objetos.

// EJERCICIO 1:

// LO QUE SE PIDE: Para comenzar vamos a crear un objeto sencillo que se usa para guardar información sobre las calificaciones de un alumno. El curso contiene tres materias: Ingles, programación y HTML, y el objeto contendrá el nombre del alumno y la calificación en cada una de ellas. El script imprimirá el nombre y la media de sus calificaciones.

// ACLARACIONES: GUARDAR LAS CALIFICACIONES DE UN ALUMNO DE NOMBRE "Juan", "Inglés", 9, "Programación", 8, "HTML", 7. SACARÁ NOTA MEDIA DE JUAN UN 8.

// SOLUCIÓN: 

   var rank, media;

   rank = {

    name: 'Juan',
    english: 10,
    programacion: 9,
    html: 8};

    media = (rank.english + rank.programacion + rank.html) / 3;

    console.log("Promedio de " + rank.name + " es " + media);