let q2 = document.getElementById('q2');
 
let CaixaTexto = document.createElement("input");  //   criar elemento <input></input>
let botao2 = document.createElement("button"); 
 
CaixaTexto.setAttribute("id", "CaixaTexto")  //  atributo do elemento <input id="id" name="CaixaTexto"></input>
CaixaTexto.setAttribute("type", "number") 
botao2.setAttribute("id", 'button')
botao2.innerHTML = "Calcular";
botao2.setAttribute("type", "submit")  
 
q2.appendChild(CaixaTexto)  // recebendo parametro dos elemento de acima
q2.appendChild(botao2)
 
let button2 = document.getElementById('button');  // manipulando o elemento
 
function fatorial() {
 
    button2.addEventListener('click', function () { fatorial() }); //    ao clicar no elemnto aciona a função
 
    let fatorial = document.getElementById('CaixaTexto').value;
    let inicio = new Date().getTime();
 
    let fat = document.getElementById('fatorial');
    let number = Number(fat.value);
    let result = 1;
     
    for (i = 1; i <= number; i++) {
        result = result * i;
    }
 
    let fim = new Date().getTime();
    document.write(`${number}! = ${result} - durou ${fim - inicio} milisegundos`)
 
}
 
document.write(fatorial(5));