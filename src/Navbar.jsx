import avatarImage from "./images/image-avatar.png";
import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
const NavBar = ({ cartNo: cartNumber, toggleCartDisplay }) => {
  const [animate_pulse, setAnimatePulse] = useState("");
  useEffect(() => {
    setAnimatePulse("animate-pulse");
    setTimeout(() => {
      setAnimatePulse("");
    }, 4000);
  }, [cartNumber]);

  return (
    // <div className="box-border">
    <nav className="flex max-w-[1200px] justify-between h-full  mx-auto border-b-2 border-black border-opacity-20 box-border z-10">
      <div className="flex gap-12 items-center ">
        <h1 className="font-bold text-4xl">sneakers</h1>
        <ul className="flex gap-8 min-h-full items-center  relative ">
          <li className="hover-effect">Collections</li>
          <li className="hover-effect">Men</li>
          <li className="hover-effect">Women</li>
          <li className="hover-effect">About</li>
          <li className="hover-effect">Contact</li>
        </ul>
      </div>
      <div className="flex items-center gap-6">
        <div
          onClick={() => {
            toggleCartDisplay();
          }}
          className={`relative cursor-pointer ${animate_pulse}`}
        >
          <span
            className={`absolute flex justify-center items-center -right-6 -top-3  z-10 bg-primary-orange h-fit w-[20px] px-5  rounded-full ${
              cartNumber > 0 ? `animate-bounce` : ``
            }`}
          >
            {cartNumber}
          </span>
          <svg
            className="fill-black"
            width="22"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
              fillRule="nonzero"
            />
          </svg>
        </div>
        <div className="hover:border-primary-orange hover:border-[3px]  hover:transition-all hover:ease-out ease-in duration-100 hover:duration-[0.3s] rounded-full">
          <img className="w-12 " src={avatarImage} alt="avatar" />
        </div>
      </div>
    </nav>
    // </div>
  );
};

export default NavBar;
