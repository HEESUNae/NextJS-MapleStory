import styles from "./sub-visual.module.css";

interface propsInterface {
  title: string;
  intro: string;
}

export default function SubVisual(props: propsInterface) {
  return (
    <>
      <div className={styles.subVisual}>
        <p>{props.title}</p>
        <p>{props.intro}</p>
      </div>
    </>
  );
}
