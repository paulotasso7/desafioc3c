const resultadoLuidy = document.getElementById("result");
const btn = document.getElementById("submit");
const input = document.getElementById("l-m");

function luidyMouraFunction(int) {
  console.log("click");
  int = input.value;
  let array = [];
  for (i = 1; i <= int; i++) {
    if (i % 5 === 0 && i % 9 === 0) {
      array.push("LuidyMoura");
    } else if (i % 9 === 0) {
      array.push("Moura");
    } else if (i % 5 === 0) {
      array.push("Luidy");
    } else {
      array.push(i);
    }
  }

  return (resultadoLuidy.innerHTML = `[${array}]`);
}

btn.addEventListener("click", luidyMouraFunction);
