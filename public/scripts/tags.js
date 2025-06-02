window.onload = () => {
    const link = document.getElementById("gameIframe");
    link,setAtrribute("src", "./game/index.html?id=" + sessionStorage.id);
};