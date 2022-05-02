import "../styles/globals.css";
import "normalize.css/normalize.css";
import Head from "next/head";
import { Nav } from "../components/layout/nav";
import { Footer } from "../components/layout/footer";
import { Wave } from "../components/components/wave";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				{/* Name */}
				<title>Miguel Cardoso</title>
				<meta property="og:title" content="Miguel Cardoso" />
				<meta name="apple-mobile-web-app-title" content="Miguel Cardoso" />
				<meta name="application-name" content="Miguel Cardoso" />

				{/* Description */}
				<meta
					name="description"
					content="Migurl Cardoso - Solving problems with code and design"
				/>
				<meta
					property="og:description"
					content="Migurl Cardoso - Solving problems with code and design"
				/>
				<meta
					name="twitter:card"
					content="Migurl Cardoso - Solving problems with code and design"
				/>

				{/* Image */}
				<meta property="og:type" content="portfolio website" />
				<meta property="og:url" content="https://miguel-cardoso.com" />
				<meta name="twitter:creator" content="@mncardoso" />

				{/* Image */}
				<meta
					property="og:image"
					media="(prefers-color-scheme: light)"
					content="https://s3.eu-north-1.amazonaws.com/web.mc/assets/og_light.png"
				/>
				<meta
					property="og:image"
					media="(prefers-color-scheme: dark)"
					content="https://s3.eu-north-1.amazonaws.com/web.mc/assets/og_dark.png"
				/>

				{/* Favicon */}
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-touch-icon.png"
				/>
				<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
				<link
					rel="mask-icon"
					media="(prefers-color-scheme: light)"
					href="/safari-pinned-tab.svg"
					color="#e6e6e6"
				/>
				<link
					rel="mask-icon"
					media="(prefers-color-scheme: dark)"
					href="/safari-pinned-tab.svg"
					color="#1a1a1a"
				/>

				{/* Theme Color */}
				<meta
					name="theme-color"
					media="(prefers-color-scheme: light)"
					content="#e6e6e6"
				/>
				<meta
					name="theme-color"
					media="(prefers-color-scheme: dark)"
					content="#1a1a1a"
				/>
			</Head>
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
