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
  ListCollapseIcon,
} from "lucide-react";

export const LineHeightButton = () => {
  const { editor } = useEditorStore();

  const lineHeight = [
    {
      title: "Default",
      value: "normal",
    },
    {
      title: "Single",
      value: "1",
    },
    {
      title: "1.15",
      value: "1.15",
    },
    {
      title: "1.5",
      value: "1.5",
    },
    {
      title: "Double",
      value: "2",
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
          <ListCollapseIcon className="size-4" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="p-1 flex flex-col gap-y-1">
        {lineHeight.map(({ title, value }) => (
          <button
            key={value}
            onClick={() => editor?.chain().focus().setLineHeight(value).run()}
            className={cn(
              "flex items-center gap-x-2 px-2 py-1 rounded-sm hover:bg-[#f4f6f9] ",
              editor?.getAttributes("paragraph").lineHeight === value &&
                "bg-[#e2eaf6]"
            )}
          >
            <span className="text-sm">{title}</span>
          </button>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
