import Link from "next/link";
import styles from "./home.module.css";

export default function Home() {
  const mappingArray = [
    { job: "초보자", intro: "무한한 잠재능력이 살아 숨쉬는 예비 모험가!", info: "레벨 10이 되면 전사/마법사/궁수/도적/해적 계열로 1차 전직이 가능합니다. 1차 전직을 13레벨까지 하지 않을 경우, SP를 정상적으로 획득하지 못할수도 있습니다." },
    { job: "마법사", intro: "화려하고 강력한 속성 공격의 대가! 그 이름은 마법사!", info: "고대의 지식을 탐구하는 것을 일생일대의 과업으로 여기는 마법사는 높은 지능을 요구하는 직업입니다." },
    { job: "윈드브레이커", intro: "바람과 함께 자유롭게 메이플 월드를 누비는 궁수!", info: "윈드브레이커는 스톰의 힘을 받아들여 바람의 힘을 사용하는 궁수입니다. 다양한 바람으로 적을 공격합니다." },
    { job: "소울마스터", intro: "천체의 힘을 사용하는 태양과 달의 기사", info: "소울마스터는 정령 소율의 힘을 받아들여 태양,달,천체의 힘을 다루는 직업입니다. 코스믹오브를 사용하면 더 강력한 힘을 사용할 수 있습니다." },
  ];
  return (
    <>
      <section className={styles.section01}>
        <p className={styles.sectionTitle}>메이플스토리 직업소개</p>
        <ul className={styles.cardContainer}>
          {mappingArray.map((el, i) => {
            return (
              <li className={styles.card} key={i}>
                <Link href={"/job/job"}>
                  <p className={styles.cardTitle}>{el.job}</p>
                  <p className={styles.cardIntro}>{el.intro}</p>
                  <p className={styles.cardContent}>{el.info}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}
