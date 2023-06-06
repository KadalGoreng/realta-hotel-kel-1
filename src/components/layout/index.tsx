import React, { ReactNode } from "react";
import Header from "../header";
import Footer from "../footer";
import { useRouter } from "next/router";
import Sidebar from "../SideBar";

interface LayoutProps {
  children: ReactNode;
}
export default function Layout(props: LayoutProps) {
  const { children } = props;
  const router = useRouter();

  return (
    <div>
      <Header />
      {router.pathname.indexOf("master") !== -1 ? (
        <div className="flex gap-4 min-h-screen mr-4">
          <Sidebar />
          {children}
        </div>
      ) : (
        <>{children}</>
      )}
      <Footer />
    </div>
  );
}
