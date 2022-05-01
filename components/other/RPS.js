const playerPlay = document.getElementById("player_play");
const playerSrc = document.getElementById("player_src");
const computerPlay = document.getElementById("computer_play");
const computerSrc = document.getElementById("computer_src");
const gameCtrl = document.querySelectorAll(".game_ctrl");
let playerChoice;
let computerChoice;
let result;

const emojiConverter = (data) => {
	if (data === "rock") {
		return "🪨";
	}
	if (data === "paper") {
		return "🧻";
	}
	if (data === "scissors") {
		return "✂️";
	}
};

gameCtrl.forEach((btn) =>
	btn.addEventListener("click", (e) => {
		playerChoice = e.target.id;
		playerPlay.innerHTML = emojiConverter(playerChoice);
		computerChoice = getComputerChoice();
		console.log(`player [${playerChoice}] VS computer [${computerChoice}]`);
		computerPlay.innerHTML = emojiConverter(computerChoice);
		determineWinner(playerChoice, computerChoice);
	})
);

const getComputerChoice = () => {
	const randomNumber = Math.floor(Math.random() * 3);
	switch (randomNumber) {
		case 0:
			return "rock";
		case 1:
			return "paper";
		case 2:
			return "scissors";
	}
};

const determineWinner = (userChoice, computerChoice) => {
	if (userChoice === computerChoice) {
		playerSrc.innerHTML = "😖";
		computerSrc.innerHTML = "😖";
		console.log("It's a tie");
	} else if (userChoice === "rock") {
		if (computerChoice === "paper") {
			playerSrc.innerHTML = "😵";
			computerSrc.innerHTML = "🥳";
			console.log("computer wins");
		} else {
			playerSrc.innerHTML = "🥳";
			computerSrc.innerHTML = "😵";
			console.log("you win!!");
		}
	} else if (userChoice === "paper") {
		if (computerChoice === "scissors") {
			playerSrc.innerHTML = "😵";
			computerSrc.innerHTML = "🥳";
			console.log("computer wins");
		} else {
			playerSrc.innerHTML = "🥳";
			computerSrc.innerHTML = "😵";
			console.log("you win!!");
		}
	} else if (userChoice === "scissors") {
		if (computerChoice === "rock") {
			playerSrc.innerHTML = "😵";
			computerSrc.innerHTML = "🥳";
			console.log("computer wins");
		} else {
			playerSrc.innerHTML = "🥳";
			computerSrc.innerHTML = "😵";
			console.log("you win!!");
		}
	}
};
