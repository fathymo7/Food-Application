import classes from "./Checkout.module.css";
import { useRef, useState } from "react";

const Checkout = (props) => {
  const [formInputValid, setFormInputValid] = useState({
    name: true,
    city: true,
    mobile: true,
    street: true,
  });

  const nameInputRef = useRef();
  const mobileInputRef = useRef();
  const cityInputRef = useRef();
  const streetInputRef = useRef();

  const isEmpty = (value) => value.trim() === "";

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredMobile = mobileInputRef.current.value;
    const enteredCity = cityInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredMobileIsValid = !isEmpty(enteredMobile);
    const enteredCityIsValid = !isEmpty(enteredCity);
    const enteredStreetIsValid = !isEmpty(enteredStreet);

    setFormInputValid({
      city: enteredCityIsValid,
      street: enteredStreetIsValid,
      name: enteredNameIsValid,
      mobile: enteredMobileIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredCityIsValid &&
      enteredMobileIsValid &&
      enteredStreetIsValid;

    if (!formIsValid) {
      return;
    }

    props.onSubmit({
      name: enteredName,
      city: enteredCity,
      street: enteredStreet,
      mobile: enteredMobile,
    });
  };

  const nameControlClass = `${classes.control} ${
    formInputValid.name ? "" : classes.invalid
  }`;
  const streetControlClass = `${classes.control} ${
    formInputValid.street ? "" : classes.invalid
  }`;
  const mobileControlClass = `${classes.control} ${
    formInputValid.mobile ? "" : classes.invalid
  }`;
  const cityControlClass = `${classes.control} ${
    formInputValid.city ? "" : classes.invalid
  }`;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameControlClass}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formInputValid.name && <p>Please enter a name</p>}
      </div>
      <div className={mobileControlClass}>
        <label htmlFor="mobile">Mobile Number</label>
        <input type="text" id="mobile" ref={mobileInputRef} />
        {!formInputValid.mobile && <p>Please enter a phone number</p>}
      </div>
      <div className={cityControlClass}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!formInputValid.city && <p>Please enter a city</p>}
      </div>
      <div className={streetControlClass}>
        <label htmlFor="Street">Address</label>
        <input type="text" id="Street" ref={streetInputRef} />
        {!formInputValid.street && <p>Please enter an address</p>}
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
