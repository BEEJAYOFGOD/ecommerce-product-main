/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

const ProductPage = (props) => {
  const [thumbIndex, setThumbIndex] = useState(0); // this is load variable associated with the product page
  const {
    thumbnails,
    productImages,
    changeIndex,
    changeModalVisibility,
    changeCartNo,
  } = props;

  const [quantity, setQuantity] = useState(0);

  const handleProductClick = (idx) => {
    changeIndex(idx);
    changeModalVisibility(true);
  };

  const handleThumbnailClick = (idx) => {
    setThumbIndex(idx);
  };

  const movetoNext = () => {
    setThumbIndex((index) =>
      index < productImages.length - 1 ? index + 1 : 0
    );
  };

  const moveToPrev = () => {
    setThumbIndex((index) =>
      index === 0 ? productImages.length - 1 : index - 1
    );
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const loadPage = () => {
    let storedQuantity = parseInt(localStorage.getItem("quantity"), 10);
    let updatedQuantity = storedQuantity ? storedQuantity - 1 : 0;

    setQuantity(updatedQuantity);
    changeCartNo(updatedQuantity);
  };

  useEffect(() => {
    window.addEventListener("load", () => {
      loadPage();
    });

    return () => {
      window.removeEventListener("load", loadPage);
    };
  }, [changeCartNo, loadPage, quantity]);

  const animateProcuctOnCLick = (idx) => {
    if (thumbIndex != idx) {
      document.querySelector("#productC").classList.add("spinAC");
      document.querySelector("#product_c_c").classList.add("scale-thru_slow");

      setTimeout(() => {
        document.querySelector("#productC").classList.remove("spinAC");
        document
          .querySelector("#product_c_c")
          .classList.remove("scale-thru_slow");
      }, 300);
    }
  };

  return (
    <>
      <section className="md:max-w-[1200px] md:px-12 px-4 w-full  flex flex-col md:flex-row items-center mx-auto md:gap-28 box-border">
        <div className="flex-1">
          <div id="product_c_c" className="relative">
            <div
              className="absolute bottom-1/2 top-[46%]  w-12 h-12 left-2 z-20 bg-white rounded-full p-4 flex justify-center items-center md:hidden cursor-pointer"
              onClick={() => {
                moveToPrev();
              }}
            >
              <svg
                className="stroke-neutral-900 md:stroke-red-500 group-hover:stroke-yellow-500 group-hover:-translate-x-[6px] transition duration-300"
                width="12"
                height="18"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 1 3 9l8 8"
                  strokeWidth="3"
                  fill="none"
                  fillRule="evenodd"
                />
              </svg>
            </div>

            <div
              id="productC"
              className="flex w-full cursor-pointer rounded-xl overflow-hidden"
            >
              {Array.isArray(productImages) &&
                productImages.map((imageUrl, idx) => (
                  <div
                    style={{
                      transform: `translateX(-${thumbIndex * 100}%)`,
                    }}
                    onClick={() => {
                      if (!window.matchMedia("(max-width: 740px)").matches) {
                        handleProductClick(idx);
                      }
                    }}
                    className="min-w-full rounded-xl transform duration-300 md:duration-0"
                    key={idx}
                  >
                    <img
                      className="w-full rounded-xl"
                      src={imageUrl}
                      alt={`productimage - ${idx}`}
                    />
                  </div>
                ))}
            </div>
            <div
              className="absolute bottom-1/2 top-[46%]  w-12 h-12 right-2 z-20 bg-white rounded-full p-4 flex justify-center items-center md:hidden cursor-pointer"
              onClick={() => {
                movetoNext();
              }}
            >
              <svg
                width="13"
                height="18"
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-neutral-950 md:stroke-red-500 group-hover:stroke-yellow-500 group-hover:translate-x-[6px] transition-all duration-300"
              >
                <path
                  d="m2 1 8 8-8 8"
                  strokeWidth="3"
                  fill="none"
                  fillRule="evenodd"
                />
              </svg>
            </div>
          </div>
          <div className={`hidden md:flex gap-2 mt-4`} id="thumbnails">
            {thumbnails.map((imageUrl, idx) => (
              <div
                onClick={() => {
                  handleThumbnailClick(idx);
                  animateProcuctOnCLick(idx);
                }}
                key={idx}
                className={`cursor-pointer relative hover:before:content-[''] hover:before:absolute hover:before:h-full hover:before:bg-white hover:before:w-full hover:before:opacity-60 hover:before:rounded-xl ${
                  idx == thumbIndex
                    ? `before:content-[''] before:absolute before:h-full before:bg-white before:w-full before:opacity-60 before:rounded-xl`
                    : ``
                }`}
              >
                <img
                  className={`rounded-xl ${
                    idx == thumbIndex ? `border-orange-600 border-4` : ``
                  }`}
                  src={imageUrl}
                  alt={`thumbnail - ${idx}`}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 ">
          <h2 className="text-orange-500 font-bold">SNEAKER COMPANY</h2>
          <h3 className="text-5xl font-bold">
            Fall Limited Edition <br /> Sneakers
          </h3>
          <p className="opacity-60 mt-10">
            These low-profile sneakers are your perfect casual wear companion
            Featuring a durable rubber outer sole, they&apos;ll withstand
            everything the weather can offer
          </p>
          <div id="pricing" className="flex justify-between mt-6 md:flex-col">
            <p className=" text-2xl font-bold ">
              $125.00
              <span className="bg-neutral-veryDarkBlue text-white py-1 px-2 rounded-md text-base">
                50%
              </span>
            </p>
            <p className="text-base text-neutral-500 font-bold line-through">
              $250.00
            </p>
          </div>
          {/* Updated price */}
          <div className="flex min-w-full gap-4 mt-8 flex-col md:flex-row">
            <div className="bg-neutral-200  rounded-md text-center flex justify-between items-center px-8 py-4 md:py-4">
              <button
                className="group"
                id="decrement"
                onClick={() => setQuantity(Math.max(0, quantity - 1))}
              >
                <svg
                  className="fill-primary-orange group-hover:fill-red-600"
                  width="12"
                  height="4"
                  xmlns="http://www.w3.org/2000/svg"
                  // eslint-disable-next-line react/no-unknown-property
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  <defs>
                    <path
                      d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z"
                      id="a"
                    />
                  </defs>
                  <use fill="#FF7E1B" fillRule="nonzero" xlinkHref="#a" />
                </svg>
              </button>
              <span>
                <input
                  min="1"
                  max="10"
                  className="text-center bg-neutral-200 outline-none scroll-m-0 font-bold text-neutral-veryDarkBlue"
                  type="number"
                  name={quantity}
                  value={quantity}
                  onChange={(e) => {
                    let inputQuantity = e.target.value;
                    if (inputQuantity === 0) {
                      setQuantity(0);
                    }
                    if (inputQuantity.substring(0, 1) == 0) {
                      inputQuantity = inputQuantity.slice(
                        1,
                        inputQuantity.length
                      );
                    }
                    inputQuantity > 0
                      ? setQuantity(inputQuantity)
                      : setQuantity(0);
                  }}
                  id=""
                />
              </span>
              <button
                id="increment"
                onClick={() => setQuantity(parseInt(quantity) + 1)}
              >
                <svg
                  className="fill-primary-orange"
                  width="12"
                  height="12"
                  xmlns="http://www.w3.org/2000/svg"
                  // eslint-disable-next-line react/no-unknown-property
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  <defs>
                    <path
                      d="M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z"
                      id="b"
                    />
                  </defs>
                  <use fill="" fillRule="nonzero" xlinkHref="#b" />
                </svg>
              </button>
            </div>
            <button
              onClick={() => {
                changeCartNo(quantity);
                localStorage.setItem("quantity", quantity + 1);
              }}
              className="bg-primary-orange hover:bg-opacity-50 basis-[65%] min-w-fit rounded-md py-4 flex items-center justify-center gap-4 mb-4 md:mb-0"
            >
              <span>
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
              </span>
              <span>Add to cart</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductPage;
