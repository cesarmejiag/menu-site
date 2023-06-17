import { Inter } from "@next/font/google";
import Layout from "../components/Layout";

import styles from "../styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Layout>
        <h1>Hello World</h1>
      </Layout>
    </>
  );
}
