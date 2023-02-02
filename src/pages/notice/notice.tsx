import Link from "next/link";

import styles from "./notice.module.css";

import Header from "../component/header/header";
import SubVisual from "../component/sub-visual/sub-visual";
import Footer from "../component/footer/footer";
import Layout from "../component/layout/layout";

export default function Notice() {
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

  return (
    <>
      <Header />
      <SubVisual title={"공지사항"} intro={"메이플스토리의 공지사항 입니다."} />
      <section className={styles.section1}>
        <Layout>
          <table className={styles.noticeTable}>
            <thead>
              <tr>
                <th>번호</th>
                <th>제목</th>
                <th>날짜</th>
              </tr>
            </thead>
            <tbody>
              {data.map((el, i) => {
                return (
                  <tr key={i}>
                    <td>
                      <Link href={`/notice/${i + 1}`}>{el.id}</Link>
                    </td>
                    <td>
                      <Link href={`/notice/${i + 1}`}>{el.title}</Link>
                    </td>
                    <td>
                      {" "}
                      <Link href={`/notice/${i + 1}`}>{el.date}</Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Layout>
      </section>

      <Footer />
    </>
  );
}
