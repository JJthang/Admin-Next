import {
  Bell,
  History,
  LayoutGrid,
  Plus,
  Search,
  Settings,
  UsersRound,
} from "lucide-react";
import Image from "next/image";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
type Props = {};

const Header = (props: Props) => {
  return (
    <div className="w-full bg-slate-200 flex justify-between px-5 py-2">
      <div className="flex gap-3 items-center">
        <History className="w-7" />
        <div className="w-full relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-2">
            <Search className="w-6 opacity-70" />
          </div>
          <input
            type="text"
            className="focus:outline-none h-10 rounded-md pl-10"
            placeholder="Search branch name..."
          />
        </div>
      </div>
      <div className="flex justify-center items-center gap-2">
        <div className="border-r-2 border-slate-300 pr-3">
          <Plus className="bg-[#3572EF] rounded-lg text-white p-1 size-7" />
        </div>
        <div className="flex justify-center items-center h-[28px] gap-2 border-r-2 border-slate-300 pr-2">
          <UsersRound className="size-5" />
          <Bell className="size-5" />
          <Settings className="size-5" />
        </div>
        <Select>
          <SelectTrigger className="w-[100px]">
            <SelectValue placeholder="Theme" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
        <Image
          src="/Image1.png"
          width={30}
          height={30}
          className="rounded-full"
          alt="Picture of the author"
        />
        <LayoutGrid />
      </div>
    </div>
  );
};

export default Header;
