function trocar() {
  if (document.querySelector("button").classList.contains("preto")) {
    document.querySelector("button").classList.add("roxo");
    document.querySelector("button").classList.remove("preto");
  } else {
    document.querySelector("button").classList.add("preto");
    document.querySelector("button").classList.remove("roxo");
  }
}
