import { Header } from "@/widgets/header";
import { Sidebar } from "@/widgets/sidebar";

import styles from "./planner-page.module.css";

const PlannerPage = () => {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <Sidebar />
        <section className={styles.mapArea} aria-label="지도 영역" />
      </main>
    </div>
  );
};

export default PlannerPage;
