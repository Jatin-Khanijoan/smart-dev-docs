import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="Your intelligent DevOps assistant for application deployment and infrastructure analysis"
    >
      <main>
        <div className={styles.heroContainer}>
          <HomepageHeader />
        </div>
        <div className={styles.mainContent}>
          <section className={styles.section}>
            <Heading as="h2">Welcome to majs.tech</Heading>
            <p>
              Your intelligent DevOps assistant revolutionizing application
              deployment and infrastructure analysis.
            </p>
          </section>

          <section className={styles.section}>
            <Heading as="h3">Effortless Deployment</Heading>
            <p>
              Deploy applications on your infrastructure with unprecedented
              ease:
            </p>
            <ul>
              <li>Intuitive UI for visual deployment workflows</li>
              <li>Powerful CLI for automation and scripting</li>
              <li>
                Support for multiple cloud providers and on-premises solutions
              </li>
              <li>One-click deployments with customizable templates</li>
            </ul>
            <div className={styles.ctaButtons}>
              <Link
                to="/docs/ui-deployment"
                className="button button--primary button--lg"
              >
                Explore UI Deployment
              </Link>
              <Link
                to="/docs/cli-deployment"
                className="button button--secondary button--lg"
              >
                Master CLI Deployment
              </Link>
            </div>
          </section>

          <section className={styles.section}>
            <Heading as="h3">
              James: Your AI-Powered Infrastructure Analyst
            </Heading>
            <p>Unlock deep insights into your infrastructure with James:</p>
            <ul>
              <li>
                Advanced RAG (Retrieval-Augmented Generation) agents for
                comprehensive analysis
              </li>
              <li>
                State-of-the-art LLM technology for natural language
                interactions
              </li>
              <li>
                Proactive issue detection and optimization recommendations
              </li>
              <li>Customizable dashboards and detailed reports</li>
            </ul>
            <Link
              to="/docs/james-analysis"
              className="button button--info button--lg"
            >
              Discover James' Capabilities
            </Link>
          </section>
        </div>

        <section className={styles.features}>
          <div className={styles.mainContent}>
            <Heading as="h3">Why Choose majs.tech?</Heading>
            <div className={styles.featureGrid}>
              <div className={styles.featureItem}>
                <Heading as="h4">Unified Platform</Heading>
                <p>Seamlessly manage deployments and analysis in one place</p>
              </div>
              <div className={styles.featureItem}>
                <Heading as="h4">AI-Driven Insights</Heading>
                <p>Leverage cutting-edge AI to optimize your infrastructure</p>
              </div>
              <div className={styles.featureItem}>
                <Heading as="h4">Flexible Deployment</Heading>
                <p>Choose between UI and CLI based on your team's needs</p>
              </div>
              <div className={styles.featureItem}>
                <Heading as="h4">Scalability</Heading>
                <p>Grow your infrastructure effortlessly with our tools</p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.cta}>
          <div className={styles.mainContent}>
            <Heading as="h3">
              Ready to Transform Your DevOps Experience?
            </Heading>
            <p>
              Join the growing community of developers and operations teams
              leveraging majs.tech to streamline their workflows.
            </p>
            <Link
              to="/docs/getting-started"
              className="button button--success button--xl"
            >
              Get Started Now
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}
