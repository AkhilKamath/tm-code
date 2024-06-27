"use client";
import { usePathname } from "next/navigation";

import {
  MdNotifications,
  MdSearch,
} from "react-icons/md";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="p-5 rounded-lg flex items-center justify-between">
      <div className="font-bold uppercase">{pathname.split('/').splice(2).join('/')}</div>
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2.5 bg-soft p-2.5 rounded-lg">
          <MdSearch />
          <input type="text" placeholder="Search..." className="bg-transparent border-none" />
        </div>
        <div className="flex gap-5">
          <MdNotifications size={20} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;