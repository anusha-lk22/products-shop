import { React, useContext } from "react";
import DataContext from "./DataContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";

const SingleCart = () => {
  const { DataSet, setDataSet } = useContext(DataContext);
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
        <div className="p-4 bg-gray-400 mt-20 text-white text-2xl font-bold text-center">
          Title
        </div>

        <table className="table">
          <tbody>
            <tr>
              <td>
                <div className="p-5">image</div>
              </td>
              <td>
                <div className="">
                  TW x TLNSG - Sleepless City
                  <br />
                  $18.00 - $23.00
                  <br />
                  97% Cotton, 3% Spandex
                  <br />
                  Imported
                  <br />
                  Button closure
                  <br />
                  Tumble dry low
                  <br />
                  Solid Material, High Quality Long Sleeve Dress Shirt: Our
                  solid shirt is made from High Grade 97% Cotton 3%spandex,Good
                  capability of tenderness, air permeability feels soft and
                  comfy, solid enough and it is hard to beat.
                  <br />
                  Feature: Accurate Size,Stylish and appealing: Our mens dress
                  shirts are made based on USA button down regular fit long
                  sleeve casual dress shirt size, Spread collar, buttoned cuffs,
                  fits true to size. You can also refer to our size chart on
                  pictures and details.
                  <br />
                  Good quality construction, Easy care: This dress shirt is
                  nicely stitched and detailed, not a lot of hanging threads,
                  and it can be Hand wash or machine wash cold, hold up well
                  after washing.Do not bleach,Tumble dry low,Low iron if
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </main>
    </div>
  );
};
export default SingleCart;
