const resultadoAprovação = document.getElementById("result");
const btn = document.getElementById("submit");
const input = document.getElementById("l-n");

function calculoAprovacao(nota) {
  console.log("click");
  nota = input.value;
  const notaArredondada = Math.ceil(nota / 5) * 5;

  if (nota === "") return alert("Por favor, informe a nota");

  if (nota < 38) {
    return (
      (resultadoAprovação.style.color = "red"),
      (resultadoAprovação.innerHTML = "Que pena,você foi reprovado")
    );
  }
  if (nota % 5 < 3) {
    return (
      (resultadoAprovação.style.color = "green"),
      (resultadoAprovação.innerHTML = `Parabéns, você foi aprovado com ${nota} pontos`)
    );
  } else if (nota % 5 >= 3) {
    return (
      (resultadoAprovação.style.color = "green"),
      (resultadoAprovação.innerHTML = `Parabéns, você foi aprovado com ${notaArredondada} pontos`)
    );
  }
}

btn.addEventListener("click", calculoAprovacao);
