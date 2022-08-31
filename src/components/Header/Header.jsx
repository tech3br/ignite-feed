import igniteLogo from "../../assets/fav.svg";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt="Logo do Ignite" />
      <h1>Ignite Feed</h1>
    </header>
  );
}
