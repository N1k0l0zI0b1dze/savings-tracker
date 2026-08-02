import Image from "next/image";
import GoalsList from "./GoalsList";

const Goals = () => {
  return (
    <div className="mt-4 flex w-full flex-col rounded-2xl bg-neutral-900 p-4">
      <div className="mt-4 font-inter flex flex-col w-full h-26.5">
        <h2 className="text-[32px] font-bold text-white">Your goals</h2>

        <div className="mt-4 gap-4 w-full h-12 flex">
          <button className="flex items-center justify-center gap-2.5 w-[163.5px] h-full rounded-3xl border border-neutral-600 bg-neutral-800/70 p-4 backdrop-blur-md cursor-pointer">
            <Image
              src="/assets/images/Filter-icon.svg"
              alt="filter"
              width={20}
              height={20}
            />
            <span>Filter</span>
          </button>
          <button className="flex items-center justify-center gap-2.5 w-[163.5px] h-full rounded-3xl border border-neutral-600 bg-neutral-800/70 p-4 backdrop-blur-md cursor-pointer">
            <Image
              src="/assets/images/Sort-by.svg"
              alt="sort"
              width={20}
              height={20}
            />
            <span>Sort By</span>
          </button>
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-6">
        <GoalsList />
      </div>
    </div>
  );
};

export default Goals;
