import React from "react";
import { useState } from "react";

const CheckOut = () => {
  const [isShown, setIsShown] = useState(false);
  const handleClick = (event) => {
    // 👇️ toggle shown state
    setIsShown(true);
    console.log(true);
  };
  return (
    <div className="m-7">
      {isShown && (
        <div>
          <div className="bg-red-500 p-4 text-white">
            <div>
              <span className="font-bold">X Billing First name</span> is a
              required field.
            </div>
            <div>
              <span className="font-bold">X Billing Last name</span> is a
              required field.
            </div>
            <div>
              <span className="font-bold">X Billing Street address</span> is a
              required field.
            </div>
            <div>
              <span className="font-bold">X Billing Town / City</span> is a
              required field.
            </div>
            <div>
              <span className="font-bold">X Billing Postcode</span> is a
              required field.
            </div>
            <div>
              <span className="font-bold">X Billing Phone</span> is a required
              field.
            </div>
            <div>
              <span className="font-bold">X Billing Email address</span> is a
              required field.
            </div>
            <div>
              X No shipping method has been selected. Please double check your
              address, or contact us if you need any help.
            </div>
          </div>
        </div>
      )}
      <div className="m-5 w-45 h-50 p-4 box-border border-1 shadow-lg hover:bg-slate-100">
        <div className="p-3 text-center bg-orange-200">BILLING DETAILS:</div>
        <div className="m-2">
          First Name: <input type="text" className="border px-4"></input>
        </div>
        <div className="m-2">
          Last Name: <input type="text" className="border px-4"></input>
        </div>
        <div className="m-2">
          Address: <input type="text" className="border px-6"></input>
        </div>
        <div className="m-2">
          Email id: <input type="text" className="border px-6"></input>
        </div>
        <div className="text-center">
          <button
            type="button"
            className="bg-red-600 w-60 p-3 uppercase text-white rounded-3xl"
            onClick={handleClick}
          >
            place order
          </button>
        </div>
      </div>
    </div>
  );
};
export default CheckOut;
