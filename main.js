let numero;
let numero2;
let mmc;

console.log("Digite um número");
process.stdin.on("data", function (data) {
  let entrada_usuario = data.toString().trim();
  let num = parseInt(entrada_usuario, 10);

  if (!numero) {
    console.log("Digite outro número");
    numero = num;
  } else {
    numero2 = num;
    for (let i = 1; i <= numero * numero2; i++) {
      if (i % numero == 0 && i % numero2 == 0) {
        mmc = i;
        break;
    }
    
}
if (numero2 === 0){
  console.log(numero)
} else {
  if (numero > numero2){
      calculo = (numero2, numero % numero2);
  } else {
      calculo = (numero, numero2 % numero)
  }
}

console.log("mdc: " + calculo)
    console.log("mmc: " + mmc);
}

});