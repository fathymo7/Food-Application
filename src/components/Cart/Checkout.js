import React from "react";
import classes from "./Checkout.module.css";

const Checkout = (props) => {
  return (
    <form>
      <div className={classes.control}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" />
      </div>
      <div className={classes.control}>
        <label htmlFor="num">Your Number</label>
        <input type="number" id="num" />
      </div>
      <div className={classes.control}>
        <label htmlFor="street">Your Address</label>
        <input type="text" id="street" />
      </div>
      <button>Confirm</button>
    </form>
  );
};
export default Checkout;
