import styles from "./layout.module.css";

// children 은 <layout/> 안에 내용들
export default function Layout({ children }: any) {
  return <div className={styles.container}>{children}</div>;
}
