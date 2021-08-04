let q1 = document.getElementById('q1');
let inputMinimo = document.createElement("input");
let inputMaximo = document.createElement("input");
let botao = document.createElement("button");
let lista = document.createElement("ul");

inputMinimo.setAttribute("id", "minimo")
inputMaximo.setAttribute("id", "maximo")
inputMinimo.setAttribute("id", "minimo")
inputMaximo.setAttribute("type", "number")
inputMinimo.setAttribute("placeholder", "Valor mínimo")
inputMaximo.setAttribute("placeholder", "Valor máximo")
botao.setAttribute("id", 'button')
botao.innerHTML = "Calcular";
botao.setAttribute("type", "submit")
lista.setAttribute("id", "ul")

q1.appendChild(inputMinimo)
q1.appendChild(inputMaximo)
q1.appendChild(botao)
q1.appendChild(lista)


let button = document.getElementById('button');
button.addEventListener('click', function () { multiplosDeDoisETres() });


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