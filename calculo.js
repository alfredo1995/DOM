function multiplosDeDoisETres(minimo, maximo)
debugger
{

    if ((minimo) < (maximo)) {

        for (var count = minimo; count <= (maximo); count++) {

            if ((count % 2 == 0) && (count % 3 == 0)) {

                console.log("O valor " + count + "é múltiplo de 2 e 3.")

            }

        }

    }

    else {

        alert("O número minimo é maior que o máximo")

    }

}