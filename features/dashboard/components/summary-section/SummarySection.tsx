import SummaryCard from "./SummaryCard";

const SummarySection = () => {
  return (
    <section className="w-full h-auto flex flex-col mt-8">
      {/* Total Savings Card */}
      <div className="flex flex-col w-full h-32.5 rounded-2xl bg-orange-400">
        <h3 className="font-semibold font-inter text-[16px] ml-4 mt-4">
          Total Savings
        </h3>
        <h2 className="font-semibold text-[44px] font-bricolage ml-4 mt-6">
          $11,249.00
        </h2>
      </div>
      <SummaryCard title="Active goals" value={7} variant="active" />
      <SummaryCard title="Goals completed" value={2} variant="completed" />
    </section>
  );
};

export default SummarySection;
