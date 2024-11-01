import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Ultra-Fast Integration',
    Svg: require('@site/static/img/feature_1.svg').default,
    description: (
      <>
        Feed a meticulously written snippet of our code into your website and voila! You have just brought your website to life
      </>
    ),
  },
  {
    title: 'Keep up with season\'s greetings',
    Svg: require('@site/static/img/feature_2.svg').default,
    description: (
      <>
        Let's have your mascots adorn comfy woollens for the Winter or some bright colors to shout out for Spring! All we need is your idea and we'll make it happen
      </>
    ),
  },
  {
    title: 'Schedule your Mascots, Save Time',
    Svg: require('@site/static/img/feature_3.svg').default,
    description: (
      <>
        Want multiple mascots on your website?
        Simple! Picking a date and time in advance is all you need to do for that
      </>
    ),
  },
  {
    title: 'Gain insights, Stay informed',
    Svg: require('@site/static/img/feature_4.svg').default,
    description: (
      <>
        Maximize impact with the reporting dashboard for mascot engagement and user metrics insights
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
        <Heading as="h3">{title}</Heading>
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
