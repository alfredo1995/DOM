let q4 = document.getElementById('q4');
let CaixaTexto2 = document.createElement("input");  //   criar elemento <input></input>
let CaixaTexto22 = document.createElement("input");  
let quantidade = document.createElement("input");
let botao4 = document.createElement("button");

CaixaTexto2.setAttribute("id", "CaixaTexto")  
CaixaTexto2.setAttribute("type", "number")
CaixaTexto2.setAttribute("placeholder", "valor minimo")
CaixaTexto22.setAttribute("id", "CaixaTexto") 
CaixaTexto22.setAttribute("type", "number")
CaixaTexto22.setAttribute("placeholder", "valor maximo")
quantidade.setAttribute("id", "minimo")
quantidade.setAttribute("type", "number")
quantidade.setAttribute("placeholder", "quantidade")
botao4.setAttribute("id", 'button')
botao4.innerHTML = "Calcular";
botao4.setAttribute("type", "submit")

q4.appendChild(CaixaTexto2)  // recebendo parametro dos elemento de acima
q4.appendChild(CaixaTexto22)
q4.appendChild(quantidade) 
q4.appendChild(botao)

function randomNumber(number) {

    button3.addEventListener('click', function () { Relatorio() });

 
        var result = Math.floor(Math.random()*number);
        return result;
     
}



   

