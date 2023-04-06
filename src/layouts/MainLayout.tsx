import Footer from "@/pages/component/footer/footer";
import Header from "@/pages/component/header/header";
import SubVisual from "@/pages/component/sub-visual/sub-visual";
import { HTMLAttributes } from "react";

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <Header />
      <SubVisual title={"공지사항"} intro={"메이플스토리의 공지사항 입니다."} />
      <div>{children}</div>
      <Footer />
    </>
  );
};
