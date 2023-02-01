import styles from "./footer.module.css";

// pages
import Layout from "../layout/layout";

export default function footer() {
  return (
    <>
      <Layout>
        <footer className={styles.footer}>
          <p>인천광역시 부평구 부평대로 114</p>
          <p>메이플스토리</p>
          <p>황희선</p>
        </footer>
      </Layout>
    </>
  );
}
