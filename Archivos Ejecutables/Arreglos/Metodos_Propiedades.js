// TENIENDO ESTE ARREGLO CON VARIABLES A MODO DE EJEMPLO...

    var friends = ['Carlos', 'Alejandro', 'Cesar', 'Manuel', 'Luis'];

// ...LO APLICAREMOS A TRAVÉS DE LOS SIGUIENTES MÉTODOS Y/O PROPIEDADES DE DICHO ARREGLO:

// ----- Método Length (INDICA CUÁNTOS ELEMENTOS TIENE UN ARREGLO AL DECLARAR UNA VARIABLE).

    // document.write(friends.length); // 5 ELEMENTOS.

// ----- Método Join (JUNTA TODOS LOS ELEMENTOS DENTRO DE UN ARREGLO MEDIANTE SÍMBOLOS).

    // var stringText = friends.join(' ** ');
    // document.write(stringText);

// ----- Método Pop & Push (EL PRIMER MÉTODO ELIMINA EL ÚLTIMO ELEMENTO DENTRO DE UN ARREGLO, MIENTRAS QUE EN EL SEGUNDO LO INCORPORA).

    // PRIMER MÉTODO (pop()):

       // friends.pop();
       // console.log(friends);

    // SEGUNDO MÉTODO (push()):

       // friends.push('Felipe');
       // console.log(friends);


// ----- Método Shift & Unshift (EL PRIMER MÉTODO ELIMINA EL ELEMENTO INICIAL DENTRO DE UN ARREGLO, MIENTRAS QUE EN EL SEGUNDO INCORPORA UN NUEVO ELEMENTO EN LA PRIMERA POSICIÓN DENTRO DE DICHO ARREGLO).

    // PRIMER MÉTODO (shift()):

       // friends.shift();
       // console.log(friends);

    // SEGUNDO MÉTODO (unshift()):

       // friends.unshift('Oscar');
       // console.log(friends);

// ----- Método Concat (JUNTA AMBOS ARREGLOS DECLARADOS DENTRO DEL ARCHIVO).

       // var friends2 = ['Felipe', 'Oscar'];
       
       // var allMyFriends = friends.concat(friends2);

       // console.log(allMyFriends);

// ----- Método Sort & Reverse (ORDENA TODOS LOS ELEMENTOS DENTRO DE UN ARREGLO EN ORDEN ALFABÉTICO).

    // PRIMER MÉTODO (sort() (DE LA A A LA Z))):

       friends.sort();
       // console.log(friends);

    // SEGUNDO MÉTODO (reverse() (DE LA Z A LA A))):

       friends.reverse();
       console.log(friends);

