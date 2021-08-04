let q3 = document.getElementById('q3');

let botao3 = document.createElement("button");

botao3.setAttribute("id", 'button')
botao3.innerHTML = "Criar Relatorio";
botao3.setAttribute("type", "submit")

q3.appendChild(botao3)

let button3 = document.getElementById('button');

function media() {

    button3.addEventListener('click', function () { media() });

    let alunos = [];


    for (let i = 1; i <= 20; i++) {


        let al = new Aluno(i, Math.floor(Math.random() * 100));


        alunos.push(al);
    }


    document.write(media(5));
}
