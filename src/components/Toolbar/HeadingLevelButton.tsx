import { useEditorStore } from "@/store/use-editor-store";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { ChevronDownIcon } from "lucide-react";
import { Level } from "@tiptap/extension-heading";

export const HeadingLevelButton = () => {
  const { editor } = useEditorStore();

  const headings = [
    { title: "Normal text", value: 0, fontSize: "16px" },
    { title: "Heading 1", value: 1, fontSize: "32px" },
    { title: "Heading 2", value: 2, fontSize: "24px" },
    { title: "Heading 3", value: 3, fontSize: "20px" },
    { title: "Heading 4", value: 3, fontSize: "18px" },
    { title: "Heading 5", value: 4, fontSize: "16px" },
  ];

  const getCurrentHeading = () => {
    for (let level = 1; level <= 5; level++) {
      if (editor?.isActive(`heading`, { level })) {
        return `Heading ${level}`;
      }
    }

    return "Normal text";
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className={cn(
            "h-9 min-w-7 shrink-0 flex items-center justify-center rounded-[5px] bg-white px-2 text-small hover:bg-[#f4f6f9] focus:outline-none overflow-hidden"
          )}
        >
          <span className="truncate">{getCurrentHeading()}</span>
          <ChevronDownIcon className="ml-2 size-4 shrink-0" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="p-1 flex flex-col gap-y-1">
        {headings.map(({ title, value, fontSize }) => (
          <button
            className={cn(
              "flex items-center gap-x-2 px-2 py-1 rounded-sm hover:bg-[#f4f6f9] focus:outline-none",
              (editor?.isActive(`heading`, { level: value }) ||
                (!editor?.isActive(`heading`) && value === 0)) &&
                "bg-[#e2eaf6]"
            )}
            key={title}
            style={{ fontSize }}
            onClick={() => {
              if (value === 0) {
                editor?.chain().focus().setParagraph().run();
              } else {
                editor
                  ?.chain()
                  .focus()
                  .toggleHeading({ level: value as Level })
                  .run();
              }
            }}
          >
            {title}
          </button>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
