let q5 = document.getElementById('q5');

let CaixaTexto3 = document.createElement("input");         
let CaixaTexto33 = document.createElement("input");  
let CaixaTexto333 = document.createElement("input");  
let botao5 = document.createElement("button");


CaixaTexto3.setAttribute("id", "CaixaTexto")  
CaixaTexto3.setAttribute("type", "number")
CaixaTexto3.setAttribute("placeholder", "lado a")
CaixaTexto33.setAttribute("id", "CaixaTexto") 
CaixaTexto33.setAttribute("type", "number")
CaixaTexto33.setAttribute("placeholder", "lado b")
CaixaTexto333.setAttribute("id", "CaixaTexto")  
CaixaTexto333.setAttribute("type", "number")
CaixaTexto333.setAttribute("placeholder", "lado c")
botao5.setAttribute("id", 'button')
botao5.innerHTML = "Calcular";
botao5.setAttribute("type", "submit")

q5.appendChild(CaixaTexto3)                               
q5.appendChild(CaixaTexto33)
q5.appendChild(CaixaTexto333)
q5.appendChild(botao5)

let button5 = document.getElementById('button'); 

button5.addEventListener('click', function () { verificaTriangulo() });        

function verificaTriangulo() {
	lado1 = Number(document.getElementById('lado1').value);
	lado2 = Number(document.getElementById('lado2').value);
	lado3 = Number(document.getElementById('lado3').value);
	

	let resposta = ''
	if(lado1 == lado2 && lado2 == lado3){
		resposta = 'equilatero'
	} else {
		if(lado1 != lado2 && lado2 != lado3 && lado1 != lado3) {
			resposta = 'escaleno'
		} else {
			resposta = 'isosceles'
	}
}
	console.log("esse triangulo eh: " + resposta);

}