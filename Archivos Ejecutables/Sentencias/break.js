// ----- SENTENCIA "break"...

var friends = ['Alejandro', 'Cesar', 'Manuel', 'Luis'];

for (friend in friends)
{
    document.write(friends[friend] + '<br>');

    if(friends[friend] == 'Cesar')
    {
        break;
    }

    console.log('Fin del ciclo');
}