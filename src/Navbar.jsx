import avatarImage from "./images/image-avatar.png";
import mobileMenu from "./images/icon-menu.svg";
import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
const NavBar = ({ cartNo: cartNumber, toggleCartDisplay }) => {
  const [animate_pulse, setAnimatePulse] = useState("");
  /////////////////
  useEffect(() => {
    setAnimatePulse("animate-pulse");
    setTimeout(() => {
      setAnimatePulse("");
    }, 4000);
  }, [cartNumber]);

  return (
    // <div className="box-border">
    <nav className="flex w-screen  px-6 py-4 md:p-0  md:max-w-[1200px] justify-between h-full  md:mx-auto md:border-b-2 border-black border-opacity-20 box-border z-10">
      <div className="flex gap-2 md:gap-12 items-center">
        <div
          id="menuBtn"
          className="flex md:hidden"
          onClick={() => {
            let allLinks = document.querySelector("#linkContainer");
            let menuOverlay = document.querySelector("#menuOverlay");
            allLinks.classList.replace("hidden", "flex");
            menuOverlay.classList.replace("hidden", "flex");
          }}
        >
          <img src={mobileMenu} alt="" />
        </div>
        <h1 className="font-bold text-4xl">sneakers</h1>

        <div className="absolute top-0">
          <button
            id="closeBtn"
            className="w-[25vw] flex justify-end mb-4 group"
            onClick={() => {
              // showModal(false);
            }}
          >
            <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
              <path
                className="fill-black group-hover:fill-primary-orange "
                d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                fillRule="evenodd"
              />
            </svg>
          </button>

          <ul
            id="linkContainer"
            className="absolute top-0 left-0 z-50 w-[70%] hidden bg-white md:flex flex-col md:flex-row md:gap-8 gap-4 min-h-full md:items-center p-8 md:p-0"
          >
            <li className="nav-links">Collections</li>
            <li className="nav-links">Men</li>
            <li className="nav-links">Women</li>
            <li className="nav-links">About</li>
            <li className="nav-links">Contact</li>
          </ul>
        </div>

        <div
          id="menuOverlay"
          onClick={() => {
            let allLinks = document.querySelector("#linkContainer");
            let menuOverlay = document.querySelector("#menuOverlay");
            allLinks.classList.replace("flex", "hidden");
            menuOverlay.classList.replace("flex", "hidden");
          }}
          className="hidden bg-black w-[30%] opacity-70 absolute top-0 right-0 min-h-full z-50"
        >
          ade
        </div>
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
        <div className="hover:border-primary-orange hover:border-[3px]  rounded-full">
          <img className="w-12 " src={avatarImage} alt="avatar" />
        </div>
      </div>
    </nav>
    // </div>
  );
};

export default NavBar;
