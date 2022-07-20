// const myName = "Hugo Ramos"
// const birthCity = "Niterói"
// let birthYear = 1989

// console.log(myName);
// console.log(birthCity);
// console.log(birthYear);

// birthYear = 2030

// console.log(birthYear);

// let patientId = 50;
// let isEnrolled = true;
// const patientInfo = {
//   firstName: 'Ana',
//   lastName: 'Santos',
// };
// const patientEmail = 'ana@email.com';

// console.log(typeof patientId);
// console.log(typeof isEnrolled);
// console.log(typeof patientInfo);
// console.log(typeof patientEmail);

// const base = 5;
// let height = 8;
// const area = base * height;
// const perimeter = base * 2 + height * 2;

// console.log(base);
// console.log(height);
// console.log(area);
// console.log(perimeter);

const notaCandidata = 65

if (notaCandidata >= 80){
  console.log ("Parabens, voce foi aprovada!");
} else if (notaCandidata < 80 && notaCandidata >= 60){
  console.log ("Voce esta na lista de espera.");
} else {
  console.log ("Voce foi reprovada.");
}

let statusCandidata = "tente"

switch (statusCandidata) {
  case "aprovada":
  console.log ("Parabens, voce foi aprovada!");
    break;

    case "lista":
  console.log ("Voce esta na lista de espera.");
    break;

    case "reprovada":
  console.log ("Voce foi reprovada.");
    break;

  default:
    console.log("não se aplica")
    break;
}