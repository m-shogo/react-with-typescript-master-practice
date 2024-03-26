import Header from "./Header";
import Footer from "./Footer";

type LayoutProps = {
  children: React.ReactNode;
};
const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="container">
      <Header />
      {children}
      <Footer />
    </div>
  );
};
export default Layout;
