const darkModeButton = document.getElementById("dark-mode-toggle") as HTMLInputElement;
const bodyDarkMode = (classe1: string, classe2: string) => {
    document.body.classList.add(classe1);
    document.body.classList.remove(classe2);
    return [classe1, classe2]
}
const setarDarkModeLocalStorage = (darkMode: string) => {
  localStorage.setItem("modoEscuro", darkMode);
}

darkModeButton.addEventListener("change", () => {
  const [darkMode, WhiteMode] = bodyDarkMode("dark-mode", "white-mode");
  if (darkModeButton.checked) {
    bodyDarkMode("dark-mode", "white-mode");
    setarDarkModeLocalStorage(darkMode)
  } else {
    bodyDarkMode("white-mode", "dark-mode");
    setarDarkModeLocalStorage(WhiteMode)
  }
});

const aplicarValoresSalvosDarkMode = () => {
  const recuperarValor = localStorage.getItem("modoEscuro")
  if (recuperarValor === "dark-mode") {
    bodyDarkMode("dark-mode", "white-mode");
  }else{
    bodyDarkMode("white-mode", "dark-mode");
  }
}
aplicarValoresSalvosDarkMode()
