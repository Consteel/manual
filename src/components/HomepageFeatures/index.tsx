import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Translate from '@docusaurus/Translate';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Consteel manual',
    Svg: require('@site/static/img/manual.svg').default,
    description: (
      <>
    Browse our online manual to learn how Consteel works from top to bottom.
      </>
    ),
  },
  {
    title: 'Descript documentation',
    Svg: require('@site/static/img/descript.svg').default,
    description: (
      <>
        Learn how Descript works and how to write scripts in Consteel. 
      </>
    ),
  },
  {
    title: 'Release notes',
    Svg: require('@site/static/img/release_notes.svg').default,
    description: (
      <>
        Check out the latest releases, new features and bug fixes.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3"><Translate>{title}</Translate></Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
