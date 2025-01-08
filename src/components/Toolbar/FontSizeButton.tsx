import { cn } from "@/lib/utils";
import { useEditorStore } from "@/store/use-editor-store";
import { MinusIcon, PlusIcon } from "lucide-react";
import { useState } from "react";

export const FontSizeButton = () => {
  const { editor } = useEditorStore();

  const currentFontSize = editor?.getAttributes("textStyle").fontSize
    ? editor?.getAttributes("textStyle").fontSize.replace("px", "")
    : "16";

  const [fontSize, setFontSize] = useState(currentFontSize);
  const [inputValue, setInputValue] = useState(fontSize);
  const [isEditing, setIsEditing] = useState(false);

  const updateFontSize = (newSize: string) => {
    const size = parseInt(newSize);
    if (!isNaN(size) && size > 0) {
      editor?.chain().focus().setFontSize(`${size}px`).run();
      setFontSize(newSize);
      setInputValue(currentFontSize);
      setIsEditing(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleInputBlur = () => {
    updateFontSize(inputValue);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      updateFontSize(inputValue);
      editor?.commands.focus();
    }
  };

  const increment = () => {
    const newSize = parseInt(currentFontSize) + 1;
    updateFontSize(newSize.toString());
  };

  const decrement = () => {
    const newSize = parseInt(currentFontSize) - 1;
    if (newSize > 0) {
      updateFontSize(newSize.toString());
    }
  };

  return (
    <div className="flex items-center gap-x-0.5">
      <button
        className={cn(
          "h-9 w-9 shrink-0 flex items-center justify-center rounded-[5px] bg-white px-2 text-small focus:outline-none overflow-hidden"
        )}
        onClick={decrement}
      >
        <MinusIcon className="size-4" />
      </button>
      {isEditing ? (
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          onKeyDown={handleKeyDown}
          className={cn(
            "h-9 w-9 shrink-0 text-center border border-neutral-400 rounded-[5px] bg-white px-2 text-small focus:outline-none overflow-hidden cursor-text"
          )}
        />
      ) : (
        <button
          className={cn(
            "h-9 w-9 shrink-0 text-center border border-neutral-400 rounded-[5px] bg-white px-2 text-small hover:bg-[#f4f6f9] focus:outline-none overflow-hidden cursor-text"
          )}
          onClick={() => {
            setIsEditing(true);
            setFontSize(currentFontSize);
          }}
        >
          {currentFontSize}
        </button>
      )}
      <button
        className={cn(
          "h-9 w-9 shrink-0 flex items-center justify-center rounded-[5px] bg-white px-2 text-small hover:bg-[#f4f6f9] focus:outline-none overflow-hidden"
        )}
        onClick={increment}
      >
        <PlusIcon className="size-4" />
      </button>
    </div>
  );
};
