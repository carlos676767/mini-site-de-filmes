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
    setarDarkModeLocalStorage(darkMode);
  } else {
    bodyDarkMode("white-mode", "dark-mode");
    setarDarkModeLocalStorage(WhiteMode);
  }
});

const aplicarValoresSalvosDarkMode = () => {
  const darkModeRecuperarValor = localStorage.getItem("modoEscuro")
  if (darkModeRecuperarValor === "dark-mode") {
    bodyDarkMode("dark-mode", "white-mode");
    salvarEstadoCheckBox(true);
  }else{
    bodyDarkMode("white-mode", "dark-mode");
    salvarEstadoCheckBox(false);
  }
}

const salvarEstadoCheckBox = (checkBox: boolean) => {
  darkModeButton.checked = checkBox;
}

aplicarValoresSalvosDarkMode();

const criarImagemPostFilmes = (imagemFilmes: string) => {
  const imagem = document.createElement("img") as HTMLImageElement
  imagem.src = imagemFilmes;
  document.body.appendChild(imagem);
}

const mostrarFilmesTelaInicial = () => {
  fetch(`https://api.themoviedb.org/3/discover/movie?api_key=09758ab42365c2b6eb05764a5a91b495&with_genres=10749`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      data.results.forEach((filmes: any) => {
        const { poster_path, overview } = filmes;
        console.log(overview);
        mostrarSinopse(overview)
        criarImagemPostFilmes(`https://image.tmdb.org/t/p/w200/${poster_path}`);
      });
    });
};

const mostrarSinopse = (textoTraduzido: string) => {
  const p = document.createElement("p") as HTMLParagraphElement
  p.innerText = textoTraduzido
  document.body.appendChild(p)
}


mostrarFilmesTelaInicial()