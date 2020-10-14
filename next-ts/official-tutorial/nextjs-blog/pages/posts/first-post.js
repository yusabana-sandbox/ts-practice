import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>

      <h1>First Postなの</h1>
    </Layout>
  );
}
