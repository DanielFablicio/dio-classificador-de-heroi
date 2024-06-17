const prompt = require('prompt-sync')();
const title = "DESAFIO - CLASSIFICADOR DE HERÓI"
console.log(title)
console.log("----------------------------------")

while (true) {

  console.log(" ")
  let name = prompt("Nome do herói: ")
  let xp = parseFloat(prompt("Experiência do herói(xp): "));
  
  if (isNaN(xp) || xp < 0) {
    console.log("Valor incorreto. Tente novamente")
    continue;
  }
    
  let rank = "Radiante"

  switch (Math.ceil(xp/1000)) {

    case 0:
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

  console.log("O Herói de nome " + name + " está no ranque " + rank);

  let willContinue = prompt("Desejas continuar? (S ou N) ");
  if (willContinue.toLowerCase() == "n") {
    break;
  }
}

