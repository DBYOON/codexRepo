import { Header } from "@/widgets/header";
import { Sidebar } from "@/widgets/sidebar";

const PlannerPage = () => {
  return (
    <div className="min-h-screen bg-surface-app">
      <Header />
      <main className="flex min-h-[calc(100vh-82px)] max-desktop:flex-col">
        <Sidebar />
        <section className="map-grid-background relative flex-1 overflow-hidden max-desktop:min-h-[420px]" aria-label="지도 영역" />
      </main>
    </div>
  );
};

export default PlannerPage;
