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

// EJERCICIO 2:

// LO QUE SE PIDE: Define un objeto, mediante una expresión, que tenga dos propiedades: precio y descuento y un método neto. El método calculará el precio con el descuento aplicado. Los valores se pedirán por teclado.

// ACLARACIONES: GUARDAR UNA EXPRESIÓN A TRAVÉS DE LA CLASE "object" "dress", "prize" 400 y "discount" 10. El método devolverá como resultado 360 (400 - 10 * 400 / 100).

// SOLUCIÓN:

   var dress, data;

   dress = {

      prize: 0,
      discount: 0,
      neto: function()
      {
         return this.prize * (1 - this.discount / 100);
      }
   }

   dress.prize = parseInt(prompt("Precio Bruto: "));
   dress.discount = parseInt(prompt("Precio Bruto: "));
   console.log("El Precio Neto es de: " + dress.neto() + " €");

// EJERCICIO 3:

// LO QUE SE PIDE: En esta propuesta debes crear una clase de nombre piedra (con class o con function) con dos propiedades: masa, volumen y un método densidad que calcule este valor (masa/volumen). Luego instancia al menos un objeto de esta clase, dale un valor a su masa y a su volumen y ejecuta el método densidad.

// ACLARACIONES: Consta de la clase objeto "oro", "masa de la muestra" 194 gr y "volumen" 10 cc. "Densidad" deberá devolver 19,4.

// SOLUCIÓN:

   class rock
   {
      constructor(m, v)
      {
         this.masa = m;
         this.volumen = v;
      }

      densidad = function()
      {
         return this.masa / this.volumen;
      }
   }

   var gold = new rock(194, 10);

   console.log("Densidad: " + gold.densidad());

// EJERCICIO 4:

// LO QUE SE PIDE: Construye una clase usando function para implementar una cuenta de efectivo. Poseerá dos propiedades: nombre del titular y saldo. Además debe tener dos métodos: ingresar() y retirar(). El primero incrementa el saldo en la cantidad indicada en el argumento y el segundo lo reduce. No se puede sacar más de lo que exista en el saldo. 

// ACLARACIONES: A los métodos los invocaremos con las llamadas ingresar(1000) o retirar(100) Tras ingresar el saldo será 1000 y trs retirar el saldo será 900.

// SOLUCIÓN:

   Account = function(name, reward)
   {
      this.titular = name;
      this.reward = reward;
      this.ingresar = function(values)
      {
         this.reward += values;
      }

      this.cash = function(values)
      {
         if (values <= this.reward)
         {
             this.reward -= values;
         }
      }
   }

   var myAccount = new Account('Juan', 0);
   myAccount.ingresar(1000);
   console.log("El saldo actual es: " + myAccount.reward);
   myAccount.cash(100);
   console.log("El saldo actual de mi cuenta es: " + myAccount.reward);

// EJERCICIO 5:

// LO QUE SE PIDE:

// SOLUCIÓN:

// EJERCICIO 6:

// LO QUE SE PIDE:

// SOLUCIÓN:

// EJERCICIO 7:

// LO QUE SE PIDE:

// SOLUCIÓN:

// EJERCICIO 8:

// LO QUE SE PIDE:

// SOLUCIÓN:

// EJERCICIO 9:

// LO QUE SE PIDE:

// SOLUCIÓN: