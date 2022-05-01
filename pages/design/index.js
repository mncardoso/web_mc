import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Design.module.css";
import { Button } from "../../components/interface/button";

let Design = () => {
	return (
		<div>
			<Head>
				<title>Miguel Cardoso | Design</title>
			</Head>
			<div className={styles.container}>
				<div className="content_main">
					<article>
						<h1 className="article_title">Casa Rústica</h1>
						<p>
							Brand building, logo and presentation for a lodging business in
							rural Portugal.{" "}
							<Button
								action={"./design/casa_rustica"}
								lable={"Read the case-study"}
								title={"Read the case-study"}
							/>
						</p>
					</article>
					<aside className={styles.aside_rustic}>
						<Image
							src="https://s3.eu-north-1.amazonaws.com/web.miguel.cardoso/assets/rustic.svg"
							alt="Casa Rústica Logo"
							layout="raw"
							width="382"
							height="434"
						/>
					</aside>
				</div>
				<div className="content_main">
					<article>
						<h1 className="article_title">Exponential-e</h1>
						<p>
							A selection of work done when working for one of the biggest
							managed service providers in the United Kingdom.{" "}
							<Button
								action={"./design/exponential-e"}
								lable={"Have a look"}
								title={"Have a look"}
							/>
						</p>
					</article>
					<aside className={styles.aside_expo}>
						<Image
							src="https://s3.eu-north-1.amazonaws.com/web.miguel.cardoso/assets/exponential.svg"
							alt="Exponential-e Logo"
							layout="raw"
							width="382"
							height="88.99"
						/>
					</aside>
				</div>
				<div className="content_main">
					<article>
						<h1 className="article_title">Other</h1>
						<p>
							<Button action={"./design/other"} lable={"Here"} title={"Here"} />{" "}
							is a selection of other design works I did. :)
						</p>
					</article>
				</div>
			</div>
		</div>
	);
};

export default Design;
