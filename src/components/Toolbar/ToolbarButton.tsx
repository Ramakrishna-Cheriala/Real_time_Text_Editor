import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface ToolbarButtonProps {
  onClick?: () => void;
  isActive?: boolean;
  icon: LucideIcon;
}

export const ToolbarButton = ({
  onClick,
  isActive,
  icon: Icon,
}: ToolbarButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "text-small h-9 min-w-9 flex items-center justify-center rounded-[5px] bg-white hover:bg-[#f4f6f9] focus:outline-none",
        isActive && "bg-[#e2eaf6]"
      )}
    >
      <Icon className="size-4" />
    </button>
  );
};
