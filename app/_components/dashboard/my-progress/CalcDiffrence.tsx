import { FaCaretUp, FaCaretDown } from "react-icons/fa";
import { HiMinusSm } from "react-icons/hi";

interface Props {
  weight: number;
  prevWeight?: number;
}

export function CalcDifference({ weight, prevWeight }: Props) {
  if (!prevWeight || isNaN(prevWeight)) return "";

  const difference =
    weight > prevWeight ? weight - prevWeight : prevWeight - weight;

  return (
    <span>
      {weight === prevWeight ? (
        <span className="flex items-center gap-1">
          <HiMinusSm className="text-neutral-400" />
          <span>0.0</span>
        </span>
      ) : (
        <span className="flex items-center gap-1">
          {weight > prevWeight ? (
            <FaCaretUp className="text-green-600" />
          ) : (
            <FaCaretDown className="text-red-600" />
          )}
          <span>{difference.toFixed(1)}</span>
        </span>
      )}
    </span>
  );
}
