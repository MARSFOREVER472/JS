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

/* LO QUE SE PIDE: Crea una clase Ficha, con su constructor, que se usará para almacenar el número de kilómetros recorridos por una persona en cada sesión de ejercicios. Las propiedades de la clase serán:

   - name
   - sessions
   - numberSessions

   El nombre es el de la persona, en los sesiones se almacenará el número de kilometros recorridos en cada sesión y numsesiones contiene el número de sesiones anotadas.

   Tiene dos métodos:

   - anotar: Anota los kilómetros.
   - media: Calcula la media de kilómetros recorridos.

*/

/* ACLARACIONES: Cada persona tendrá su ficha construída con esta clase.

   - Si ejecuto anotar(8), anotar(10), anotar(6), en las sesiones se anotarán 8, 10, 6.

   - Si escribo media() devolverá 8 ((8+10+6)/3).

   En la solución se usa el camino má primitivo posible: arrays y bucles básicos.

*/

// SOLUCIÓN:

   class Chip
   {
      constructor(n)
      {
         this.name = n;
         this.sessions = [];
         this.numberSessions = 0;
      }

      anotar = function(km)
      {
         this.sessions[this.numberSessions] = km;
         this.numberSessions++; 
      }

      media = function()
      {
         var media = 0;

         for (let i = 0; i < this.sessions.length; i++)
         {
            media += this.sessions[i];
         }

         return media / this.numberSessions;
      }
   }

   var fichaJuan = new Chip('Juan');

   fichaJuan.anotar(10);
   fichaJuan.anotar(8);
   fichaJuan.anotar(6);

   console.log("Kilometros en Promedio: " + fichaJuan.media());

// EJERCICIO 6:

/* LO QUE SE PIDE:

   Crea una clase que lamaremos Bus. Sus atributos serán:

      - capacidad: número máximo de pasajeros.
      - pasajeros: número de pasajeros (inicialmente 0).
      - conductor: objeto conductor.

   Sus métodos:

      - subir(pasajeros): aumenta el numero de pasajeros
      - bajar(pasajaeros): disminuye el número de pasajeros
      - conductor: asigna un objeto conductor.

   El objeto conductor es de una clase (Conductor) cuyos atributos son:

      - nombre: nombre del conductor
      - licencia: un número que identifica al condcutor.

   Al crear el objeto se asigna también el conductor que no pueden subir más pasajeros que los máximos admitidos y no pueden bajar más de los que hay.

*/

/* ACLARACIONES: 

   - El autobús linea1 puede llevar 40 pasajeros y su conductor se llama José su licencia es la 1234.

   - Si se pide subir(25) , el atributo pasajeros valdrá 25.

   - Si a continuación se pide subir(35) solo subirán 15, (2 + 15 son los 40 de máximo)

   - Si pedimos bajar 45, el autobús se queda vacío.

   - Si teniendo 35 pasajeros se pide que bajen 40 el autobús se queda vacío.

*/

// SOLUCIÓN:

   class TransAntofagasta
   {
      constructor(chofer, cantidad)
      {
         this.chofer = chofer;
         this.cantidad = cantidad;
         this.usuarios = 0;
      }

      subir = function(numero)
      {
         if (this.usuarios + numero < this.cantidad)
         {
            this.usuarios += numero; 
         }

         else
         {
            this.usuarios = this.cantidad;
         }
      }

      bajar = function(numero)
      {
         if (numero <= this.usuarios)
         {
            this.usuarios -= numero;
         }

         else
         {
            this.usuarios = 0;
         }
      }
   }

   class Chofer
   {
      constructor(nb, lic)
      {
         this.nombre = nb;
         this.credencial = lic;
      }
   }

   var chofer1 = new Chofer("Leon", 1234);
   var linea102 = new TransAntofagasta(chofer1, 40);

   console.log("Nombre del Chofer: " + linea102.chofer.nombre);
   linea102.subir(30);
   console.log("Pasajeros al subir 30: " + linea102.usuarios);
   linea102.subir(20);
   console.log("Pasajeros al subir 20: " + linea102.usuarios);
   linea102.bajar(30);
   console.log("Pasajeros al bajar 30: " + linea102.usuarios);

// EJERCICIO 7:

// LO QUE SE PIDE:

// SOLUCIÓN:

// EJERCICIO 8:

// LO QUE SE PIDE:

// SOLUCIÓN:

// EJERCICIO 9:

// LO QUE SE PIDE:

// SOLUCIÓN: