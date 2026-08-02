import Goals from "@/features/dashboard/components/goals-section/Goals";
import SummarySection from "@/features/dashboard/components/summary-section/SummarySection";

const HomePage = () => {
  return (
    <main className="px-4">
      <SummarySection />
      <Goals />
    </main>
  );
};

export default HomePage;
