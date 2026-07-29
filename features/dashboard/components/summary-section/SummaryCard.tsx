import type { SummaryCardProps } from "./types/SummaryCardProps";

const SummaryCard = ({ title, value, variant }: SummaryCardProps) => {
  const valueColor =
    variant === "active" ? "text-orange-400" : "text-green-500";

  return (
    <article className="flex h-32.5 w-full flex-col rounded-2xl border border-neutral-600 bg-neutral-800/70 p-4 backdrop-blur-md mt-4">
      <h3 className="font-inter text-preset-5-semibold">{title}</h3>

      <p
        className={`mt-auto font-bricolage text-preset-1-mobile ${valueColor}`}
      >
        {value}
      </p>
    </article>
  );
};

export default SummaryCard;
