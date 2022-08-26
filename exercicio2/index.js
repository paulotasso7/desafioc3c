const ax = document.getElementById("l-a");
const bx = document.getElementById("l-b");
const cx = document.getElementById("l-c");
const btn = document.getElementById("submit");
const result = document.getElementById("result");

function BhaskaraFormula(a, b, c) {
  a = ax.value;
  b = bx.value;
  c = cx.value;

  if (a == "" || b == "" || c == "") return alert("preencha os valores");

  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    alert("digite numeros");
    return;
  }

  const delta = b ** 2 - 4 * a * c;
  const deltaNegativo = "O delta é negativo";
  const positiveX = (-b + Math.sqrt(delta)) / (2 * a);
  const negativeX = (-b - Math.sqrt(delta)) / (2 * a);

  if (delta < 0) return (result.innerHTML = deltaNegativo);
  if (delta)
    return (result.innerHTML = ` Resultado (x'= ${positiveX}, x''= ${negativeX})`);
}

btn.addEventListener("click", BhaskaraFormula);
