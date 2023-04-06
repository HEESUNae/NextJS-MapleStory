import Link from "next/link";

import styles from "./notice.module.css";

import Header from "../component/header/header";
import SubVisual from "../component/sub-visual/sub-visual";
import Footer from "../component/footer/footer";
import Layout from "../component/layout/layout";
import { data } from "@/consts/data";

export default function Notice() {
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
