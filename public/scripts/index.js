// console.log("Hola desde javascript");
// alert("mensaje de alerta")
// prompt("ingresa tus datos")
// confirm("Pregunta")

// const boton = document.querySelector('.logbutton');
// const usernameInput = document.getElementById('username');
// const passwordInput = document.getElementById('password');
// const correctUser = "edgar";
// const correctPass = "123";


// para username y password
const boton = document.getElementById("btnLogin");
const username = document.getElementById("username");
const password = document.getElementById("password");

const login = async () => {
    // validar credenciales
    const credentials = {username: username.value, password: password.value};
    const data = fetch ("http://localhost:5000/login", {
        headers: {"content-type": "application/json"},
        body: JSON.stringify(credentials),
    });
}
const user = await data.json();
if (res.isLogin == true) {
    sessionStorage.setItem("name", res.user.name);
    sessionStorage.setItem("id", res.user.id);
    windows.location = "./pages/profile.html";
} else {
    console.log("Usuario o contraseña incorrectos");
}

boton.addEventListener("click", login);