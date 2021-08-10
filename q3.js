let q3 = document.getElementById('q3');                              // referenciando o documento HTML manipulado

let botao3 = document.createElement("button");                       // criando elemento <input></input>
let table = document.createElement("table");

botao3.setAttribute("id", 'button')                                  // atributo do elemento <button id="id" name="CaixaTexto"></input>
botao3.innerHTML = "Criar Relatorio";                                // atributo do elemento <button type="submit" id="id" name="CaixaTexto"/>></input> 
botao3.setAttribute("type", "submit")
table.setAttribute("id", 'table')

q3.appendChild(botao3)                                              // recebendo os elementos como parametro para instaciar na tela   
q3.appendChild(table)

let button3 = document.getElementById('button');                    // manipulando o elemento

button3.addEventListener('click', function () { media() });         // ao clicar no elemnto aciona a função

function media() {                                                  // function acionada ao clicar no button2.addEventListener                        

    let alunos =

        //criando objeto - array de alunos
        [
            {
                alunos: 1,
                nota: 0,
                situacao: ""
            },
            {
                alunos: 2,
                nota: 0,
                situacao: ""
            },
            {
                alunos: 3,
                nota: 0,
                situacao: ""
            }
        ];

    //foreach de alunos 
    
    alunos.forEach(element => {
        element.nota = Math.floor(Math.random() * 100)
        //logica para verificar nota do aluno
        if(element.nota < 60){
            element.situacao = "reprovado"
        }else if(element.nota >= 60){
            element.situacao = "aprovado"
        }
    });


    //document.write(media(5));
}
