import Head from "next/head";

let Error404 = () => {
	return (
		<div>
			<Head>
				<title>Miguel Cardoso | 404 - Page not found</title>
			</Head>
			<div className="content_main">
				<article>
					<h1 className="article_title">404 - Page not found</h1>
					<p>
						☠️ Sorry, but it appears that i that page you are looking for
						doesn&apos;t exist. ☠️
					</p>
				</article>
			</div>
		</div>
	);
};

export default Error404;
