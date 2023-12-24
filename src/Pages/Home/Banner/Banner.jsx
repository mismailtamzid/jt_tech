import img1 from "../../../assets/banner/banner1.galaxys-22.png";
import img2 from "../../../assets/banner/banner2.apple-promo.png";
import img3 from "../../../assets/banner/banner3.gaming-promo.png";
import img4 from "../../../assets/banner/sm.banner.png";

const Banner = () => {
  return (
    <>
      <div className=" flex-row flex md:hidden">
        <img src={img4} className="w-full h-full" alt="" />
      </div>
      <div className=" flex-row hidden md:flex">
        <div className="basis-5/7 drop-shadow-md cursor-pointer">
          <img src={img1} className="w-full h-full" alt="" />
        </div>
        <div className="basis-2/">
          <div className="m-4">
            <img src={img2} alt="" className="drop-shadow cursor-pointer" />
          </div>
          <div className="m-4">
            <img src={img3} alt="" className="drop-shadow cursor-pointer" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
