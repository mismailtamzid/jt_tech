import { GiSmartphone } from "react-icons/gi";
import { IoMdLaptop } from "react-icons/io";
import { BsSmartwatch } from "react-icons/bs";
import { SlEarphonesAlt } from "react-icons/sl";

const Categories = () => {
  return (
    <>
      <div className="my-20">
        <div className="flex justify-between text-start my-5">
          <div>
            <h2 className="font-sans text-3xl font-bold text-gray-900">
              Our Categories
            </h2>
            <p>Our most popular categories</p>
          </div>
        </div>
        {/*---------cards---------*/}
        <div className=" flex-row md:grid md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="flex max-w-md bg-white shadow-lg rounded-lg items-center px-2 my-3">
            <div className=" p-4 text-container">
              <IoMdLaptop className="text-8xl mx-auto mb-1" />
              <h2 className="text-gray-900 font-bold text-2xl">Laptops</h2>
              <p className="text-gray-400">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas,
                nobis.
              </p>
            </div>
          </div>
          <div className="flex max-w-md bg-white shadow-lg rounded-lg items-center px-2 my-3">
            <div className=" p-4 text-container">
              <GiSmartphone className="text-8xl mx-auto mb-1" />
              <h2 className="text-gray-900 font-bold text-2xl">SmartPhones</h2>
              <p className="text-gray-400">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas,
                nobis.
              </p>
            </div>
          </div>
          <div className="flex max-w-md bg-white shadow-lg rounded-lg items-center px-2 my-3">
            <div className=" p-4 text-container">
              <BsSmartwatch className="text-8xl mx-auto  mb-1" />
              <h2 className="text-gray-900 font-bold text-2xl">SmartWatches</h2>
              <p className="text-gray-400">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas,
                nobis.
              </p>
            </div>
          </div>
          <div className="flex max-w-md bg-white shadow-lg rounded-lg items-center px-2 my-3">
            <div className=" p-4 text-container">
              <SlEarphonesAlt className="text-8xl mx-auto mb-1" />
              <h2 className="text-gray-900 font-bold text-2xl">Earphones</h2>
              <p className="text-gray-400">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas,
                nobis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
