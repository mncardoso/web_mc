import { Wave } from '../components/components/wave';
import { Footer } from '../components/layout/footer';
import { Nav } from '../components/layout/nav';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
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
