import { DockIcon } from "lucide-react";
import Link from "next/link";
import { SearchInput } from "./search-input";

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between h-full w-full">
      <div className="flex gap-3 items-center shrink-0 pr-6">
        <Link href="/">
          <DockIcon className="size-8 ml-2" />
        </Link>
        <h3 className="text-xl">Docs</h3>
      </div>
      <SearchInput />
    </nav>
  );
};
