/* eslint-disable react/prop-types */
import { useEffect } from "react";

const Modal = (props) => {
  const {
    modalVisibility,
    thumbnails,
    productImages,
    index: modeIndex,
    changeModalVisibility: showModal,
    changeIndex,
  } = props;

  const movetoNext = (modeIndex) => {
    modeIndex < productImages.length - 1
      ? changeIndex(modeIndex + 1)
      : changeIndex(0);
  };

  const moveToPrev = (modeIndex) => {
    modeIndex == 0
      ? changeIndex(productImages.length - 1)
      : changeIndex(modeIndex - 1);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        showModal(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [showModal]);

  return (
    <section
      id="modal"
      className={`bg-black bg-opacity-60 h-full absolute top-0 w-full flex-col justify-center items-center ${modalVisibility} scale-thru`}
    >
      <button
        id="closeBtn"
        className="w-[25vw] flex justify-end mb-4 group"
        onClick={() => {
          showModal(false);
        }}
      >
        <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
          <path
            className="fill-white group-hover:fill-primary-orange "
            d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
            fillRule="evenodd"
          />
        </svg>
      </button>
      <div id="productShowCase" className="flex justify-center items-center">
        <button
          onClick={() => {
            moveToPrev(modeIndex);
          }}
          className="bg-white p-4 rounded-full w-[50px] h-[50px] flex -mr-6 z-10 group"
        >
          <svg
            className="stroke-red-500 group-hover:stroke-yellow-500 group-hover:-translate-x-[6px] transition duration-300"
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
        </button>
        <div className={`w-[25vw] flex overflow-hidden rounded-xl`}>
          {Array.isArray(productImages) &&
            productImages.map((imageUrl, idx) => (
              <div
                className={`min-w-full`}
                key={idx}
                style={{
                  transform: `translateX(-${modeIndex * 100}%)`,
                  transition:
                    "transform 0.4s cubic-bezier(.74,.22,.16,1.07) 0.01s",
                }}
              >
                <img
                  className="w-full rounded-xl"
                  src={imageUrl}
                  alt={`productimage - ${idx}`}
                />
              </div>
            ))}
        </div>
        <button
          onClick={() => {
            movetoNext(modeIndex);
          }}
          className="bg-white p-4 rounded-full w-[50px] h-[50px]  flex -ml-6 z-10 group"
        >
          <svg
            width="13"
            height="18"
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-red-500 group-hover:stroke-yellow-500 group-hover:translate-x-[6px] transition-all duration-300"
          >
            <path
              d="m2 1 8 8-8 8"
              strokeWidth="3"
              fill="none"
              fillRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <div className="flex w-[20vw] gap-4 mt-4 ">
        {thumbnails.map((imageUrl, idx) => (
          <div
            onClick={() => {
              changeIndex(idx);
            }}
            key={idx}
            className={`relative rounded-xl cursor-pointer hover:before:content-[''] hover:before:absolute hover:before:h-full hover:before:bg-white hover:before:w-full hover:before:opacity-60 hover:before:rounded-xl
                ${
                  idx == modeIndex
                    ? `before:content-[''] before:absolute before:h-full before:bg-white before:w-full before:opacity-60 before:rounded-xl`
                    : ``
                }`}
          >
            <img
              className={`rounded-xl ${
                idx == modeIndex ? `border-orange-600 border-4` : ``
              }`}
              src={imageUrl}
              alt={`thumbnail - ${idx}`}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Modal;
