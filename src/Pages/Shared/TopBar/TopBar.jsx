import { IoIosGlobe } from "react-icons/io";
import { IoCallOutline } from "react-icons/io5";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";

const TopBar = () => {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <IoIosGlobe /> BD <span className="mx-3">|</span> <IoCallOutline />{" "}
          +8801518455215
        </div>
        <div className="flex-none">
          <div className="md:flex items-center gap-3 hidden ">
            <p>FAQ</p>
            <p>Contact us</p>
            <p>About us</p>
            <p className="me-3">|</p>
          </div>
          <p className="flex gap-3">
            <FaWhatsapp />
            <FaFacebook />
          </p>
        </div>
      </div>
    </>
  );
};

export default TopBar;
