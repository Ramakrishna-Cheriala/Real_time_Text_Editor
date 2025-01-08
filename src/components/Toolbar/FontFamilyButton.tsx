import { useEditorStore } from "@/store/use-editor-store";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { ChevronDownIcon } from "lucide-react";

export const FontFamilyButton = () => {
  const { editor } = useEditorStore();

  const fonts = [
    { title: "Arial", value: "Arial" },
    { title: "Times New Roman", value: "Times New Roman" },
    { title: "Courier New", value: "Courier New" },
    { title: "Georgia", value: "Georgia" },
    { title: "Verdana", value: "Verdana" },
    { title: "Comic Sans MS", value: "Comic Sans MS" },
    { title: "Tahoma", value: "Tahoma" },
    { title: "Trebuchet MS", value: "Trebuchet MS" },
    { title: "Lucida Sans Unicode", value: "Lucida Sans Unicode" },
    { title: "Impact", value: "Impact" },
    { title: "Symbol", value: "Symbol" },
    { title: "Webdings", value: "Webdings" },
    { title: "Wingdings", value: "Wingdings" },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className={cn(
            "h-9 w-[120px] shrink-0 flex items-center justify-between rounded-[5px] bg-white px-2 text-small hover:bg-[#f4f6f9] focus:outline-none overflow-hidden"
          )}
        >
          <span className="truncate">
            {editor?.getAttributes("textStyle").fontFamily || "Arial"}
          </span>
          <ChevronDownIcon className="ml-2 size-4 shrink-0" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="p-1 flex flex-col gap-y-1">
        {fonts.map(({ title, value }) => (
          <button
            className={cn(
              "flex items-center gap-x-2 px-2 py-1 rounded-sm hover:bg-[#f4f6f9] focus:outline-none",
              editor?.getAttributes("textStyle").fontFamily === value &&
                "bg-[#e2eaf6]"
            )}
            key={title}
            style={{ fontFamily: value }}
            onClick={() => editor?.chain().focus().setFontFamily(value).run()}
          >
            {title}
          </button>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
