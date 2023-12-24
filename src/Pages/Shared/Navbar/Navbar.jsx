import { BsPersonFill } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-white border-y-[1px]">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] pe-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <p className="flex items-center">
                  <FaShoppingCart className="me-2 text-2xl" />
                  <p>Cart</p>
                </p>
              </li>
              <li>
                <p className="flex items-center">
                  <BsPersonFill className="me-1 text-2xl" />
                  Account
                </p>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-right md:text-xl">JT_TECH</a>
        </div>
        <div className="navbar-center bg-base-200 hidden lg:flex rounded-full">
          <input
            className="w-full lg:w-[400px] border-none bg-transparent px-4 py-1 text-gray-400 outline-none focus:outline-none"
            type="search"
            name="search"
            placeholder="Are you Looking for an iPhone...?"
          />
          <button
            type="submit"
            className=" rounded bg-emerald-400 px-4 py-2 text-white rounded-r-full"
          >
            <svg
              className="fill-current h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              version="1.1"
              id="Capa_1"
              x="0px"
              y="0px"
              viewBox="0 0 56.966 56.966"
              style={{ enableBackground: "new 0 0 56.966 56.966" }}
              xmlSpace="preserve"
            >
              <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
            </svg>
          </button>
        </div>
        <div className="navbar-end flex items-center gap-5">
          <p className="hidden lg:flex items-center">
            <FaShoppingCart className="me-2 text-xl md:text-2xl" />
            <p>Cart</p>
          </p>
          <p className="hidden lg:flex items-center">
            <BsPersonFill className="me-1 text-xl md:text-2xl" />
            Account
          </p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
