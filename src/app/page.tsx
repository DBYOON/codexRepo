import Header from "@/shared/ui/header";
import { formatDate } from "@/shared/lib/utils";
import styles from "./page.module.css";

export default function Home() {
  const today = formatDate(new Date());

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Header
          title="Next.js Base Ready"
          subtitle="공식 기본 구조에 맞춘 시작 템플릿입니다."
        />
        <p>Today: {today}</p>
      </main>
    </div>
  );
}
