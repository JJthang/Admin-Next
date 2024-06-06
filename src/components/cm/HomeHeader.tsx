import { Building2 } from "lucide-react";
import Link from "next/link";
import React from "react";

type Props = {};

const HomeHeader = (props: Props) => {
  return (
    <React.Fragment>
      <div className="flex pl-12 gap-4 py-7 bg-slate-100">
        <Building2 />
        <div className="flex flex-col">
            <h3 className="font-bold">Hello, JB WEBDEVELOPER</h3>
            <p className="font-semibold">Grat</p>
        </div>
        <div className="flex">
          <ul>
            <li>
              <Link href={'/'}>Dashboard</Link>
            </li>
            <li>
              <Link href={'/'}>Getting Started</Link>
            </li>
            <li>
              <Link href={'/'}>Recent Updates</Link>
            </li>
            <li>
              <Link href={'/'}>Announcements</Link>
            </li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomeHeader;
