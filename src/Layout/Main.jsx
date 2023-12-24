import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";
import TopBar from "../Pages/Shared/TopBar/TopBar";
import SortingBar from "../Pages/Shared/SortingBar/SortingBar";

const Main = () => {
  return (
    <div>
      <TopBar />
      <Navbar />
      <SortingBar />
      <Outlet></Outlet>
      <Footer />
    </div>
  );
};

export default Main;
