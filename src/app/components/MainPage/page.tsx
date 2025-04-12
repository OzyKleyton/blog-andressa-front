import Image from "next/image";
import styles from "@/app/components/MainPage/mainPage.module.css";

export function MainPage() {
  return (
    <div className={styles.main}>
      <section className={styles.mainSection}>
        <div className={styles.Images}>
          <Image
            src="/principal.png"
            alt="Foto de Andressa e Kleyton"
            width={360}
            height={450}
            className={styles.imagePrincipal}
          />

          <Image
            src="/colum.png"
            alt="Coluna separadora"
            width={10}
            height={330}
          />
        </div>
      </section>
    </div>
  );
}
