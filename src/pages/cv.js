import Head from 'next/head';
import Image from 'next/image';

import { Tag } from '@/components/components/tag';
import { Button } from '@/components/interface/button';
import { SEO } from '@/components/seo';
import { cv } from '@/data/cv';
import styles from '@/styles/CV.module.css';

export const getStaticProps = async () => {
  return {
    props: {
      cv,
    },
  };
};

let PageCV = ({ cv }) => {
  return (
    <div>
      <Head>
        <title>Miguel Cardoso | CV</title>
      </Head>
      <SEO />
      <div className="content_main">
        <div className={styles.container}>
          <div>
            <Button
              action={'https://s3.eu-north-1.amazonaws.com/web.mc/assets/MiguelCardoso_CV.pdf'}
              lable={'download'}
              newTab={true}
            />
          </div>
          <div>
            <div className={styles.header}>
              <div className={styles.header_title}>
                <h1>{cv.title}</h1>
                <h2>{cv.name}</h2>
              </div>
              <div className={styles.header_links}>
                {cv.links.map((d, key) => (
                  <div key={key}>
                    <Button action={d[0]} lable={d[1]} newTab={true} />
                  </div>
                ))}
              </div>
            </div>
            <p className={styles.intro}>{cv.intro}</p>
            <ul className={styles.tags}>
              {cv.skills.map((d, key) => (
                <Tag key={key} text={d} />
              ))}
            </ul>
          </div>
          <div className={styles.content}>
            <h2>Work</h2>
            <div className={styles.content_section}>
              {cv.timeline
                .slice(0)
                .reverse()
                .map((d, key) =>
                  d.type === 'work' || d.type === 'internship' ? (
                    <div key={key} className={styles.position}>
                      <h3>
                        {d.title} @ {d.company},{' '}
                        <span>
                          {d.location} - [{d.date}]
                        </span>
                      </h3>
                      <div>
                        {d.description.map((d, key) => (
                          <p key={key}>{d}</p>
                        ))}
                      </div>
                      <ul className={styles.tags}>
                        {d.skills.map((d, key) => (
                          <Tag key={key} text={d} />
                        ))}
                      </ul>
                      {d.links !== undefined ? (
                        <div className={styles.links}>
                          <ul>
                            {d.links.map((d, key) => (
                              <Button key={key} action={d[0]} lable={d[1]} newTab={true} />
                            ))}
                          </ul>
                        </div>
                      ) : null}
                    </div>
                  ) : null
                )}
            </div>
            <h2>Qualifications</h2>
            <div className={styles.content_section}>
              {cv.timeline
                .slice(0)
                .reverse()
                .map((d, key) =>
                  d.type === 'education' ? (
                    <div key={key} className={styles.position}>
                      <h3>
                        {d.title} @ {d.company},{' '}
                        <span>
                          {d.location} - [{d.date}]
                        </span>
                      </h3>
                      <div>
                        {d.description.map((d, key) => (
                          <p key={key}>{d}</p>
                        ))}
                      </div>
                      <ul className={styles.tags}>
                        {d.skills.map((d, key) => (
                          <Tag key={key} text={d} />
                        ))}
                      </ul>
                      {d.links !== undefined ? (
                        <div className={styles.links}>
                          <ul>
                            {d.links.map((d, key) => (
                              <Button key={key} action={d[0]} lable={d[1]} newTab={true} />
                            ))}
                          </ul>
                        </div>
                      ) : null}
                    </div>
                  ) : null
                )}
            </div>
            <h2>Awards</h2>
            <div className={styles.content_section}>
              {cv.timeline
                .slice(0)
                .reverse()
                .map((d, key) =>
                  d.type === 'award' ? (
                    <div key={key} className={styles.position}>
                      <h3>
                        {d.title} @ {d.company},{' '}
                        <span>
                          {d.location} - [{d.date}]
                        </span>
                      </h3>
                      <div>
                        {d.description.map((d, key) => (
                          <p key={key}>{d}</p>
                        ))}
                      </div>
                      <ul className={styles.tags}>
                        {d.skills.map((d, key) => (
                          <Tag key={key} text={d} />
                        ))}
                      </ul>
                      {d.links !== undefined ? (
                        <div className={styles.links}>
                          <ul>
                            {d.links.map((d, key) => (
                              <Button key={key} action={d[0]} lable={d[1]} newTab={true} />
                            ))}
                          </ul>
                        </div>
                      ) : null}
                    </div>
                  ) : null
                )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageCV;
