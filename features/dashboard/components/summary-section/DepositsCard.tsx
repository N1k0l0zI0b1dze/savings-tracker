import { monthlyDeposits } from "./data/depositsData";

const DepositsCard = () => {
  const maxAmount = 1950;
  const maxBarHeight = 144;

  return (
    <div className="flex flex-row items-end gap-2">
      {monthlyDeposits.map((deposit, index) => {
        const barHeight = (deposit.amount / maxAmount) * maxBarHeight;

        return (
          <div key={index} className="flex flex-col items-center gap-1">
            <div
              className="w-11.25 rounded-lg bg-orange-400"
              style={{ height: `${barHeight}px` }}
            />

            <span className="font-bricolage text-[11px] font-semibold text-neutral-300">
              ${deposit.amount}
            </span>

            <span className="font-inter text-[11px] font-semibold">
              {deposit.month}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default DepositsCard;
