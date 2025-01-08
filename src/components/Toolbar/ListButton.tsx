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
  ListIcon,
  ListOrderedIcon,
} from "lucide-react";

export const ListButton = () => {
  const { editor } = useEditorStore();

  const lists = [
    {
      title: "Bullet List",
      icon: ListIcon,
      isActive: () => editor?.isActive("bulletList"),
      onclick: () => editor?.chain().focus().toggleBulletList().run(),
    },
    {
      title: "Ordered List",
      icon: ListOrderedIcon,
      isActive: () => editor?.isActive("orderedList"),
      onclick: () => editor?.chain().focus().toggleOrderedList().run(),
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
          <ListIcon className="size-4" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="p-1 flex flex-col gap-y-1">
        {lists.map(({ title, icon: Icon, onclick, isActive }) => (
          <button
            key={title}
            onClick={onclick}
            className={cn(
              "flex items-center gap-x-2 px-2 py-1 rounded-sm hover:bg-[#f4f6f9] ",
              isActive() && "bg-[#e2eaf6]"
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
