import { useEditorStore } from "@/store/use-editor-store";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { Link2Icon } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export const LinkButton = () => {
  const { editor } = useEditorStore();

  const [value, setValue] = useState(editor?.getAttributes("link").href || "");

  const onChange = (href: string) => {
    editor?.chain().focus().extendMarkRange("link").setLink({ href }).run();
    setValue("");
  };

  return (
    <DropdownMenu
      onOpenChange={(open) => {
        if (!open) {
          setValue(editor?.getAttributes("link").href || "");
        }
      }}
    >
      <DropdownMenuTrigger asChild>
        <button
          className={cn(
            "h-9 min-w-9 shrink-0 flex flex-col items-center justify-center rounded-[5px] bg-white px-2 text-small hover:bg-[#f4f6f9] focus:outline-none overflow-hidden"
          )}
        >
          <Link2Icon className="size-4" />
          <div
            className="h-0.5 w-full mt-0.5"
            style={{ backgroundColor: value }}
          />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="p-2.5 flex items-center gap-x-2">
        <Input
          placeholder="https://example.com"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button onClick={() => onChange(value)}>Apply</Button>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
