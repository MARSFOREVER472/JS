/* OPERADORES LÓGICOS EN JAVASCRIPT... */

/* TIPOS DE OPERADORES:
   
   - ASIGNACIÓN.
   - MATEMÁTICOS Y/O ARITMÉTICOS.
   - INCREMENTO Y DECREMENTO.
   - OPERADORES LÓGICOS O DE COMPARACIÓN:

     - AND.
     - OR.
     - NOT.

*/

// TIPOS DE VARIABLES:

    // VARIABLES DE ASIGNACIÓN:

    var name,
        number,
        country;

    name = 'Marcelo';

    // VARIABLES MATEMÁTICOS Y/O ARITMÉTICOS:

    // var number1 = 10;
    // var number2 = 5;
    // var result = number1 + number2; // SUMA DE 2 NÚMEROS.
    // var result = number1 - number2; // RESTA DE 2 NÚMEROS.
    // var result = number1 * number2; // MULTIPLICACIÓN DE 2 NÚMEROS.
    // var result = number1 / number2; // DIVISIÓN DE 2 NÚMEROS.
    // var result = number1 % number2; // RESTO DE UNA DIVISIÓN DE 2 NÚMEROS.

    // document.write(result);

    // OPERADORES DE INCREMENTO Y DECREMENTO:
    
    /*

    var number = 2;
    // var result = number - 1;
    var result = number++; // OPERADOR DE INCREMENTO.
    // var result = --number; // OPERADOR DE DECREMENTO.

    document.write(result); // RESULTADO DE LA OPERACIÓN.
    document.write('<br >'); // SALTO DE LÍNEA.
    document.write(number); // VARIABLE NUMÉRICA.

    */

    // OPERADORES LÓGICOS O DE COMPARACIÓN:

       /* OPERADORES:

            ==    IGUAL A.
            ===   IGUAL EN VALOR Y TIPO.
            !=    DISTINTOS.
            !==   DISTINTOS EN VALOR Y TIPO.
            >     MAYOR QUE.
            <     MENOR QUE.
            >=    MAYOR O IGUAL QUE.
            <=    MENOR O IGUAL QUE.

       */

        var number1 = 10; // PRIMER VALOR.
        var number2 = 5; // SEGUNDO VALOR.
        // var result = number1 == number2; // "false".
        // var result = number1 != number2; // "true".
        // var result = number1 !== number2; // "true".
        // var result = number1 > number2; // "true".
        // var result = number1 < number2; // "false".
        // var result = number1 >= number2; // "true".
        var result = number1 <= number2; // "false".

        document.write(result);
