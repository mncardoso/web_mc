import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Games.module.css";
// import { MagicAnswers } from "../components/other/MagicAnswers";
// import { RPS } from "../components/other/RPS";

let Games = () => {
	return (
		<div>
			<Head>
				<title>Miguel Cardoso | Games</title>
			</Head>
			<div className="content_main">
				<article>
					<h1 className="article_title">Games</h1>
					<p>
						Just a little fun project to test interactivity in the browser. The
						Magic Answers requires you to finish the question with the correct
						punctuation. There are 20 possible answers. Rock, Paper, Scissors
						uses emojis and a random number to decide the computer choice. If
						you open the console you can see the game in text form.
					</p>
				</article>
				<aside>
					<div className={styles.game}>
						<h2>Magic Answers (usualy in a ball)</h2>
						<div id="question">
							<input
								type="text"
								id="magic_question"
								name="question"
								placeholder="What hour you wish to know?"
								required
							/>
							<div id="button_div">
								<button className="ask">Ask</button>
							</div>
						</div>
						<div id="magic_answer">
							<p>Please ask a question</p>
						</div>
					</div>
					<div className={styles.game}>
						<h2>Rock, Paper, Scissors</h2>
						<div>
							<div id="rps_board">
								<div id="player">
									<span>🕹️</span>
									<span id="player_src">🙂</span>
									<span id="player_play">✋</span>
								</div>
								<p>🆚</p>
								<div id="computer">
									<span id="computer_play">✋</span>
									<span id="computer_src">🙂</span>
									<samp>🤖</samp>
								</div>
							</div>
						</div>
						<div id="player_choice">
							<button id="rock" className={styles.rps_button} text="🤘">
								🤘
							</button>
							<button id="paper" className={styles.rps_button} text="🤚">
								🤚
							</button>
							<button id="scissors" className={styles.rps_button} text="✌️">
								✌️
							</button>
						</div>
					</div>
				</aside>
			</div>
		</div>
	);
};

export default Games;
