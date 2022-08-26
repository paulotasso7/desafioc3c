const btn = document.querySelector("#submit");
let ladoA = document.querySelector("#l-a");
let ladoB = document.querySelector("#l-b");
let ladoC = document.querySelector("#l-c");
const tipoDoTriangulo = document.querySelector("#result");

function triangleClassification(l1, l2, l3) {
  l1 = ladoA.value;
  l2 = ladoB.value;
  l3 = ladoC.value;

  if (l1 === "" || l2 === "" || l3 === "") {
    alert("Preencha os inputs");
    return;
  }

  if (isNaN(l1) || isNaN(l2) || isNaN(l3)) {
    alert("Digite apenas números");
    return;
  }

  if (l1 !== l2 && l1 !== l3 && l2 !== l3)
    return (tipoDoTriangulo.innerHTML = "O triangulo é Escaleno");

  if (l1 === l2 && l2 === l3)
    return (tipoDoTriangulo.innerHTML = "O triangulo é Equilátero");
  else return (tipoDoTriangulo.innerHTML = "O triangulo é Isósceles");
}

btn.addEventListener("click", triangleClassification);
