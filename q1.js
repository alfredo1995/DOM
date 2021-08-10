let q1 = document.getElementById('q1');									   // referenciando o documento HTML manipulado

let inputMinimo = document.createElement("input");				           // criando elemento <input></input>
let inputMaximo = document.createElement("input");
let botao = document.createElement("button");

inputMinimo.setAttribute("id", "minimo")							       // setando atributo do elemento <input id="id" name="CaixaTexto"></input>
inputMaximo.setAttribute("id", "maximo")
inputMinimo.setAttribute("type", "number")
inputMaximo.setAttribute("type", "number")
inputMinimo.setAttribute("placeholder", "Valor mínimo")
inputMaximo.setAttribute("placeholder", "Valor máximo")
botao.setAttribute("id", 'button')
botao.innerHTML = "Calcular";
botao.setAttribute("type", "submit")

q1.appendChild(inputMinimo)											        // recebendo os elementos como parametro para instaciar na tela
q1.appendChild(inputMaximo)
q1.appendChild(botao)


let button = document.getElementById('button');								// manipulando o elemento	

button.addEventListener('click', function () { multiplosDeDoisETres() });	// ao clicar no elemnto aciona a função


function multiplosDeDoisETres() {										    // function aciona ao clicar no button2.addEventListener

	let minimo = document.getElementById('minimo').value;
	let maximo = document.getElementById('maximo').value; 
	

	if (minimo <= maximo) {

		for (var count = minimo; count <= maximo; count++) {

			if ((count % 2 == 0) && (count % 3 == 0)) {
				let item = document.createElement("li");				
                lista.appendChild(item)				
				let texto = document.createElement("p");				
				item.appendChild(texto)
				texto.innerHTML  = "O valor " + count + " " + "é múltiplo de 2 e 3.";

			}

		}

	}

}