import classes from "./Checkout.module.css";
import { useRef } from "react";

const Checkout = (props) => {
  const nameInputRef = useRef();
  const mobileInputRef = useRef();
  const cityInputRef = useRef();
  const streetInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredMobile = mobileInputRef.current.value;
    const enteredCity = cityInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
  };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={classes.control}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="mobile">Mobile Number</label>
        <input type="text" id="mobile" ref={mobileInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="Street">Address</label>
        <input type="text" id="Street" ref={streetInputRef} />
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
