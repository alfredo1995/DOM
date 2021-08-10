let q6 = document.getElementById('q6');
	q6.innerHTML = ' <h1>login</h1> 	<div id="nao_logado"> <input id="username" type="text"> '
	+ '<input id="password" type="password"> <button onclick="logar()">Login</button>'
	+ '<br/><br/><div>Novo Usuario</div> <input id="new_user" type="text"> <input id="new_password" type="password">'
	+ '<button onclick="criarUsuarioNovo()">Criar</button>	</div> <div id="messages"></div>	<div id="logado" style="visibility:hidden"> <div>Logado</div>'
	+ '<button onclick="deslogar()">Deslogar</button> </div> <script src="q6.js"> 	</script> </body> </html>';


	let button6 = document.getElementById('button'); 

	button6.addEventListener('click', function () { isLogged() });
  
	function isLogged() {
		return window.localStorage.getItem("login")
	}