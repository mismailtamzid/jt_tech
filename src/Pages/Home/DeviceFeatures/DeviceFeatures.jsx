import { BsAwardFill } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import {
  TbBrandGoogleDrive,
  TbTruckDelivery,
  TbTruckReturn,
} from "react-icons/tb";

const DeviceFeatures = () => {
  return (
    <>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              Brand new
            </p>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20  text-emerald-400 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="18302e52-9e2a-4c8e-9550-0cbb21b38e55"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#18302e52-9e2a-4c8e-9550-0cbb21b38e55)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative">The</span>
            </span>{" "}
            device, You want. For a price you&apos;ll love.
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            Shop with confidence at our store, where you&apos;ll find affordable
            refurbished devices of exceptional quality.
          </p>
        </div>
        <div className="grid row-gap-8 sm:row-gap-0 sm:grid-cols-2 lg:grid-cols-3">
          <div className="p-8 border-b sm:border-r">
            <div className="max-w-md text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-16 sm:h-16">
                <TbTruckDelivery className="text-4xl text-emerald-400" />
              </div>
              <h6 className="mb-2 font-semibold leading-5">
                The Quick Delivery
              </h6>
              <p className="mb-3 text-sm text-gray-900">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium rem aperiam, eaque ipsa quae. Sit error voluptatem.
              </p>
            </div>
          </div>
          <div className="p-8 border-b lg:border-r">
            <div className="max-w-md text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-16 sm:h-16">
                <BsAwardFill className="text-4xl text-emerald-400" />
              </div>
              <h6 className="mb-2 font-semibold leading-5">
                Authentic Product
              </h6>
              <p className="mb-3 text-sm text-gray-900">
                Storage shed, troughs feed bale manure, is garden wheat oats at
                augers. Bulls at rose garden cucumbers mice sunflower wheat in
                pig.
              </p>
            </div>
          </div>
          <div className="p-8 border-b sm:border-r lg:border-r-0">
            <div className="max-w-md text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-16 sm:h-16">
                <BiSupport className="text-4xl text-emerald-400" />
              </div>
              <h6 className="mb-2 font-semibold leading-5">24 Hours Support</h6>
              <p className="mb-3 text-sm text-gray-900">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium rem aperiam, eaque ipsa quae. Sit error voluptatem.
              </p>
            </div>
          </div>
          <div className="p-8 border-b lg:border-b-0 lg:border-r">
            <div className="max-w-md text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-16 sm:h-16">
                <TbBrandGoogleDrive className="text-4xl text-emerald-400" />
              </div>
              <h6 className="mb-2 font-semibold leading-5">Brand Product</h6>
              <p className="mb-3 text-sm text-gray-900">
                Storage shed, troughs feed bale manure, is garden wheat oats at
                augers. Bulls at rose garden cucumbers mice sunflower wheat in
                pig.
              </p>
            </div>
          </div>
          <div className="p-8 border-b sm:border-b-0 sm:border-r">
            <div className="max-w-md text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-16 sm:h-16">
                <TbTruckReturn className="text-4xl text-emerald-400" />
              </div>
              <h6 className="mb-2 font-semibold leading-5">Easy Return</h6>
              <p className="mb-3 text-sm text-gray-900">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium rem aperiam, eaque ipsa quae. Sit error voluptatem.
              </p>
            </div>
          </div>
          <div className="p-8">
            <div className="max-w-md text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-16 sm:h-16">
                <svg
                  className="w-8 h-8  text-emerald-400 sm:w-12 sm:h-12"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
              <h6 className="mb-2 font-semibold leading-5">
                Money back warranty
              </h6>
              <p className="mb-3 text-sm text-gray-900">
                Storage shed, troughs feed bale manure, is garden wheat oats at
                augers. Bulls at rose garden cucumbers mice sunflower wheat in
                pig.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeviceFeatures;
