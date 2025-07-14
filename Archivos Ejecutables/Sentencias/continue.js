// ----- SENTENCIA "continue"...

var friends = ['Alejandro', 'Cesar', 'Manuel', 'Luis'];

for (friend in friends)
{
    if (friends[friend] == 'Alejandro')
    {
        continue;
    }

    document.write(friends[friend] + '<br>');
}