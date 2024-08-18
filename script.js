function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  // pegar img
  const img = document.querySelector("#profile img")

  // substituir a img
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.jpg")
    img.setAttribute("alt", "avatar-light")
  }
  // se tiver ligth mode, adicionar a img ligth
  else {
    img.setAttribute("src", "./assets/avatar.jpg")
    img.setAttribute("alt", "avatar dark img")
  }

  // se tiver sem ligth mode, manter a img normal
}
