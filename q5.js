let q5 = document.getElementById('q5');

let CaixaTexto3 = document.createElement("input");  //   criar elemento <input></input>
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

q5.appendChild(CaixaTexto3)  // recebendo parametro dos elemento de acima
q5.appendChild(CaixaTexto33)
q5.appendChild(CaixaTexto333)
q5.appendChild(botao5)