import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.text}>
        <p>Miguel Cardoso - {year} [</p>
        <Link
          href="https://github.com/mncardoso"
          target="_blank"
          rel="noreferrer"
          title="Open my GitHub page in a new tab"
        >
          GitHub
        </Link>
        <p>/</p>
        <Link
          href="https://s3.eu-north-1.amazonaws.com/web.mc/assets/MiguelCardoso_CV.pdf"
          target="_blank"
          rel="noreferrer"
          title="Open my CV"
        >
          CV
        </Link>
        <p>]</p>
      </div>
    </footer>
  );
};

export default Footer;
