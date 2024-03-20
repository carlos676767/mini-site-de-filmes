const darkModeButton = document.getElementById("dark-mode-toggle") as HTMLInputElement;
const bodyDarkMode = (classe1: string, classe2: string) => {
    document.body.classList.add(classe1);
    document.body.classList.remove(classe2);
}
darkModeButton.addEventListener("change", () => {
  if (darkModeButton.checked) {
    bodyDarkMode("dark-mode","white-mode")
  } else {
    bodyDarkMode("white-mode","dark-mode")
  }
});

