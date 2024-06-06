import Header from "@/components/cm/Header";
import Sidebar from "@/components/cm/Sidebar";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <div className="flex">
        <Sidebar />
        <div className="w-full min-h-screen bg-slate-100 ">
          <Header />
          {children}
        </div>
      </div>
    </div>
  );
};

export default layout;
