import Header from "@/components/cm/Header";
import React from "react";

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return <div>
    <div className="flex">
        <div className="w-96 text-slate-50 bg-slate-900">
            Sidebar
        </div>
        <div className="w-full min-h-screen bg-slate-100">
            <Header />
        {children}
        </div>
    </div >
    </div>;
};

export default layout;
