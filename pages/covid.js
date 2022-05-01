import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Covid.module.css";
import { Button } from "../components/interface/button";

let Covid = () => {
	return (
		<div>
			<Head>
				<title>Miguel Cardoso | Covid Dashboard</title>
			</Head>
			<div className="content_main">
				<article>
					<h1 className="article_title">Covid Dashboard</h1>
					<p>
						With the pandemic never stopping I wanted to keep myself informed
						and build a way of reading the data in a way that I could understand
						how every country was handling cases and vaccinations. Getting my
						information from{" "}
						<Button
							action={
								"https://ourworldindata.org/explorers/coronavirus-data-explorer"
							}
							lable={"Our World in Data"}
							title={"Our World in Data"}
							newTab={true}
						/>
						, I managed to represent vaccination percentages for any country.
						This project was done in React.js with D3.js for the graphs. You can{" "}
						<Button
							action={"https://covid-dashboard.app"}
							lable={"try it"}
							title={"Open the App in a new tab"}
							newTab={true}
						/>{" "}
						in a new window. The{" "}
						<Button
							action={"https://github.com/mncardoso/covid19_dashboard"}
							lable={"source-code"}
							title={"Open the sorce-code in a new tab"}
							newTab={true}
						/>{" "}
						is available on my GitHub page.
					</p>
					<iframe
						className={styles.iframe}
						src="https://covid-dashboard.app"
						title="Covid Dashboard"
					></iframe>
				</article>
			</div>
		</div>
	);
};

export default Covid;
