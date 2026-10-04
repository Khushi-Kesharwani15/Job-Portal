import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
function WebsiteLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
export default WebsiteLayout;
