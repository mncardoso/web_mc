import Image from 'next/image';
import MiniButton from '@/interface/MiniButton';
import TimeLine from '@/components/TimeLine';

import styles from './about.module.css';

import Layout from '@/Layout/Layout';

export default function about() {
  return (
    <Layout>
      <div className={`container`}>
        <div className={`${styles.about} grid`}>
          <div className={styles.text}>
            <h1>
              Hi 👋.
              <br />
              I'm Miguel,
            </h1>
            <p>
              A Software Engineer with an analytical eye for details and design. I have experience in designing, coding
              and testing front-end web applications in various programming languages and frameworks. I specialise in
              JavaScript and have professional experience working with React, Node and Next. I love solving problems and
              keeping up with the latest features of the technologies in my field. I can easily adapt my workflow to new
              frameworks, test on different platforms and integrate a team either remotely or at the office, anywhere in
              the world. I'm bilingual in Portuguese and English, and speak fairly well Spanish and French.
            </p>
          </div>
          <div className={styles.photo}>
            <Image
              src="https://s3.eu-north-1.amazonaws.com/web.mc/assets/me.jpg"
              alt="Miguel Cardoso"
              width={640}
              height={640}
            />
          </div>
        </div>
        <TimeLine title="Little Emperors" image="https://s3.eu-north-1.amazonaws.com/web.mc/assets/le.png">
          <div className={styles.flex}>
            <small className="code">2022 - present</small>
            <div className={styles.body}>
              <p>
                In 2022 I became part of the development team of Little Emperors to innovate and bring an attention to
                detail needed for a luxury hotel booking service.
              </p>
              <p>
                {'Feal free to check the website '}
                <MiniButton newTab href="https://littleemperors.com/" label="here" />
              </p>
            </div>
          </div>
        </TimeLine>
        <TimeLine
          title="Covid Dashboard"
          image="https://s3.eu-north-1.amazonaws.com/web.miguel.cardoso/assets/covid.png"
        >
          <div className={styles.flex}>
            <small className="code">side project</small>
            <div className={styles.body}>
              <p>
                With all the information bombardment that happened during the covid19 pandemic, I decided to create a
                dashboard that showed the necessary information for people to understand the state of their country in a
                simple way. By utilising the “Our World in Data” public database I’ve created a dashboard with React and
                D3 that show the information by country.
              </p>
              <p>
                {
                  '[update] -> Due to change of state from pandemic to endemic and the lack on new number edited by the majority of the world governments this project is in hiatus, but the code and website are still up.'
                }
              </p>
              <p>
                {'You can still check the project '}
                <MiniButton newTab href="https://covid.miguel-cardoso.com/" label="here" />
              </p>
            </div>
          </div>
        </TimeLine>
        <TimeLine
          title="Explorer App"
          image="https://s3.eu-north-1.amazonaws.com/web.miguel.cardoso/assets/explorer.png"
        >
          <div className={styles.flex}>
            <small className="code">competition</small>
            <div className={styles.body}>
              <p>In 2020 Adobe UK had an UX competition. Here is the wining project.</p>
              <p>
                {'You can check the final prototype '}
                <MiniButton newTab href="https://explorer.miguel-cardoso.com/" label="here" />
              </p>
              <p>
                {'And the case study '}
                <MiniButton newTab href="https://explorer.miguel-cardoso.com/casestudy" label="here" />
              </p>
            </div>
          </div>
        </TimeLine>
      </div>
    </Layout>
  );
}
