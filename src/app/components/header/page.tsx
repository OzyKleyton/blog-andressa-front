import styles from "@/app/components/header/header.module.css";

export function Header() {
  return (
    <nav className={styles.navHeader}>
      <div className={styles.divPrincipal}>
        <h1 className={styles.logoName}>Andressa Rayanne</h1>
        <div className={styles.links}>
          <a className={styles.blog} href="">
            Blog
          </a>
          <a className={styles.acessar} href="">
            Acessar
          </a>
        </div>
      </div>
    </nav>
  );
}
