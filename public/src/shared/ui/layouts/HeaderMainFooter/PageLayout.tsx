// Main Layout Page component, that wrap whole page.
import { FC } from "react";
import Header from "../../../../widgets/header/header";
import Footer from "../../../../widgets/footer/footer";

type ReqProps = {
  children: React.ReactNode;  
};

const PageLayout: FC<ReqProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 flex items-center">{children}</main>
      <Footer />
    </div>
  );
};
export default PageLayout;
