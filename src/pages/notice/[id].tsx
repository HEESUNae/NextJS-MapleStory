import Link from "next/link";
import { useState, useEffect } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";

import styles from "./notice.module.css";

// pages
import Header from "../component/header/header";
import SubVisual from "../component/sub-visual/sub-visual";
import Layout from "../component/layout/layout";
import Footer from "../component/footer/footer";

interface JobInterface {
  data: any;
  id: string;
  [index: number]: any;
}

interface Params extends ParsedUrlQuery {
  id: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
  // const res = await fetch("../testJson/job.json");
  // const data = await res.json();
  const data = [
    { id: 1, title: "공지사항 타이틀입니다.1", date: "2022-12-23", content: "공지사항 내용입니다1" },
    { id: 2, title: "공지사항 타이틀입니다.2", date: "2023-01-02", content: "공지사항 내용입니다2" },
    { id: 3, title: "공지사항 타이틀입니다.3", date: "2023-01-04", content: "공지사항 내용입니다3" },
    { id: 4, title: "공지사항 타이틀입니다.4", date: "2023-01-06", content: "공지사항 내용입니다4" },
    { id: 5, title: "공지사항 타이틀입니다.5", date: "2023-01-07", content: "공지사항 내용입니다5" },
    { id: 6, title: "공지사항 타이틀입니다.6", date: "2023-03-02", content: "공지사항 내용입니다6" },
    { id: 7, title: "공지사항 타이틀입니다.7", date: "2023-01-09", content: "공지사항 내용입니다7" },
    { id: 8, title: "공지사항 타이틀입니다.8", date: "2023-01-12", content: "공지사항 내용입니다8" },
  ];
  const paths = data.map((el: any) => {
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
  const data = [
    { id: 1, title: "공지사항 타이틀입니다.1", date: "2022-12-23", content: "공지사항 내용입니다1" },
    { id: 2, title: "공지사항 타이틀입니다.2", date: "2023-01-02", content: "공지사항 내용입니다2" },
    { id: 3, title: "공지사항 타이틀입니다.3", date: "2023-01-04", content: "공지사항 내용입니다3" },
    { id: 4, title: "공지사항 타이틀입니다.4", date: "2023-01-06", content: "공지사항 내용입니다4" },
    { id: 5, title: "공지사항 타이틀입니다.5", date: "2023-01-07", content: "공지사항 내용입니다5" },
    { id: 6, title: "공지사항 타이틀입니다.6", date: "2023-03-02", content: "공지사항 내용입니다6" },
    { id: 7, title: "공지사항 타이틀입니다.7", date: "2023-01-09", content: "공지사항 내용입니다7" },
    { id: 8, title: "공지사항 타이틀입니다.8", date: "2023-01-12", content: "공지사항 내용입니다8" },
  ];
  const params = context.params as Params;

  return {
    props: {
      data: data,
      id: params.id,
    },
  };
};

export default function Post(props: JobInterface) {
  const [dataList, setDateList] = useState<JobInterface | null>(null);

  let changeNum: number = Number(props.id) - 1;

  useEffect(() => setDateList(props.data), []);
  if (!dataList) return;
  // console.log(dataList[changeNum]);

  return (
    <>
      <Header />
      <SubVisual title={"공지사항"} intro={"메이플스토리의 공지사항 입니다."} />
      <section className={styles.section1}>
        <Layout>
          <table className={`${styles.noticeTable} ${styles.noticeViewTable}`}>
            <tbody>
              <tr>
                <th>제목</th>
                <td>{dataList[changeNum].title}</td>
              </tr>
              <tr>
                <th>날짜</th>
                <td>{dataList[changeNum].date}</td>
              </tr>
              <tr>
                <th>내용</th>
                <td>{dataList[changeNum].content}</td>
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
      <Footer />
    </>
  );
}
