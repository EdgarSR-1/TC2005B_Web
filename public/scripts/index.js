// console.log("Hola desde javascript");
// alert("mensaje de alerta")
// prompt("ingresa tus datos")
// confirm("Pregunta")

const boton = document.querySelector('.logbutton');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password')
const correctUser = "edgar";
const correctPass = "123";


const login = () => {
    // validar credenciales
    console.log(usernameInput.value + " " + passwordInput.value);
    // si login es correcto
    if((usernameInput.value === correctUser) && (passwordInput.value === correctPass)){
        sessionStorage.name = "Edgar Salazar";
        window.location = "./pages/profile.html"
    } else {
        alert("Usuario o Contraseña Incorrecta");
        console.log("credenciales incorrectas");
    }
}

boton.addEventListener("click", login);