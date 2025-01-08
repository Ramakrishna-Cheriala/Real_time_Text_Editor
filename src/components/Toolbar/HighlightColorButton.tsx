import { useEditorStore } from "@/store/use-editor-store";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { type ColorResult, CirclePicker, CompactPicker } from "react-color";
import { HighlighterIcon } from "lucide-react";

export const HighlightColorButton = () => {
  const { editor } = useEditorStore();

  const value = editor?.getAttributes("highlight").color || "#FFFFFFFF";

  const onChange = (color: ColorResult) => {
    editor?.chain().focus().setHighlight({ color: color.hex }).run();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className={cn(
            "h-9 min-w-9 shrink-0 flex flex-col items-center justify-center rounded-[5px] bg-white px-2 text-small hover:bg-[#f4f6f9] focus:outline-none overflow-hidden"
          )}
        >
          <HighlighterIcon className="size-4" />
          <div
            className="h-0.5 w-full mt-0.5"
            style={{ backgroundColor: value }}
          />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="">
        <CompactPicker
          color={value}
          onChange={onChange}
          className="rounded-full mx-auto"
        />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
