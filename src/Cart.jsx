import thumbnail from "./images/image-product-1-thumbnail.jpg";
import deleteBtn from "./images/icon-delete.svg";
import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
const Cart = ({ cartNo, cartvisibility, emptyCart }) => {
  let [cartMsg, setCartMsg] = useState(
    "Your cart is empty, buy from us today!!😥"
  );

  const changeCartMsgEmpty = useEffect(() => {
    setTimeout(() => {
      setCartMsg("Your cart is empty buy from us today!!😥");
    }, 60000);
  }, [cartMsg]);

  return (
    <div
      className={`absolute w-full md:w-fit top-20 md:top-20 md:ml-[64vw] p-4 ${cartvisibility} z-20`}
    >
      <section
        className={`rounded-xl shadow-2xl md:shadow-xl z-[100] bg-white border  slide-down`}
      >
        <h2 className="ml-4 mt-4 font-bold">Cart</h2>
        <hr className="mt-4 mb-8" />

        {cartNo > 0 ? (
          <div className="flex gap-4 item-center mx-6">
            <div className="w-[40px]">
              <img src={thumbnail} alt="thumbnial" />
            </div>
            <div className="text-neutral-400">
              <p>Fall limited edition sneakers</p>
              <p>
                {`$125 x ${cartNo}`}
                <span className="ml-2 font-bold text-neutral-veryDarkBlue">
                  ${125 * cartNo}
                </span>
              </p>
            </div>
            <button
              className="flex items-center cursor-pointer"
              onClick={() => {
                let q = confirm("do youwant to empty your cart??");
                if (q) {
                  emptyCart();
                  localStorage.setItem("quantity", 0);
                  setCartMsg("Your cart is empty buy from us today!!😥");
                }
              }}
            >
              <img className="w-5 h-5" src={deleteBtn} alt="" />
            </button>
          </div>
        ) : (
          <div className="h-[100px] flex items-center justify-center  p-8">
            <p className="text-center"></p>
            <p className="text-center">{cartMsg || `oops`}</p>
          </div>
        )}
        {cartNo > 0 ? (
          <div
            onClick={() => {
              emptyCart();
              localStorage.setItem("quantity", 0);
              setCartMsg("Thank you for trusting Us");
              if (cartvisibility == "hidden") {
                changeCartMsgEmpty();
              }
            }}
            className="px-6 py-6"
          >
            <button className="bg-primary-orange hover:bg-primary-paleOrange w-full rounded-lg py-4 mt-2 ">
              Check Out
            </button>
          </div>
        ) : (
          <div></div>
        )}
      </section>
    </div>
  );
};

export default Cart;
