import "./index.css";
import NavBar from "./Navbar";
import ProductPage from "./ProductPage";
import Modal from "./modal";
import Cart from "./Cart";
import { useState } from "react";
///////////////////////////////////////////////////////////////
import thumbnail_1 from "./images/image-product-1-thumbnail.jpg";
import thumbnail_2 from "./images/image-product-2-thumbnail.jpg";
import thumbnail_3 from "./images/image-product-3-thumbnail.jpg";
import thumbnail_4 from "./images/image-product-4-thumbnail.jpg";
///////////////////////////////////////////////////////////////
import productImage_1 from "./images/image-product-1.jpg";
import productImage_2 from "./images/image-product-2.jpg";
import productImage_3 from "./images/image-product-3.jpg";
import productImage_4 from "./images/image-product-4.jpg";
/////////////////////////////////////////////////////////////////

function App() {
  const thumbnails = [thumbnail_1, thumbnail_2, thumbnail_3, thumbnail_4];
  const productImages = [
    productImage_1,
    productImage_2,
    productImage_3,
    productImage_4,
  ];

  const [modalvisibility, setModalVisibility] = useState("hidden");
  const [index, setIndex] = useState(0);
  const [cartNo, setCartNo] = useState(0);
  const [cartVisible, setCartVisible] = useState("hidden");

  const changeModalVisibility = (showModal) => {
    showModal ? setModalVisibility("flex") : setModalVisibility("hidden");
  };

  const changeIndex = (newIndex) => {
    setIndex(newIndex);
  };

  const changeCartNo = (num) => {
    setCartNo(num);
  };

  const toggleCartDisplay = () => {
    if (cartVisible == "hidden") {
      setCartVisible("block");
    } else {
      setCartVisible("hidden");
    }
  };

  const emptyCart = () => {
    setCartNo(0);
  };

  return (
    <div id="app" className="min-h-screen relative font-kumbhSans">
      <NavBar cartNo={cartNo} toggleCartDisplay={toggleCartDisplay} />
      <main className="md:pt-14">
        <ProductPage
          thumbnails={thumbnails}
          productImages={productImages}
          changeIndex={changeIndex}
          changeModalVisibility={changeModalVisibility}
          changeCartNo={changeCartNo}
        />
        <Modal
          thumbnails={thumbnails}
          productImages={productImages}
          modalVisibility={modalvisibility}
          index={index}
          changeModalVisibility={changeModalVisibility}
          changeIndex={changeIndex}
        />
        <Cart
          cartNo={cartNo}
          cartvisibility={cartVisible}
          emptyCart={emptyCart}
        />
      </main>
    </div>
  );
}

export default App;
