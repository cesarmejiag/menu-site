import { Inter } from "@next/font/google";
import Layout from "../components/Layout";

import styles from "../styles/Home.module.css";
import Carousel from "../components/Carousel";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Layout>
        <h1 className="text-3xl fond-bold underline">Hello World</h1>
        <Carousel />
      </Layout>
    </>
  );
}
