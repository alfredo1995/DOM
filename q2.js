let q2 = document.getElementById('q2');                             // referenciando o documento HTML manipulado
 
let CaixaTexto = document.createElement("input");                   // criando elemento <input></input>
let botao2 = document.createElement("button"); 
let resultado = document.createElement("p")
 
CaixaTexto.setAttribute("id", "CaixaTexto")                         // atributo do elemento <input id="id" name="CaixaTexto"></input>
CaixaTexto.setAttribute("type", "number")                           // atributo do elemento <input type="number" id="id" name="CaixaTexto"/>></input>
botao2.setAttribute("id", 'button')
botao2.innerHTML = "Calcular";
botao2.setAttribute("type", "submit")  
    
q2.appendChild(CaixaTexto)                                          // recebendo os elementos como parametro para instaciar na tela
q2.appendChild(botao2)
q2.appendChild(resultado)
 
let button2 = document.getElementById('button');                    // manipulando o elemento

button2.addEventListener('click', function () { fatorial() });      // ao clicar no elemnto aciona a função

function fatorial() {                                               // function aciona ao clicar no button2.addEventListener
 
    let fatorial = document.getElementById('CaixaTexto').value;
    let inicio = new Date().getTime();
 
    let fat = document.getElementById('fatorial');
    
    let result = 1;
    //logica para verificar o calculo
    for (i = 1; i <= fatorial; i++) {
        result = result * i;
    }
 
    let fim = new Date().getTime();
    resultado.innerHTML = (`${fatorial}! = ${result} - durou ${fim - inicio} milisegundos`)
 
}
 
document.write(fatorial(5));