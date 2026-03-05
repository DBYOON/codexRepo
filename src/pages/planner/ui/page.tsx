import { Header } from "@/widgets/header";
import { Map } from "@/widgets/map";
import { Sidebar } from "@/widgets/sidebar";

const PlannerPage = () => {
  return (
    <div className="min-h-screen bg-surface-app">
      <Header />
      <main className="flex min-h-[calc(100vh-82px)] max-desktop:flex-col">
        <Sidebar />
        <section className="absolute h-full w-full" >
          <Map />
        </section>
      </main>
    </div>
  );
};

export default PlannerPage;
