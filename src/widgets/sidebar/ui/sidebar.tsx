import { activityOptions, toggleOptions } from "../model/panel-options";
import styles from "./sidebar.module.css";

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <section className={styles.section}>
        <h2 className={styles.routeTitle}>INCHEON ROUTE</h2>
        <div className={styles.metricBlock}>
          <p className={styles.metricLabel}>거리</p>
          <p className={styles.metricValue}>0.60 마일</p>
        </div>
      </section>

      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>컨트롤</h3>

        <div className={styles.searchBox}>
          <input type="text" value="" readOnly placeholder="위치 검색" />
          <button type="button" aria-label="위치 찾기" className={styles.pinButton}>
            ○
          </button>
        </div>

        <p className={styles.subTitle}>사용자 지정</p>
        <div className={styles.activityTabs}>
          {activityOptions.map((option, index) => (
            <button
              key={option}
              type="button"
              className={`${styles.tab} ${index === 0 ? styles.activeTab : ""}`}
            >
              {option}
            </button>
          ))}
        </div>

        <div className={styles.toggleGroup}>
          {toggleOptions.map((toggle) => (
            <div key={toggle.key} className={styles.toggleRow}>
              <span>{toggle.label}</span>
              <button
                type="button"
                className={`${styles.switch} ${toggle.enabled ? styles.on : styles.off}`}
                aria-label={`${toggle.label} 토글`}
              >
                <span className={styles.knob} />
              </button>
            </div>
          ))}
        </div>

        <button type="button" className={styles.dropdown}>
          아트파운드맵
        </button>
      </section>

      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>노선</h3>
      </section>

      <button type="button" className={styles.saveButton}>
        루트 저장
      </button>
    </aside>
  );
};

export default Sidebar;
