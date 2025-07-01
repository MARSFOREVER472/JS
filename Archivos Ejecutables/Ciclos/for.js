/* CICLO FOR */

/*

document.write('1');
document.write('2');
document.write('3');
document.write('4');
document.write('5');
document.write('6');

*/

// ESTRUCTURA BÁSICA DE UN CICLO "for":

/*

for (inicio; condicion; actualizacion)
{
    // Código...
}

*/

// ----- CICLO DEL 1 AL 10...

/*

for (var i = 1; i <= 10; i++)
{
    document.write(i);
    document.write('<br>');
}

*/

// ----- CICLO DEL 10 AL 1...

/*

for (var i = 10; i >= 0; i--)
{
    document.write(i);
    document.write('<br>');
}

*/

// ----- CICLO PARA RECORRER UN ARREGLO MEDIANTE "for"...

var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    for(var i = 0; i <= 11; i++)
    {
        document.write(i + 1 + '.- ' + months[i]);
        document.write('<br>');
    }
