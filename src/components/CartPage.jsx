import { React, useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import DataContext from "./DataContext";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { DataSet, setDataSet } = useContext(DataContext);

  function handleMinus(id) {
    let index = DataSet.map((el) => {
      if (el.id === id) {
        el.count--;
        return el;
      } else {
        return el;
      }
    });
    setDataSet(index);
  }

  function handlePlus(id) {
    let index = DataSet.map((el) => {
      if (el.id === id) {
        el.count++;
        return el;
      } else {
        return el;
      }
    });
    setDataSet(index);
  }

  function handleCart(id) {
    let index = DataSet.map((el) => {
      if (el.id === id) {
        el.price;
        return el;
      }
    });
    setDataSet(index);
  }

  return (
    <div>
      <nav className="border-b fixed top-0 left-0 z-10 flex h-20 w-full items-center justify-center bg-gray-50 bg-opacity-50 backdrop-blur-lg lg:h-24">
        <div className="mx-auto h-5/6 w-11/12 xl:w-5/6">
          <div className="navbar px-0">
            <div className="navbar-start">
              <img
                width="119"
                height="30"
                src="https://demo-51.woovinapro.com/wp-content/uploads/2020/10/logo.png"
                alt="Demo 51 – WooVina Pro"
              ></img>
            </div>
            <label>
              <span>
                <input
                  type="text"
                  className="px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0 w-60 ml-20"
                  placeholder="Search Products. . ."
                />
              </span>
              <span>
                <button
                  type="button"
                  className="ml-5 bg-red-500 rounded-md text-white px-8 py-1.5"
                >
                  SEARCH
                </button>
              </span>
            </label>

            <div className="navbar-end">
              <button className="ml-20 border-2 p-3 mr-10 rounded-full border-gray-200">
                <span className="border border-1 rounded-full bg-red-300 p-2">
                  0
                </span>{" "}
                <FontAwesomeIcon icon={faShoppingBasket} />
              </button>
            </div>
          </div>
        </div>
      </nav>
      <main className="pt-[var(--header-height)]">
        <div className="p-4 bg-gray-300 mt-20 text-white text-2xl font-bold text-center">
          Shop Projects
        </div>

        <div>
          <table className="w-100">
            <tr>
              {DataSet.length > 0 ? (
                DataSet.map((card) => {
                  return (
                    <td>
                      <table className="table border w-60">
                        <tr className="bg-red-300">
                          <th className="b-0 p-3">PRODUCT</th>
                          <th className="b-0">PRICE</th>
                          <th className="b-0">QUANTITY</th>
                          <th className="b-0">SUBTOTAL</th>
                        </tr>
                        <tr>
                          <td className="p-3">{card.title}</td>
                          <td className="text-red-400">{card.price}</td>
                          <td>
                            <button
                              className="border btn btn-sm"
                              onClick={() => handleMinus(card.id)}
                            >
                              -
                            </button>
                            <button className="border btn btn-sm text-black">
                              {card.count}
                            </button>

                            <button
                              onClick={() => handlePlus(card.id)}
                              className="border btn btn-sm text-black"
                            >
                              +
                            </button>
                          </td>
                          <td className="text-red-400">
                            {card.price * card.count}
                          </td>
                        </tr>
                        <tr>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td>
                            <button
                              className="border btn btn-sm"
                              onClick={() => {
                                handleCart(card.id);
                              }}
                            >
                              update cart
                            </button>
                          </td>
                        </tr>
                      </table>
                    </td>
                  );
                })
              ) : (
                <div className="mt-6 font-bold">Your Card is Empty</div>
              )}

              <td>
                <table className="ml-3 border">
                  <tr className="bg-red-300">
                    <th className="p-4" colSpan="2">
                      CART TOTALS
                    </th>
                  </tr>
                  <tr>
                    <td className="p-4">$50.00</td>
                    <td>subtotal</td>
                  </tr>
                  <tr>
                    <td className="p-4">shipping</td>
                    <td>
                      {" "}
                      Enter Your Address To <br />
                      View Shipping Options.
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4">total</td>
                    <td>$151.00</td>
                  </tr>
                  <tr>
                    <td colSpan="2">
                      <Link
                        to="/checkout"
                        type="button"
                        className="p-3 bg-red-300"
                      >
                        PROCESS TO CHECKOUT
                      </Link>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </div>
      </main>
    </div>
  );
};
export default CartPage;
