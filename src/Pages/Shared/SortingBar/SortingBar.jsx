import { BsSmartwatch } from "react-icons/bs";
import { GiSmartphone } from "react-icons/gi";
import { IoMdLaptop } from "react-icons/io";
import { SlEarphonesAlt } from "react-icons/sl";

const SortingBar = () => {
  return (
    <>
      <div className="flex gap-4 mt-2 my-10 whitespace-nowrap overflow-hidden text-ellipsis">
        <p className="flex items-center gap-2 cursor-pointer hover:text-emerald-400">
          <IoMdLaptop className="text-xl" /> Laptops
        </p>
        <p className="flex items-center gap-2 cursor-pointer hover:text-emerald-400">
          <GiSmartphone className="text-xl" /> SmartPhones
        </p>
        <p className="flex items-center gap-2 cursor-pointer hover:text-emerald-400">
          <BsSmartwatch className="text-xl" /> SmartWatches
        </p>
        <p className="flex items-center gap-2 cursor-pointer hover:text-emerald-400">
          <SlEarphonesAlt className="text-xl" /> Earphones
        </p>
        |<p className="cursor-pointer hover:text-emerald-400">iPhone</p>
        <p className="cursor-pointer hover:text-emerald-400">Samsung</p>
        <p className="cursor-pointer hover:text-emerald-400">Google Pixels</p>
        <p className="cursor-pointer hover:text-emerald-400">MacBook</p>
        <p className="cursor-pointer hover:text-emerald-400">Ipad</p>
        <p className="cursor-pointer hover:text-emerald-400">Apple Watch</p>
        <p className="cursor-pointer hover:text-emerald-400">iPhone 12</p>
        <p className="cursor-pointer hover:text-emerald-400">Windows Laptops</p>
        <p className="cursor-pointer hover:text-emerald-400">Macbook Pro</p>
      </div>
    </>
  );
};

export default SortingBar;
