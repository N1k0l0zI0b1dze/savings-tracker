import type { GoalCardProps } from "../types/GoalCardProps";

const CardGoal = ({
  title,
  progress,
  savedAmount,
  targetAmount,
  deadline,
  variant,
}: GoalCardProps) => {
  return (
    <div className="mt-4 flex h-60 w-full flex-col rounded-2xl bg-orange-400 p-4">
      <h2 className="font-inter text-[20px] font-semibold text-white">
        {title}
      </h2>

      <div className="mt-4">
        <p className="font-bricolage text-[44px] font-semibold text-white mt-12">
          {progress}%
        </p>

        <div className="mt-0 h-3 w-full overflow-hidden rounded-full bg-neutral-900">
          <div
            className="h-full rounded-full bg-white"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
      <p className="font-normal text-[14px] font-inter mt-4">
        ${savedAmount.toLocaleString()} of ${targetAmount.toLocaleString()} •
        Due ${deadline}
      </p>
    </div>
  );
};

export default CardGoal;
