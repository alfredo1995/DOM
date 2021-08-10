Comentando e descomentando todo bloco de codigo 
	
	Ctl + k + c = comenta | ctl + k + u = descomenta

referenciando o documento HTML manipulado

    let q1 = document.getElementById('q1');	

criando elemento <input></input>

    let inputMinimo = document.createElement("input");		
    let inputMaximo = document.createElement("input");

setando atributo do elemento <input id="id" name="CaixaTexto"></input>

    inputMinimo.setAttribute("id", "minimo")
    inputMaximo.setAttribute("id", "maximo")

recebendo os elementos como parametro para instaciar na tela

    q1.appendChild(inputMinimo)		
    q1.appendChild(inputMaximo)

manipulando o elemento	

    let button = document.getElementById('button');	

ao clicar no elemnto aciona a função

    button.addEventListener('click', function () { multiplosDeDoisETres() });

function aciona ao clicar no elemnto aciona a função

    function multiplosDeDoisETres() {					

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
