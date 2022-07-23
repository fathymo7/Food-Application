import React from "react";
import classes from "./Checkout.module.css";

const Checkout = (props) => {
  const confirmHandler =   (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={confirmHandler}>
      <div className={classes.control}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" />
      </div>
      <div className={classes.control}>
        <label htmlFor="num">Number</label>
        <input type="number" id="num" />
      </div>
      <div className={classes.control}>
        <label htmlFor="street">Address</label>
        <input type="text" id="street" />
      </div>
      <button type="button" onClick={props.onCancel}>
        Cancel
      </button>
      <button>Confirm</button>
    </form>
  );
};
export default Checkout;
