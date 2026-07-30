import SummarySection from "@/features/dashboard/components/summary-section/SummarySection";
import CardGoal from "@/features/goals/components/CardGoal";

const HomePage = () => {
  return (
    <main className="px-4">
      <SummarySection />

      <CardGoal
        title="MacBook Pro M4"
        progress={76}
        savedAmount={1900}
        targetAmount={2499}
        deadline="1 Jun 2026"
        variant="primary"
      />
    </main>
  );
};

export default HomePage;
