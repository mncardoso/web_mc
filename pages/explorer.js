import Head from "next/head";
import styles from "../styles/Explorer.module.css";
import { SEO } from "../components/seo";
import { Button } from "../components/interface/button";

let Explorer = () => {
	return (
		<div>
			<Head>
				<title>Miguel Cardoso | Explorer App</title>
			</Head>
			<SEO />
			<div className="content_main">
				<article>
					<h1 className="article_title">Explorer App</h1>
					<p>
						App concept done as part of a competition by Adobe UK to use Adobe
						XD.{" "}
						<Button
							action={"https://explorer.miguel-cardoso.com/"}
							lable={"Try it"}
							title={"Open the App in a new tab"}
							newTab={true}
						/>{" "}
						and see the{" "}
						<Button
							action={"https://explorer.miguel-cardoso.com/casestudy"}
							lable={"process"}
							title={"Open the Case Study in a new tab"}
							newTab={true}
						/>
					</p>
				</article>
				<aside className={styles.aside}>
					<iframe
						className={styles.iframe}
						src="https://explorer.miguel-cardoso.com/"
						title="Explorer App"
					></iframe>
				</aside>
			</div>
		</div>
	);
};

export default Explorer;
