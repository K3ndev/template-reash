import { LayoutProps } from "./type";
import { Footer, Header } from "./component/index";

export const Layout = (props: LayoutProps) => {
  return (
    <>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </>
  );
};
