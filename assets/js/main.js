function previneEnvio() {
  const formulario = document.querySelector(".fomulario");

  formulario.addEventListener("submit", (event) => {
    event.preventDefault();
    const inputPeso = event.target.querySelector("#valorPeso");
    const inputAltura = event.target.querySelector("#valorAltura");

    const peso = Number(inputPeso.value);
    const altura = Number((inputAltura.value));

    if (!peso) {
      insereValor("Peso inválido!", false);
      return;
    }
    if (!altura) {
      insereValor("Altura inválida!", false);
      return;
    }

    const imc = calculaImc(peso, altura);
    const nivel = ObtemNivelImc(imc);

    insereValor(`Seu IMC é ${imc} (${nivel})`);

  })
}

function calculaImc(peso, altura) {
  let calculo = peso / (altura * altura);
  return calculo.toFixed(1);
}

function ObtemNivelImc(imc) {
  let resultado = ["Abaixo do peso", "Peso normal", "Sobrepeso",
    "Obesidade grau 1", "Obesidade grau 2", "Obesidade grau 3"];

  if (imc < 18.5) return resultado[0];
  if (imc < 25) return resultado[1];
  if (imc < 30) return resultado[2];
  if (imc < 35) return resultado[3];
  if (imc < 40) return resultado[4];
  if (imc >= 40) return resultado[5];

  insereValor(resultado);
}

function criaParagrafo() {
  return document.createElement('p');
}


function insereValor(msg, isValid = true) {
  const mensagem = document.querySelector("#mensagem");
  mensagem.innerHTML = '';
  const p = criaParagrafo();

  if (isValid) {
    p.classList.add("paragrafo-resultado");
  } else {
    p.classList.add("paragrafo-resultado-invalido");
  }

  p.innerHTML = msg;
  mensagem.appendChild(p);

}

previneEnvio();