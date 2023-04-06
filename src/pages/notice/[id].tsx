import Link from "next/link";
import { useState, useEffect } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";

import styles from "./notice.module.css";

// pages
import Layout from "../component/layout/layout";
import { data, DataProps } from "@/consts/data";
import { useRouter } from "next/router";
import { MainLayout } from "@/layouts/MainLayout";

interface JobInterface {
  data: DataProps[];
  id: string;
}

interface Params extends ParsedUrlQuery {
  id: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = data.map((el) => {
    return {
      params: {
        id: el.id.toString(),
      },
    };
  });
  return {
    paths,
    fallback: false, // can also be true or 'blocking'
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const params = context.params as Params;

  return {
    props: {
      data: data,
      id: params.id,
    },
  };
};

export default function Post(props: JobInterface) {
  const { data } = props;
  const [dataList, setDateList] = useState<DataProps[]>([]);

  const router = useRouter();

  const { id } = router.query;

  useEffect(() => setDateList([...data]), [props]);
  if (!dataList) return;

  return (
    <MainLayout>
      <section className={styles.section1}>
        <Layout>
          <table className={`${styles.noticeTable} ${styles.noticeViewTable}`}>
            <tbody>
              <tr>
                <th>제목</th>
                <td>{dataList[Number(id) - 1]?.title}</td>
              </tr>
              <tr>
                <th>날짜</th>
                <td>{dataList[Number(id) - 1]?.date}</td>
              </tr>
              <tr>
                <th>내용</th>
                <td>{dataList[Number(id) - 1]?.content}</td>
              </tr>
            </tbody>
          </table>
          <div className={styles.btnWrap}>
            <Link href="/notice/notice">
              <button className={styles.cmPrimaryBtn01}>목록</button>
            </Link>
          </div>
        </Layout>
      </section>
    </MainLayout>
  );
}
