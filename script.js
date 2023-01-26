function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light") // faz automaticamente o codigo acima
  

  // if (html.classList.contains("light")) {  // verifica se existe a classe LIGHT
  // html.classList.remove("light") // se tiver a classe LIGHT ele remove
  //} else {
  // html.classList.add("light") // se nao tiver a classe LIGHT ele ad
  // }
}
