import { Inter } from "@next/font/google";
import Layout from "../components/Layout";

import styles from "../styles/Home.module.css";
import Carousel from "../components/Carousel";
import { useSite } from "../providers/SiteProvider";
import LinkList from "../components/LinkList";
import Section from "../components/Section";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { homePromos } = useSite();
  return (
    <>
      <Layout>
        <Section>
          <h1 className="text-3xl fond-bold text-center">
            Chida Vida!
          </h1>
        </Section>
        <Section>
          <Carousel items={homePromos} />
        </Section>
        <Section>
          <LinkList />
        </Section>
      </Layout>
    </>
  );
}
