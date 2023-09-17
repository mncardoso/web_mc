import { SEO } from '@/components/seo';

let Home = () => {
  return (
    <>
      <SEO />
      <div className="content_main">
        <article>
          <h1 className="article_title">Home Page</h1>
          <p>🖖 Hello</p>
          <p>🧑‍💻 My name is Miguel</p>
          <p>🌐 Welcome to my web page.</p>
        </article>
      </div>
    </>
  );
};

export default Home;
