import React from "react";
import "./Product.css";
import StarIcon from "@material-ui/icons/Star";
import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Product({ id, title, price, rating, image, isHideButton }) {
  const [{ basket, trade }, dispatch] = useStateValue();

  const addToBasket = () => {
    //Dispacth the item into the data layer so that it can be used by any pages.
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
    toast.success("Success add to cart !", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const onTrade = () => {
    dispatch({ type: "EMPTY_TRADE" });
    dispatch({
      type: "TRADE",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>RM</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, index) => (
              <StarIcon key={index} />
            ))}
        </div>
      </div>
      <img className="product__image" src={image} alt="Product Image" />
      {!isHideButton && (
        <>
          <button onClick={addToBasket}>Add to Cart</button>
          <ToastContainer style={{ top: "60px" }} />
          <Link to="/Trade">
            <button onClick={() => onTrade()}>Trade</button>
          </Link>
        </>
      )}
    </div>
  );
}

export default Product;
