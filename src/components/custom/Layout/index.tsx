import React from "react";
import { LayoutProps } from "./type";
import { Footer, Header } from "../../custom/index";

export function Layout(props: LayoutProps) {
  return (
    <>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </>
  );
}
