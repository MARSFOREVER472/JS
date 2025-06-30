/* CONDICIONALES EN JAVASCRIPT */

/* 
   
   SIGUIENDO ESTE ALGORITMO:

   if(condicion) 
   {
      codigo... 
   }

*/

// ENTONCES TENEMOS EL SIGUIENTE EJEMPLO:

/*

   var age = 15;

   if (age >= 18)
   {
    document.write('ERES MAYOR DE EDAD');
   }

   else
   {
    document.write('ERES MENOR DE EDAD');
   }

*/

   // TRABAJANDO CON CONDICIONALES BÁSICAS...

   /*

   var pais = 'Chile';

   if (pais == 'Mexico')
   {
    document.write('ERES UN COMPATRIOTA DE ESTE PAÍS!!!!');
   }

   else if(pais == 'España')
   {
    document.write('ERES UN INMIGRANTE REGULAR DE SU PAÍS!!!!');
   }

   else
   {
    document.write('ERES UNA PERSONA EXTRANJERA!!!!');
   }

   */

   // TRABAJANDO MEDIANTE UN "switch"...

   var pais = 'Chile';

   switch(pais)
   {

    case 'Mexico':
        document.write('ERES MEXICANO!!!!');
        break;

    case 'España':
        document.write('ERES ESPAÑOL!!!!');
        break;

    case 'Colombia':
        document.write('ERES COLOMBIANO!!!!');
        break;

    default:
        document.write('ERES UNA PERSONA EXTRANJERA!!!!');
        break;
   }
