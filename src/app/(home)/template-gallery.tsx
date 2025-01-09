"use client";

import { templates } from "@/constants/templates";
import { cn } from "@/lib/utils";

export const TemplateGallery = () => {
  const isCreating = false;

  return (
    <div className="bg-[#F1F3F4]">
      <div className="max-w-screen-xl mx-auto px-16 py-6 flex flex-col gap-y-4">
        <h3 className="text-base font-medium">Start a new Document</h3>
        <div className="flex gap-4 overflow-x-auto no-scrollbar">
          {templates.map((template) => (
            <div
              key={template.id}
              className={cn(
                "shrink-0 w-[150px] flex flex-col gap-y-2.5",
                isCreating && "pointer-events-none opacity-50"
              )}
            >
              <button
                disabled={isCreating}
                onClick={() => {}}
                style={{
                  backgroundImage: `url(${template.imageUrl})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
                className="h-[200px] w-full hover:border-blue-500 rounded-sm border hover:bg-blue-50 transition flex flex-col items-center justify-center gap-y-4 bg-white"
              ></button>
              <p className="text-sm font-medium truncate text-center">
                {template.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
