export type GoalCardProps = {
  title: string;
  progress: number;
  savedAmount: number;
  targetAmount: number;
  deadline: string;
  variant: "primary" | "default" | "completed";
};
