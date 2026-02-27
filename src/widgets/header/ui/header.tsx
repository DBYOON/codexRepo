import MapmyrunLogo from "@/shared/ui/mapmyrun-logo";

import { navItems } from "../model/nav-items";
import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoArea}>
        <MapmyrunLogo />
      </div>

      <nav className={styles.nav} aria-label="메인 메뉴">
        {navItems.map((item) => (
          <button
            key={item.key}
            type="button"
            className={`${styles.navItem} ${item.isActive ? styles.active : ""}`}
            aria-current={item.isActive ? "page" : undefined}
          >
            {item.label}
          </button>
        ))}
      </nav>

      <div className={styles.profileWrap}>
        <button type="button" className={styles.profileButton} aria-label="프로필">
          <span className={styles.profileIcon} />
        </button>
      </div>
    </header>
  );
};

export default Header;
