window.onload = () => {
    if(sessionStorage.name){
        const name = document.getElementById("name");
        name.innerText = "Name: " + sessionStorage.name
    } else {
        alert("Error: No hay sesión activa, inicia sesión.")
        window.location = "../index.html"
    }
};

const logout = document.getElementById("logout");
logout.addEventListener("click", () => {
    sessionStorage.clear();
});