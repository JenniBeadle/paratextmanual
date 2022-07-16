import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Translate, {translate} from '@docusaurus/Translate';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <img className={styles.featureImage} src='img/cropped-PT9-web-banner.png' alt="Easy to Use"/>
        <h1 className="hero__title"><Translate>
        	Paratext Documentation</Translate></h1>
        <p className="hero__subtitle"><Translate>
        Learning to use Scripture Translation Software
        </Translate></p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="https://paratext.org/videos/">
            Paratext Videos ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
<main>
  <div className={clsx('col-*-9', styles.feature)}>
    <div className="text--center">
      <p>
      <Translate>
          The video series here are created in English first and are then remade into other languages as soon as possible. 
          Each series is in a logical order and may be watched in order, 
          or you can search for the specific topic/feature you are interested in. 
          All the videos include subtitles that may be turned on while viewing.
      </Translate>
      </p>
    </div>
  </div>
</main>    </Layout>
  );
}
