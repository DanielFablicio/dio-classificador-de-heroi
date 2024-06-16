const prompt = require('prompt-sync')();
const title = "DESAFIO - CLASSIFICADOR DE HERÓI"
console.log(title)
console.log("----------------------------------")

while (true) {

let name = prompt("Nome do herói: ")
let xp = prompt("Experiência do herói(xp): ");
xp = eval(xp);
let rank = "Radiante"

if (typeof xp === "number" && xp >= 0) {
  
  switch (Math.ceil(xp/1000)) {

    case 1:
      rank = "Ferro";
      break;
  
    case 2:
      rank = "Bronze";
      break;
    
    case 3:
    case 4:
    case 5:
      rank = "Prata";
      break;
    
    case 6:
    case 7:
      rank = "Ouro";
      break;

    case 8:
      rank = "Platina";
      break;
    
    case 9:
      rank = "Ascendente";
      break;

    case 10:
      rank = "Imortal";
      break;
  }
}
else {
  console.log("Valor incorreto. Tente novamente");
  break;
}


console.log("O Herói de nome " + name + " está no ranque " + rank);


let willContinue = prompt("Desejas continuar? (S ou N) ");
if (willContinue.toLowerCase() == "n") {
  console.log("Olá");
  break;
}


}

