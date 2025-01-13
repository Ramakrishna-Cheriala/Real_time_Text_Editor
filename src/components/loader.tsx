import { Loader2Icon, LoaderCircleIcon, LoaderIcon } from "lucide-react";

interface LoaderProps {
  label?: string;
}

export const Loader = ({ label }: LoaderProps) => {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center gap-2">
      <LoaderCircleIcon className="size-6 text-muted-foreground animate-spin" />
      {label && <p className="text-sm text-muted-foreground">{label}</p>}
    </div>
  );
};
