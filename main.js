let numero;
let numero2;
let maior;

console.log("Digite um número");
process.stdin.on("data", function (data) {
  let entrada_usuario = +data.toString().trim();

  if (!numero) {
    numero = entrada_usuario;
    console.log("Digite outro número");
  } else {
    numero2 = entrada_usuario;

    let i;
    let maior;
    if (numero > numero2) {
      i = numero;
      maior = numero;
    } else {
      i = numero2;
      maior = numero2;
    }

    for (i; i <= numero * numero2; i += maior) {
      if (i % numero == 0 && i % numero2 == 0) {
        console.log("O MMC dos números", numero, "e", numero2, "é igual:", i);
      }
    }
  }

  if (!numero2) {
  } else {
    if (numero > numero2) {
      calculo = (numero2, numero % numero2);
    } else {
      calculo = (numero, numero2 % numero);
    }
    console.log("O MDC dos números", numero, "e", numero2, "é igual:", calculo);
  }
});
