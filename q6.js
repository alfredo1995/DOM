// let q6 = document.getElementById('q6');	
// 	q6.innerHTML = ' <h1>login</h1> 	<div id="nao_logado"> <input id="username" type="text"> '
// 	+ '<input id="password" type="password"> <button onclick="logar()">Login</button>'
// 	+ '<br/><br/><div>Novo Usuario</div> <input id="new_user" type="text"> <input id="new_password" type="password">'
// 	+ '<button onclick="criarUsuarioNovo()">Criar</button>	</div> <div id="messages"></div>	<div id="logado" style="visibility:hidden"> <div>Logado</div>'
// 	+ '<button onclick="deslogar()">Deslogar</button> </div> <script src="q6.js"> 	</script> </body> </html>';


	let q6 = document.getElementById('q6');							            // referenciando o documento HTML manipulado

	let username = document.createElement("input");				                // criando elemento <input></input>
	let password = document.createElement("input");
	let Login = document.createElement("button");
		
	username.setAttribute("new_user", "username")						         // setando atributo do elemento <input id="id" name="CaixaTexto"></input>
	password.setAttribute("new_password", "password")
	username.setAttribute("type", "text")	
	password.setAttribute("type", "password")
	username.setAttribute("placeholder", "nome do usuario")
	password.setAttribute("placeholder", "senha do usuario")
	Login.setAttribute("criarUsuarioNovo", 'button')
	Login.innerHTML = "Login";
	Login.setAttribute("type", "submit")
		
	q6.appendChild(username)										             // recebendo os elementos como parametro para instaciar na tela
	q6.appendChild(password)
	q6.appendChild(Login)	

	let buttonLogin = document.getElementById('button');					     // manipulando o elemento	

	buttonLogin.addEventListener('click', function () { criarUsuarioNovo() });   // ao clicar no elemnto aciona a função  
  



	function isLogged() {
		return window.localStorage.getItem("login")
	}
	
	function deslogar() {
		naoLogadoElement = document.getElementById('nao_logado');
		logadoElement = document.getElementById('logado');
	
		window.localStorage.removeItem("login")
		naoLogadoElement.style.visibility = 'visible'
		logadoElement.style.visibility = 'hidden'
	}
	
	function logar() {
	
		naoLogadoElement = document.getElementById('nao_logado');
		logadoElement = document.getElementById('logado');
		let username = document.getElementById('username').value
		let password = document.getElementById('password').value
		let users = []
		if (window.localStorage.getItem("users")) {
			users = JSON.parse(window.localStorage.getItem("users"))
		}
		for (let i = 0; i < users.length; i++) {
			if (users[i].username == username && users[i].password == password) {
				window.localStorage.setItem("login", document.getElementById('username').value)
				naoLogadoElement.style.visibility = 'hidden'
				logadoElement.style.visibility = 'visible'
				break;
			}
		}
	}
	
	function criarUsuarioNovo() {
		let username = document.getElementById('new_user').value
		let password = document.getElementById('new_password').value;
		let messages = document.getElementById('messages');
		let users = []
		if (window.localStorage.getItem("users")) {
			users = JSON.parse(window.localStorage.getItem("users"))
		}
	
		users.push({ username: username, password: password })
		window.localStorage.setItem("users", JSON.stringify(users));
		messages.innerHTML = "<div>Usuario criado!</div>";
	}