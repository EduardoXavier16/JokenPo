  var papel = 0;
  var tesoura = 1;
  var pedra = 2;
  var usuario = 0;
  var computador = 0;

let qtdRodadas = +prompt("Quantas rodadas você quer jogar?");

console.log(`Você jogará ${qtdRodadas} vezes!`);

for (let i = 0; i < qtdRodadas;i++){

  var escolha = prompt("Escolha entre: pedra, papel ou tesoura!");

  console.log(`Você escolheu ${escolha}!`);

  let numQlq = Math.random()*3;

  var escolhaPc = Math.floor(numQlq);

  if (escolhaPc === 0){

      console.log("O Computador escolheu Papel!");

  }
  else if(escolhaPc === 1){

      console,log("O compeutador escolheu tesoura!");

  }
  else{

      console.log("O computador escolheu Pedra!");

  }

  
    if(escolha > escolhaPc){

    console.log("Usuário vence!")
    usuario++

    }

    else if(escolha < escolhaPc){

    console.log("Computador vence!")
    computador++

    }
    else{

      console.log("Empate!")
      computador++
      usuario++

    }
}

    console.log(`O usuário teve ${usuario} pontos!`);
    console.log(`O computador teve ${computador} pontos!`);

    

    if(usuario < computador){

      console.log("Computador vence!");

    }
    else if(usuario > computador){

      console.log("Usuário vence!");

    }
    else{

      console.log("Deu empate!");

    }
