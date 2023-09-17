import Head from 'next/head';
import Image from 'next/image';

import { SEO } from '@/components/seo';

import { Button } from '@/interface/button';

let About = () => {
  return (
    <div>
      <Head>
        <title>Miguel Cardoso | About Me</title>
      </Head>
      <SEO />
      <div className="content_main">
        <article>
          <h1 className="article_title">About Me</h1>
          <p>
            Hi 👋. I&apos;m Miguel Cardoso, a coder/designer that loves solving problems. Having an analytical eye for
            details is just one of the many skills that I use on a daily basis. My background in digital animation and
            audio-visual production gave me the ability to time-manage and understand the potential that each individual
            gives to a piece of work. I&apos;m always looking for what the future brings.{' '}
            <Button
              action={'mailto:m.n.cardoso@me.com?subject=I found you on your website 😀'}
              lable={"Let's talk"}
              title={'Send me an email'}
              newTab={true}
            />
          </p>
        </article>
        <aside>
          <Image
            src="https://s3.eu-north-1.amazonaws.com/web.mc/assets/me.jpg"
            alt="me"
            layout="raw"
            width="640"
            height="640"
          />
        </aside>
      </div>
    </div>
  );
};

export default About;
