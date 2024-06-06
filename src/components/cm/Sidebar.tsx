"use client";
import { dataSidebar } from "@/data/constants/data.constant";
import { ChevronLeft, Home, ShoppingCart } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

type Props = {};

const Sidebar = (props: Props) => {
  const [currentTab, setCurrentTab] = useState(0);
  const renderItemSidebar = () => {
    return dataSidebar.map((itemSide, index) => {
      return (
        <Link
          key={index}
          href={itemSide.link}
          className={`flex justify-start items-center gap-4 py-3 px-3 ${
            currentTab === index ? "bg-[#40A2E3]" : ""
          } rounded-md`}
          onClick={() => setCurrentTab(index)}
        >
          <span
            className="icon"
            dangerouslySetInnerHTML={{ __html: itemSide.icon }}
          />
          <p className="font-semibold text-white">{itemSide.name}</p>
        </Link>
      );
    });
  };
  return (
    <React.Fragment>
      <div className="w-96 bg-slate-900 flex flex-col justify-between">
        <div className="w-full">
          <div className="text-slate-50 pb-[7px]">
            <div className="flex justify-start items-center gap-4 h-[50px] pt-2 pl-3">
              <ShoppingCart className="size-8" />
              <h2 className="font-bold text-3xl">Inventory</h2>
            </div>
          </div>
          <div className="bg-slate-800 h-full text-white">
            <div className="px-4 pt-4  flex flex-col gap-4">
              {renderItemSidebar()}
            </div>
          </div>
        </div>
        <div className="w-full">
          <button className="w-full flex justify-center items-center py-3 bg-slate-950">
            <ChevronLeft className="text-white" />
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Sidebar;
