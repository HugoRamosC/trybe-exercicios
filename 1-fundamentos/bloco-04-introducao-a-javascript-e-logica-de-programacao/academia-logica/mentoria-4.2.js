// const marina = 30
// const silvia = 33
// const iza = 32

// if (marina < silvia && marina < iza) {
//   console.log("Marina é a pessoa mais jovem e possui ", marina, " anos de idade");
// } else if (silvia < iza) {
//   console.log("Silvia é a pessoa mais jovem e possui ", silvia, " anos de idade");
// } else {
//   console.log("Iza é a pessoa mais jovem e possui ", iza, " anos de idade");
// }

// let age = 35;
// let sex = "M";
// let weight = 62;
// let height = 170;

// let formulaM = (height * 6.25) + (weight * 9.99) - (age * 4.92) + 5

// let formulaF = (height * 6.25) + (weight * 9.99) - (age * 4.92) + 161

// if (sex === "M") {
//   console.log("A taxa metabólica basal é: ",formulaM, " Kcal");
// } else {
//   console.log("A taxa metabólica basal é: ",formulaF, " Kcal");
// }

let n1 = "1 - Trybe Lanche Feliz"
let n2 = "2 - McTrybe"
let n3 = "3 - TrybeWooper"
let n4 = "4 - X-Trybe"
let n5 = "5 - Triplo Trybe com JS"
let escolha = 1

switch (escolha) {
  case 1:
    console.log(n1);
    break;

  case 2:
    console.log(n2);
    break;

  case 3:
    console.log(n3);
    break;

  case 4:
    console.log(n4);
    break;
    
  case 5:
    console.log(n5);
    break;

  default:
    console.log("Ainda não possuímos esta opção :(");
    break;
}