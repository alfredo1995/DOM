let q4 = document.getElementById('q4');                                      // referenciando o documento HTML manipulado

let CaixaTexto2 = document.createElement("input");                           // criar elemento <input></input>
let CaixaTexto22 = document.createElement("input");  
let quantidade = document.createElement("input");
let botao4 = document.createElement("button");

CaixaTexto2.setAttribute("id", "CaixaTexto")                                 // atributo do elemento <button id="id" name="CaixaTexto"></input>
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

q4.appendChild(CaixaTexto2)                                                  // recebendo os elementos como parametro para instaciar na tela     
q4.appendChild(CaixaTexto22)
q4.appendChild(quantidade) 
q4.appendChild(botao)

let button4 = document.getElementById('button');                             // manipulando o elemento

button4.addEventListener('click', function () { criarArray() });             // ao clicar no elemnto aciona a função   

function criarArray(){                                                       // function acionada ao clicar no button2.addEventListener
	let qtd = Number(document.getElementById('qtd').value);
	let minimo = Number(document.getElementById('min').value);
	let maximo = Number(document.getElementById('max').value);

	console.log(minimo + maximo);
	let arr = []
	for(let i = minimo; i < qtd; i++){
		arr.push(getNumero(minimo,maximo))
	}

	ordenar(arr)
	console.log(arr)

}


function getNumero(minimo,maximo){
	return Math.floor((Math.random() * maximo) + minimo)
}

function ordenar(list){
	for(let i = 0; i <list.length - 1; i++){
		for (let j = i + 1; j < list.length; j++) {
			if(list[i] > list[j]) {
				let aux = list[j]
				list[j] = list[i]
				list[i] = aux

			}
		}
	}
}
   

