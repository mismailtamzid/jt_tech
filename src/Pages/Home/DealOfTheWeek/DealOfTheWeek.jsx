import { MdArrowRightAlt } from "react-icons/md";

const DealOfTheWeek = () => {
  return (
    <>
      <div className="my-20">
        <div className="flex justify-between text-start">
          <div>
            <h2 className="font-sans text-3xl font-bold text-gray-900">
              Deal of the week{" "}
              <span className="text-sm font-normal bg-emerald-400 p-1 border">
                End in 1h50min
              </span>
            </h2>
            <p>Limited quantities available, shop now and save big! </p>
          </div>
          <div className="hidden md:flex items-center gap-2 text-xl text-black ">
            See all products <MdArrowRightAlt className="mt-1" />
          </div>
        </div>
        {/*---------cards---------*/}
        <div className=" flex-row md:grid md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="card bg-base-100 shadow-xl my-5">
            <figure className="px-10 pt-10">
              <img
                src="https://retech.remixtemplates.com/images/products/macbook-pro-13-2017-core-i5-8gb-sliver-main.jpg"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="body text-start text-gray-600">
              <p className="text-black font-semibold">
                MacBook Pro 13.3`&quot;` (Mid-2021)
              </p>
              <p>128GB-Space Gray</p>
              <p>Warranty:12 month</p>
              <br />
              <p>Starting at:</p>
              <p className="text-black font-semibold">$1,152.30</p>
              <progress
                className="progress progress-success "
                value="40"
                max="100"
              ></progress>
              <p>In stock: 625/1000</p>
            </div>
          </div>
          <div className="card bg-base-100 shadow-xl  my-5">
            <figure className="px-10 pt-10">
              <img
                src="https://retech.remixtemplates.com/images/products/macbook-pro-13-2017-core-i5-8gb-sliver-main.jpg"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="body text-start text-gray-600">
              <p className="text-black font-semibold">
                MacBook Pro 13.3`&quot;` (Mid-2021)
              </p>
              <p>128GB-Space Gray</p>
              <p>Warranty:12 month</p>
              <br />
              <p>Starting at:</p>
              <p className="text-black font-semibold">$1,152.30</p>
              <progress
                className="progress progress-success"
                value="40"
                max="100"
              ></progress>
              <p>In stock: 625/1000</p>
            </div>
          </div>
          <div className="card bg-base-100 shadow-xl  my-5">
            <figure className="px-10 pt-10">
              <img
                src="https://retech.remixtemplates.com/images/products/macbook-pro-13-2017-core-i5-8gb-sliver-main.jpg"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="body text-start text-gray-600">
              <p className="text-black font-semibold">
                MacBook Pro 13.3`&quot;` (Mid-2021)
              </p>
              <p>128GB-Space Gray</p>
              <p>Warranty:12 month</p>
              <br />
              <p>Starting at:</p>
              <p className="text-black font-semibold">$1,152.30</p>
              <progress
                className="progress progress-success"
                value="40"
                max="100"
              ></progress>
              <p>In stock: 625/1000</p>
            </div>
          </div>
          <div className="card bg-base-100 shadow-xl  my-5">
            <figure className="px-10 pt-10">
              <img
                src="https://retech.remixtemplates.com/images/products/macbook-pro-13-2017-core-i5-8gb-sliver-main.jpg"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="body text-start text-gray-600">
              <p className="text-black font-semibold">
                MacBook Pro 13.3`&quot;` (Mid-2021)
              </p>
              <p>128GB-Space Gray</p>
              <p>Warranty:12 month</p>
              <br />
              <p>Starting at:</p>
              <p className="text-black font-semibold">$1,152.30</p>
              <progress
                className="progress progress-success"
                value="40"
                max="100"
              ></progress>
              <p>In stock: 625/1000</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DealOfTheWeek;
