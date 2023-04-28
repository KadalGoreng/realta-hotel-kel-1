import React, { ReactNode } from "react";
import Header from "../header";
import Footer from "../footer";

interface LayoutProps {
  children: ReactNode;
}
export default function Layout(props: any) {
  const { children } = props;
  return (
    <div>
      <Header />
      <section className="bg-gray-50 light:bg-gray-900">
        <div className="text-black">{children}</div>
      </section>
      <Footer />
    </div>
  );
}
