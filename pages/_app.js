import "../styles/globals.css";
import "normalize.css/normalize.css";
import Head from "next/head";
import { SEO } from "../components/seo";
import { Nav } from "../components/layout/nav";
import { Footer } from "../components/layout/footer";
import { Wave } from "../components/components/wave";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<SEO />
			<div className="main">
				<div className="header">
					<Nav />
				</div>
				<div className="content">
					<Component {...pageProps} />
				</div>
				<div className="footer">
					<Footer />
				</div>
				<Wave />
			</div>
		</>
	);
}

export default MyApp;
