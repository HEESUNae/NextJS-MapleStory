import Layout from "../component/layout/layout";
import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { useState } from "react";

interface JobInterface {
  data: any;
  id: string;
  [index: number]: number;
}

interface Params extends ParsedUrlQuery {
  id: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
  // const res = await fetch("../testJson/job.json");
  // const data = await res.json();
  const data = [
    { id: 1, title: "공지사항 타이틀입니다.1", date: "2022-12-23" },
    { id: 2, title: "공지사항 타이틀입니다.2", date: "2023-01-02" },
    { id: 3, title: "공지사항 타이틀입니다.3", date: "2023-01-04" },
    { id: 4, title: "공지사항 타이틀입니다.4", date: "2023-01-06" },
    { id: 5, title: "공지사항 타이틀입니다.5", date: "2023-01-07" },
    { id: 6, title: "공지사항 타이틀입니다.6", date: "2023-03-02" },
    { id: 7, title: "공지사항 타이틀입니다.7", date: "2023-01-09" },
    { id: 8, title: "공지사항 타이틀입니다.8", date: "2023-01-12" },
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
    { id: 1, title: "공지사항 타이틀입니다.1", date: "2022-12-23" },
    { id: 2, title: "공지사항 타이틀입니다.2", date: "2023-01-02" },
    { id: 3, title: "공지사항 타이틀입니다.3", date: "2023-01-04" },
    { id: 4, title: "공지사항 타이틀입니다.4", date: "2023-01-06" },
    { id: 5, title: "공지사항 타이틀입니다.5", date: "2023-01-07" },
    { id: 6, title: "공지사항 타이틀입니다.6", date: "2023-03-02" },
    { id: 7, title: "공지사항 타이틀입니다.7", date: "2023-01-09" },
    { id: 8, title: "공지사항 타이틀입니다.8", date: "2023-01-12" },
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
  let changeNum = Number(props.id);
  changeNum = changeNum - 1;

  return (
    <Layout>
      <div>
        <p>{props.data[changeNum].title}</p>
        <p>{props.data[changeNum].id}</p>
        <p>{props.data[changeNum].date}</p>
        <button>버튼</button>
      </div>
    </Layout>
  );
}
