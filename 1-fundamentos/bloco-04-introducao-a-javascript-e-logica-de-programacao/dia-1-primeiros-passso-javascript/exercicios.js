const a = 10;
const b = 2;

let adicao = a + b;
  console.log(adicao);

let subtracao = a - b;
  console.log (subtracao);

let multiplicacao = a * b;
  console.log (multiplicacao);

let divisao = a / b;
  console.log (divisao)

let modulo = a % b;
  console.log (modulo);

let maior
if (a >= b) {
  maior = a;
  console.log(maior);
} else {
  maior = b;
  console.log(maior);
}

const c = 20;

if (a > b && a > c) {
  maior = "a";
  console.log(maior);
} else if (a === b && a > c) {
  maior = "a e b";
  console.log(maior);
} else if (a === c && a > b) {
  maior = "a e c";
  console.log(maior);
} else if (b > a && b > c) {
  maior = "b";
  console.log(maior);
} else if (b === c && b > a) {
  maior = "b e c";
  console.log(maior);
} else if (a === b && b === c) {
  maior = "a, b e c";
  console.log(maior);
} else {
  maior = "c";
  console.log(maior);
}

const verify = -10;

if (verify > 0) {
  console.log("positive");  
} else if (verify < 0) {
  console.log("negative");
} else {
  console.log("zero")
}

const anguloA = 100;
const anguloB = 10;
const anguloC = 70;

if (anguloA + anguloB + anguloC === 180) {
  console.log("true");
} else {
  console.log("false");
}