"use client";

import { Separator } from "@/components/ui/separator";
import { useEditorStore } from "@/store/use-editor-store";
import {
  BoldIcon,
  ChevronDownIcon,
  ItalicIcon,
  ListTodoIcon,
  LucideIcon,
  MessageSquarePlusIcon,
  PrinterIcon,
  Redo2Icon,
  RemoveFormattingIcon,
  SpellCheckIcon,
  UnderlineIcon,
  Undo2Icon,
} from "lucide-react";
import { ToolbarButton } from "@/components/Toolbar/ToolbarButton";
import { FontFamilyButton } from "@/components/Toolbar/FontFamilyButton";
import { HeadingLevelButton } from "@/components/Toolbar/HeadingLevelButton";
import { TextColorButton } from "@/components/Toolbar/TextColorButton";
import { HighlightColorButton } from "@/components/Toolbar/HighlightColorButton";
import { LinkButton } from "@/components/Toolbar/LinkButton";
import { ImageButton } from "@/components/Toolbar/ImageButton";
import { AlignButton } from "@/components/Toolbar/AlignButton";
import { ListButton } from "@/components/Toolbar/ListButton";
import { FontSizeButton } from "@/components/Toolbar/FontSizeButton";
import { LineHeightButton } from "@/components/Toolbar/LineHeightButton";

export const ToolBar = () => {
  const { editor } = useEditorStore();

  const sections: {
    title: string;
    icon: LucideIcon;
    onClick?: () => void;
    isActive?: boolean;
  }[][] = [
    [
      {
        title: "Undo",
        icon: Undo2Icon,
        onClick: () => editor?.chain().focus().undo().run(),
        isActive: false,
      },
      {
        title: "Redo",
        icon: Redo2Icon,
        onClick: () => editor?.chain().focus().redo().run(),
        isActive: false,
      },
      {
        title: "Print",
        icon: PrinterIcon,
        onClick: () => window.print(),
        isActive: false,
      },
      {
        title: "Spell Check",
        icon: SpellCheckIcon,
        onClick: () => {
          const current = editor?.view.dom.getAttribute("spellcheck");
          editor?.view.dom.setAttribute(
            "spellcheck",
            current === "false" ? "true" : "false"
          );
        },
        isActive: false,
      },
    ],
    [
      {
        title: "Bold",
        icon: BoldIcon,
        onClick: () => editor?.chain().focus().toggleBold().run(),
        isActive: editor?.isActive("bold"),
      },
      {
        title: "Italic",
        icon: ItalicIcon,
        onClick: () => editor?.chain().focus().toggleItalic().run(),
        isActive: editor?.isActive("italic"),
      },
      {
        title: "Underline",
        icon: UnderlineIcon,
        onClick: () => editor?.chain().focus().toggleUnderline().run(),
        isActive: editor?.isActive("underline"),
      },
    ],
    [
      {
        title: "Comment",
        icon: MessageSquarePlusIcon,
        onClick: () => {
          editor?.chain().focus().addPendingComment().run();
        },
        isActive: editor?.isActive("liveblocksCommentMark"),
      },
      {
        title: "List todo",
        icon: ListTodoIcon,
        onClick: () => editor?.chain().focus().toggleTaskList().run(),
        isActive: editor?.isActive("taskList"),
      },
      {
        title: "Remove Formatting",
        icon: RemoveFormattingIcon,
        onClick: () => editor?.chain().focus().unsetAllMarks().run(),
      },
    ],
  ];

  return (
    <div className="bg-[#f4f6f9] px-2 py-1 min-h-[40px] flex items-center gap-x-1 overflow-x-auto">
      {sections[0].map((item) => {
        return <ToolbarButton key={item.title} {...item} />;
      })}

      <Separator orientation="vertical" className="h-6 bg-neutral-300" />
      <FontFamilyButton />

      <Separator orientation="vertical" className="h-6 bg-neutral-300" />
      <HeadingLevelButton />

      <Separator orientation="vertical" className="h-6 bg-neutral-300" />
      <FontSizeButton />

      <Separator orientation="vertical" className="h-6 bg-neutral-300" />
      {sections[1].map((item) => {
        return <ToolbarButton key={item.title} {...item} />;
      })}
      <TextColorButton />
      <HighlightColorButton />

      <Separator orientation="vertical" className="h-6 bg-neutral-300" />
      <LinkButton />
      <ImageButton />
      <AlignButton />
      <ListButton />
      <LineHeightButton />

      <Separator orientation="vertical" className="h-6 bg-neutral-300" />
      {sections[2].map((item) => {
        return <ToolbarButton key={item.title} {...item} />;
      })}
    </div>
  );
};
