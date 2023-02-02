import Image from "next/image";
import Link from "next/link";
import logo from "../../../../public/maplestory-logo.png";

import styles from "./header.module.css";

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Link href={"/"}>
            <Image src={logo} fill alt={"mapleStory logo"}></Image>
          </Link>
        </div>
        <nav className={styles.navigation}>
          <Link href="/job/job">직업소개</Link>
          <Link href="/notice/notice">공지사항</Link>
        </nav>
      </header>
    </>
  );
}
