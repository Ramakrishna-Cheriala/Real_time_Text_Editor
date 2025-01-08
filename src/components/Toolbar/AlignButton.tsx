import { useEditorStore } from "@/store/use-editor-store";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { type ColorResult, CirclePicker, CompactPicker } from "react-color";
import {
  AlignCenterIcon,
  AlignJustifyIcon,
  AlignLeftIcon,
  AlignRightIcon,
  HighlighterIcon,
} from "lucide-react";

export const AlignButton = () => {
  const { editor } = useEditorStore();

  const alignments = [
    {
      title: "Align Left",
      value: "left",
      icon: AlignLeftIcon,
    },
    {
      title: "Align Center",
      value: "center",
      icon: AlignCenterIcon,
    },
    {
      title: "Align Right",
      value: "right",
      icon: AlignRightIcon,
    },
    {
      title: "Align Justify",
      value: "justify",
      icon: AlignJustifyIcon,
    },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className={cn(
            "h-9 min-w-9 shrink-0 flex flex-col items-center justify-center rounded-[5px] bg-white px-2 text-small hover:bg-[#f4f6f9] focus:outline-none overflow-hidden"
          )}
        >
          <AlignLeftIcon className="size-4" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="p-1 flex flex-col gap-y-1">
        {alignments.map(({ title, value, icon: Icon }) => (
          <button
            key={value}
            onClick={() => editor?.chain().focus().setTextAlign(value).run()}
            className={cn(
              "flex items-center gap-x-2 px-2 py-1 rounded-sm hover:bg-[#f4f6f9] ",
              editor?.isActive({ textAlign: value }) && "bg-[#e2eaf6]"
            )}
          >
            <Icon className="size-4" />
            <span className="text-sm">{title}</span>
          </button>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
