function rpsGame(yourChoice) {
  //   console.log(yourChoice);
  //   console.log(yourChoice.id);
  var humanChoice, botChoice;
  humanChoice = yourChoice.id;
  botChoice = getCompChoice();
  var winner = decideWinner(humanChoice, botChoice);
  console.log(winner);
  var finalResult = rpsFrontEnd(humanChoice, botChoice);
  //   console.log(humanChoice, botChoice);
}

function randNumGenerator() {
  //   for (var i = 1; i <= 10; i++) {
  //     console.log(Math.floor(Math.random() * 3) + 1);
  //   }
  var randNum = Math.floor(Math.random() * 3) + 1;
  return randNum;
}

function getCompChoice() {
  var randomNum = randNumGenerator();
  if (randomNum === 1) {
    return "rock";
  } else if (randomNum === 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

function decideWinner(humanChoice, computerChoice) {
  //   var res;
  if (humanChoice == "rock" && computerChoice == "rock") {
    var res = "tie";
    // return res;
  } else if (humanChoice == "paper" && computerChoice == "paper") {
    var res = "tie";
  } else if (humanChoice == "scissors" && computerChoice == "scissors") {
    var res = "tie";
  } else if (humanChoice == "rock" && computerChoice == "paper") {
    var res = "comp";
  } else if (humanChoice == "paper" && computerChoice == "scissors") {
    var res = "comp";
  } else if (humanChoice == "scissors" && computerChoice == "rock") {
    var res = "comp";
  } else if (computerChoice == "rock" && humanChoice == "paper") {
    var res = "human";
  } else if (computerChoice == "paper" && humanChoice == "scissors") {
    var res = "human";
  } else if (computerChoice == "scissors" && humanChoice == "rock") {
    var res = "human";
  }
  return res;
}

function rpsFrontEnd(humanChoice, botChoice) {
  var rock = document.getElementById("rock").remove();
  var paper = document.getElementById("paper").remove();
  var scissors = document.getElementById("scissors").remove();

  var container = document.getElementById("container");
  if (humanChoice == "rock" && botChoice == "rock") {
    var imageUser = document.createElement("div");
    imageUser.innerHTML = `<img id="rock" src="./img/rock.jpg" style="box-shadow: 0px 10px 50px rgba(37, 50, 233, 1)"/>`;
    var message = document.createElement("div");
    message.innerHTML = `<h1 style="color: yellow;">You tie</h1>`;
    // message.appendChild(text);
    var imageBot = document.createElement("div");
    imageBot.innerHTML = `<img id="rock" src="./img/rock.jpg" style="box-shadow: 0px 10px 50px rgba(243, 38, 24, 1)"/>`;
    container.appendChild(imageUser);
    container.appendChild(message);
    container.appendChild(imageBot);
  } else if (humanChoice == "paper" && botChoice == "paper") {
    var imageUser = document.createElement("div");
    imageUser.innerHTML = `<img id="paper" src="./img/paper.png" style="box-shadow: 0px 10px 50px rgba(37, 50, 233, 1)"/>`;
    var message = document.createElement("div");
    message.innerHTML = `<h1 style="color: yellow;">You tie</h1>`;
    // message.appendChild(text);
    var imageBot = document.createElement("div");
    imageBot.innerHTML = `<img id="paper" src="./img/paper.png" style="box-shadow: 0px 10px 50px rgba(243, 38, 24, 1)"/>`;
    container.appendChild(imageUser);
    container.appendChild(message);
    container.appendChild(imageBot);
  } else if (humanChoice == "scissors" && botChoice == "scissors") {
    var imageUser = document.createElement("div");
    imageUser.innerHTML = `<img id="scissors" src="./img/scissors.jpg" style="box-shadow: 0px 10px 50px rgba(37, 50, 233, 1)"/>`;
    var message = document.createElement("div");
    message.innerHTML = `<h1 style="color: yellow;">You tie</h1>`;
    // message.appendChild(text);
    var imageBot = document.createElement("div");
    imageBot.innerHTML = `<img id="scissors" src="./img/scissors.jpg" style="box-shadow: 0px 10px 50px rgba(243, 38, 24, 1)"/>`;
    container.appendChild(imageUser);
    container.appendChild(message);
    container.appendChild(imageBot);
  } else if (humanChoice == "rock" && botChoice == "paper") {
    var imageUser = document.createElement("div");
    imageUser.innerHTML = `<img id="rock" src="./img/rock.jpg" style="box-shadow: 0px 10px 50px rgba(37, 50, 233, 1)"/>`;
    var message = document.createElement("div");
    message.innerHTML = `<h1 style="color: red;">You lose!</h1>`;
    // message.appendChild(text);
    var imageBot = document.createElement("div");
    imageBot.innerHTML = `<img id="paper" src="./img/paper.png" style="box-shadow: 0px 10px 50px rgba(243, 38, 24, 1)"/>`;
    container.appendChild(imageUser);
    container.appendChild(message);
    container.appendChild(imageBot);
  } else if (humanChoice == "paper" && botChoice == "scissors") {
    var imageUser = document.createElement("div");
    imageUser.innerHTML = `<img id="paper" src="./img/paper.png" style="box-shadow: 0px 10px 50px rgba(37, 50, 233, 1)"/>`;
    var message = document.createElement("div");
    message.innerHTML = `<h1 style="color: red;">You lose!</h1>`;
    // message.appendChild(text);
    var imageBot = document.createElement("div");
    imageBot.innerHTML = `<img id="scissors" src="./img/scissors.jpg" style="box-shadow: 0px 10px 50px rgba(243, 38, 24, 1)"/>`;
    container.appendChild(imageUser);
    container.appendChild(message);
    container.appendChild(imageBot);
  } else if (humanChoice == "scissors" && botChoice == "rock") {
    var imageUser = document.createElement("div");
    imageUser.innerHTML = `<img id="scissors" src="./img/scissors.jpg" style="box-shadow: 0px 10px 50px rgba(37, 50, 233, 1)"/>`;
    var message = document.createElement("div");
    message.innerHTML = `<h1 style="color: red;">You lose!</h1>`;
    // message.appendChild(text);
    var imageBot = document.createElement("div");
    imageBot.innerHTML = `<img id="rock" src="./img/rock.jpg" style="box-shadow: 0px 10px 50px rgba(243, 38, 24, 1)"/>`;
    container.appendChild(imageUser);
    container.appendChild(message);
    container.appendChild(imageBot);
  } else if (botChoice == "rock" && humanChoice == "paper") {
    var imageBot = document.createElement("div");
    imageBot.innerHTML = `<img id="rock" src="./img/rock.jpg" style="box-shadow: 0px 10px 50px rgba(37, 50, 233, 1)"/>`;
    var message = document.createElement("div");
    message.innerHTML = `<h1 style="color: green;">You won!</h1>`;
    // message.appendChild(text);
    var imageUser = document.createElement("div");
    imageUser.innerHTML = `<img id="paper" src="./img/paper.png" style="box-shadow: 0px 10px 50px rgba(243, 38, 24, 1)"/>`;
    container.appendChild(imageUser);
    container.appendChild(message);
    container.appendChild(imageBot);
  } else if (botChoice == "paper" && humanChoice == "scissors") {
    var imageBot = document.createElement("div");
    imageBot.innerHTML = `<img id="paper" src="./img/paper.png" style="box-shadow: 0px 10px 50px rgba(37, 50, 233, 1)"/>`;
    var message = document.createElement("div");
    message.innerHTML = `<h1 style="color: green;">You won!</h1>`;
    // message.appendChild(text);
    var imageUser = document.createElement("div");
    imageUser.innerHTML = `<img id="scissors" src="./img/scissors.jpg" style="box-shadow: 0px 10px 50px rgba(243, 38, 24, 1)"/>`;
    container.appendChild(imageUser);
    container.appendChild(message);
    container.appendChild(imageBot);
  } else if (botChoice == "scissors" && humanChoice == "rock") {
    var imageBot = document.createElement("div");
    imageBot.innerHTML = `<img id="scissors" src="./img/scissors.jpg" style="box-shadow: 0px 10px 50px rgba(37, 50, 233, 1)"/>`;
    var message = document.createElement("div");
    message.innerHTML = `<h1 style="color: green;">You won!</h1>`;
    // message.appendChild(text);
    var imageUser = document.createElement("div");
    imageUser.innerHTML = `<img id="rock" src="./img/rock.jpg" style="box-shadow: 0px 10px 50px rgba(243, 38, 24, 1)"/>`;
    container.appendChild(imageUser);
    container.appendChild(message);
    container.appendChild(imageBot);
  }
}
