import Head from "next/head";
import Date from "../../components/Date";
import Layout from "../../components/Layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import utilStyles from "../../styles/utils.module.scss";

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>

      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  // id としてとりうる値のリストを返す
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // params.idを使用して、ブログの投稿に必要なデータを取得する
  // remark使っているのでawaitする
  const postData = await getPostData(params.id);

  return {
    props: {
      postData,
    },
  };
}
