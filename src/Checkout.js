import React from "react";
import { useStateValue } from "./StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src={process.env.PUBLIC_URL + "/Do_It.png"}
          alt=""
        />
        {basket?.length === 0 ? (
          <div>
            <h3> Hello, {user?.email}</h3>
            <h2>Your  cart is empty</h2>
            <p>
              You have no item in your cart. To buy one or more items, click
              "Add to Cart" next to items
            </p>
          </div>
        ) : (
          <div>
            <h2 className="checkout__title">Your shopping Basket</h2>
            {basket?.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      {basket?.length > 0 && (
        <div className="checkout__right">
          <Subtotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;
