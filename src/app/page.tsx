import { MainPage } from "./components/MainPage/page";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <MainPage />
    </div>
  );
}
