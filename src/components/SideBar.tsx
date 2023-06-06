import { sidebarMaster } from "@/utils/constant";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

export default function Sidebar() {
  const router = useRouter();
  const path = router.pathname;

  return (
    <div className="flex flex-col p-3 bg-white shadow w-60">
      <div className="space-y-3">
        <div className="flex items-center">
          <h2 className="text-xl font-bold">Menus</h2>
        </div>
        <div className="flex-1">
          <ul className="pt-2 pb-4 space-y-1 text-sm">
            {sidebarMaster.map((item: any) => (
              <li className="rounded-sm">
                <Link
                  href={item.url}
                  className={`flex items-center p-2 space-x-3 rounded-md ${
                    path.indexOf(item.url) !== -1 && "bg-[#fff6ea]"
                  }`}
                >
                  <button>{item.name}</button>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
