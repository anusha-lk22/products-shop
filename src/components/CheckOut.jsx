import React from "react";
import { useState } from "react";
import {Link} from "react-router-dom"
const CheckOut = () => {
  const [isShow, setIsShow] = useState(false);
  const [isShown, setIsShown] = useState(false);
  const [isShownn, setIsShownn] = useState(false);
  const handleClick = (event) => {
    setIsShow(true);
    console.log(true);
  };

  const handleCheck = (event) => {
    setIsShown(true);
      };
      const handleCheck1 = (event) => {
        setIsShownn(true);
          };

  return (
    <div>
      <nav className="border-b pb-10 fixed top-0 left-0 z-10 flex h-12 w-full items-center justify-center bg-white">
        <div className="mx-auto h-5/6 w-11/12 xl:w-5/6">
          <div className="navbar px-0">
            <div className="navbar-start">
              <div className="flex flex-row flex-wrap gap-4">
                <svg width="1em" height="1em" viewBox="0 0 16 16">
                  <path
                    fill="currentColor"
                    d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334c0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518a3.301 3.301 0 0 0 1.447-1.817a6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429a3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218a3.203 3.203 0 0 1-.865.115a3.23 3.23 0 0 1-.614-.057a3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"
                  ></path>
                </svg>
                <svg width="1em" height="1em" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2.01h-2l-.396 3.98h2.396v8.01Z"
                  ></path>
                </svg>
                <svg width="1.25em" height="1em" viewBox="0 0 640 512">
                  <path
                    fill="currentColor"
                    d="M386.061 228.496c1.834 9.692 3.143 19.384 3.143 31.956C389.204 370.205 315.599 448 204.8 448c-106.084 0-192-85.915-192-192s85.916-192 192-192c51.864 0 95.083 18.859 128.611 50.292l-52.126 50.03c-14.145-13.621-39.028-29.599-76.485-29.599c-65.484 0-118.92 54.221-118.92 121.277c0 67.056 53.436 121.277 118.92 121.277c75.961 0 104.513-54.745 108.965-82.773H204.8v-66.009h181.261zm185.406 6.437V179.2h-56.001v55.733h-55.733v56.001h55.733v55.733h56.001v-55.733H627.2v-56.001h-55.733z"
                  ></path>
                </svg>
                <svg width="0.75em" height="1em" viewBox="0 0 384 512">
                  <path
                    fill="currentColor"
                    d="M204 6.5C101.4 6.5 0 74.9 0 185.6C0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4c0-9.3-23.7-29.1-23.7-67.8c0-80.4 61.2-137.4 140.4-137.4c68.1 0 118.5 38.7 118.5 109.8c0 53.1-21.3 152.7-90.3 152.7c-24.9 0-46.2-18-46.2-43.8c0-37.8 26.4-74.4 26.4-113.4c0-66.2-93.9-54.2-93.9 25.8c0 16.8 2.1 35.4 9.6 50.7c-13.8 59.4-42 147.9-42 209.1c0 18.9 2.7 37.5 4.5 56.4c3.4 3.8 1.7 3.4 6.9 1.5c50.4-69 48.6-82.5 71.4-172.8c12.3 23.4 44.1 36 69.3 36c106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z"
                  ></path>
                </svg>
                <svg width="1em" height="1em" viewBox="0 0 15 15">
                  <path
                    fill="none"
                    stroke="currentColor"
                    d="M11 3.5h1M4.5.5h6a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4h-6a4 4 0 0 1-4-4v-6a4 4 0 0 1 4-4Zm3 10a3 3 0 1 1 0-6a3 3 0 0 1 0 6Z"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="navbar-end hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
                <li tabIndex={0}>
                  <a className="hover:bg-white hover:text-red-500">
                    Language
                    <svg
                      className="fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                    </svg>
                  </a>
                  <ul className="p-2 z-30 bg-white border-t-2 border-red-500">
                    <li>
                      <a>English</a>
                    </li>
                    <li>
                      <a>French</a>
                    </li>
                  </ul>
                </li>
                <li tabIndex={0}>
                  <a className="hover:bg-white hover:text-red-500">
                    Currency
                    <svg
                      className="fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                    </svg>
                  </a>
                  <ul className="p-2 z-30 bg-white border-t-2 border-red-500">
                    <li>
                      <a>USD</a>
                    </li>
                    <li>
                      <a>EUR</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <nav className="border-b left-0 fixed top-0 flex h-20 w-full mt-12 items-center justify-center bg-white">
        <div className="mx-auto h-5/6 w-11/12 xl:w-5/6">
          <div className="navbar px-0">
            <div className="navbar-start w-auto">
              <div className="flex flex-row flex-wrap">
                <img
                  width="119"
                  height="30"
                  src="https://demo-51.woovinapro.com/wp-content/uploads/2020/10/logo.png"
                  alt="Demo 51 ??? WooVina Pro"
                ></img>

                <svg
                  className="text-4xl ml-7 p-1 border-2"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="2"
                    d="M5 6h14M5 12h14M5 18h14"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="navbar-center">
              <label className="ml-10">
                <span>
                  <input
                    type="text"
                    className="px-1
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0 w-72 ml-20"
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
            </div>

            <div className="navbar-end w-auto">
              <div className="flex flex-row flex-wrap">
                <button className="ml-20 border-2 p-2 rounded-full border-gray-200">
                  <div className="flex flex-row flex-wrap">
                    <span className="border border-1 rounded-full bg-red-500 px-1 text-white">
                      0
                    </span>{" "}
                    <svg
                      className="text-2xl"
                      width="1em"
                      height="1em"
                      viewBox="0 0 36 36"
                    >
                      <path
                        fill="currentColor"
                        d="M32.84 15.72a1 1 0 1 0-2 .29a13.15 13.15 0 0 1 .16 1.93A13 13 0 0 1 8.7 27h5.36a1 1 0 0 0 0-2h-9v9a1 1 0 1 0 2 0v-5.8a15 15 0 0 0 25.78-12.48Z"
                        className="clr-i-outline clr-i-outline-path-1"
                      ></path>
                      <path
                        fill="currentColor"
                        d="M30.06 1A1.05 1.05 0 0 0 29 2v5.83A14.94 14.94 0 0 0 3 17.94a15.16 15.16 0 0 0 .2 2.48a1 1 0 0 0 1 .84h.16a1 1 0 0 0 .82-1.15A13.23 13.23 0 0 1 5 17.94a13 13 0 0 1 13-13A12.87 12.87 0 0 1 27.44 9h-5.38a1 1 0 0 0 0 2H31V2a1 1 0 0 0-.94-1Z"
                        className="clr-i-outline clr-i-outline-path-2"
                      ></path>
                      <path fill="none" d="M0 0h36v36H0z"></path>
                    </svg>
                  </div>
                </button>
                <button className="ml-4 border-2 p-2 rounded-full border-gray-200">
                  <div className="flex flex-row flex-wrap">
                    <span className="border border-1 rounded-full bg-red-500 px-1 text-white">
                      0
                    </span>{" "}
                    <svg
                      className="text-2xl"
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="currentColor"
                        d="m8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385c.92 1.815 2.834 3.989 6.286 6.357c3.452-2.368 5.365-4.542 6.286-6.357c.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"
                      ></path>
                    </svg>
                  </div>
                </button>

                <button className="ml-4 border-2 p-2 rounded-full border-gray-200">
                  <div className="flex flex-row flex-wrap">
                    <span className="border border-1 rounded-full bg-red-500 px-1 text-white">
                      0
                    </span>{" "}
                    <svg
                      className="text-2xl"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M19.5 8.25h-3v-.5a4.5 4.5 0 0 0-9 0v.5h-3A1.25 1.25 0 0 0 3.25 9.5V18A2.75 2.75 0 0 0 6 20.75h12A2.75 2.75 0 0 0 20.75 18V9.5a1.25 1.25 0 0 0-1.25-1.25ZM9 7.75a3 3 0 0 1 6 0v.5H9ZM19.25 18A1.25 1.25 0 0 1 18 19.25H6A1.25 1.25 0 0 1 4.75 18V9.75H7.5V12A.75.75 0 0 0 9 12V9.75h6V12a.75.75 0 0 0 1.5 0V9.75h2.75Z"
                      ></path>
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <nav className="border-b border-t left-0 fixed top-1 flex h-20 w-full mt-28 items-center justify-center bg-white">
        <div className="mx-auto h-5/6 w-11/12 xl:w-5/6">
          <div className="navbar px-0">
            <div className="navbar-start w-auto hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
                <li>
                  <a className="hover:bg-white hover:text-red-500">Home</a>
                </li>
                <li tabIndex={0}>
                  <a className="hover:bg-white hover:text-red-500">
                    Shop
                    <svg
                      className="fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                    </svg>
                  </a>
                  <ul className="p-2 z-30 bg-white border-t-2 border-red-500">
                    <li>
                      <a>
                        <ul>
                          <li>
                            <a className="font-bold hover:text-red-500">
                              SHOP LAYOUT
                            </a>
                          </li>
                          <li>
                            <a className=" hover:bg-white hover:text-red-500">
                              Shop Left Sidebar
                            </a>
                          </li>
                          <li>
                            <a className=" hover:bg-white hover:text-red-500">
                              Shop Right Sidebar
                            </a>
                          </li>
                          <li>
                            <a className=" hover:bg-white hover:text-red-500">
                              Shop Full Width
                            </a>
                          </li>
                          <li>
                            <a className=" hover:bg-white hover:text-red-500">
                              Shop Both Sidebars
                            </a>
                          </li>
                        </ul>
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a className="hover:bg-white hover:text-red-500">Blog</a>
                </li>

                <li tabIndex={0}>
                  <a className="hover:bg-white hover:text-red-500">
                    Pages
                    <svg
                      className="fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                    </svg>
                  </a>
                  <ul className="p-2 z-30 bg-white border-t-2 border-red-500">
                    <li>
                      <a className=" hover:bg-white hover:text-red-500">
                        Frequently Questions
                      </a>
                    </li>
                    <li>
                      <a className=" hover:bg-white hover:text-red-500">
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a className=" hover:bg-white hover:text-red-500">
                        Error 404
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a className="hover:bg-white hover:text-red-500">About Us</a>
                </li>
                <li>
                  <a className="hover:bg-white hover:text-red-500">
                    Contact Us
                  </a>
                </li>
                <li tabIndex={0}>
                  <a className="hover:bg-white hover:text-red-500">
                    Vendor Zone
                    <svg
                      className="fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                    </svg>
                  </a>
                  <ul className="p-2 z-30 bg-white border-t-2 border-red-500">
                    <li>
                      <a className=" hover:bg-white hover:text-red-500">
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a className=" hover:bg-white hover:text-red-500">
                        Store List
                      </a>
                    </li>
                    <li>
                      <a className=" hover:bg-white hover:text-red-500">
                        My Orders
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="navbar-end w-auto hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
                <li>
                  <a className="hover:bg-white hover:text-red-500">
                    <svg
                      className="text-red-500 font-bold text-2xl"
                      width="1em"
                      height="1em"
                      viewBox="0 0 15 15"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        d="M12.5 12.5a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1Zm0 0a2 2 0 0 1-2 2H8m6.5-4.5V7.5a7 7 0 1 0-14 0V10m2 2.5a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2Z"
                      ></path>
                    </svg>
                  </a>
                </li>
                <li>
                  Hotline
                  <br />
                  706-676-8237
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-[var(--header-height)]">
  <div className="bg-gray-100">
          <div className="bg-[url('https://demo-51.woovinapro.com/wp-content/uploads/2020/11/bk-title-header.jpg')] h-72">
            <div className="p-28 mt-48 text-white text-6xl text-center">
              Checkout
            </div>
          </div>
          <div className="m-10">
            {isShow && (
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
                    <span className="font-bold">X Billing Street address</span>{" "}
                    is a required field.
                  </div>
                  <div>
                    <span className="font-bold">X Billing Town / City</span> is
                    a required field.
                  </div>
                  <div>
                    <span className="font-bold">X Billing Postcode</span> is a
                    required field.
                  </div>
                  <div>
                    <span className="font-bold">X Billing Phone</span> is a
                    required field.
                  </div>
                  <div>
                    <span className="font-bold">X Billing Email address</span>{" "}
                    is a required field.
                  </div>
                  <div>
                    X No shipping method has been selected. Please double check
                    your address, or contact us if you need any help.
                  </div>
                </div>
              </div>
            )}

            <div className="grid grid-cols-2 gap-4">
            <div>
              
              <div className="border bg-white p-3">
<div className="m-4 flex flex-row font-bold gap-44 flex-wrap border-b pb-2">
                <div className="w-30">BILLING DETAILS</div>
                <div className="w-70">
                  Returning Customer? <span className="text-red-600">Click Here To Login</span>
                </div>
                </div>
                <div className="grid grid-cols-2 p-4 gap-3">
              
                <label>
                  First name <span className="text-red-500">*</span>
                </label>
                <label>
                  Last name <span className="text-red-500">*</span>
                </label>
                
    <input type="text" className="block w-full px-3 py-2 text-base font-normal text-gray-500 bg-gray-100 border border-solid border-gray-300 rounded
        transition ease-in-out m-0 focus:outline-none focus:border-gray-200"/>
             <input type="text" className="block w-full px-3 py-2 text-base font-normal text-gray-500 bg-gray-100 border border-solid border-gray-300 rounded
        transition ease-in-out m-0 focus:outline-none focus:border-gray-200"/>
          
                <div> Company name (optional)</div>

                <div>
                  Country / Region <span className="text-red-500">*</span>
                </div>
                   
          <input type="text" className="block w-full px-3 py-2 text-base font-normal text-gray-500 bg-gray-100 border border-solid border-gray-300 rounded
        transition ease-in-out m-0 focus:outline-none focus:border-gray-200"/>
        <select className="bg-gray-100 border outline-none focus:border-gray-300" name="cars" id="cars">
    <option value="volvo" className="">India</option>
    <option value="saab">United States (US)</option>
    <option value="opel">Islands</option>
    <option value="audi">Uruguay</option>
  </select>
          <div>
                  Street address <span className="text-red-500">*</span>
                </div>

                <div></div>
                <input type="text" className="block w-full px-3 py-2 text-base font-normal text-gray-500 bg-gray-100 border border-solid border-gray-300 rounded
        transition ease-in-out m-0 focus:outline-none focus:border-gray-200" placeholder="House number and street name"/>
          
          <input type="text" className="block w-full px-3 py-2 text-base font-normal text-gray-500 bg-gray-100 border border-solid border-gray-300 rounded
        transition ease-in-out m-0 focus:outline-none focus:border-gray-200" placeholder="Apartment, suite, unit, etc. (optional)"/>
          
                <div>
                  Town / City <span className="text-red-500">*</span>
                </div>

                <div>
                  State <span className="text-red-500">*</span>
                </div>
               
          
          <input type="text" className="block w-full px-3 py-2 text-base font-normal text-gray-500 bg-gray-100 border border-solid border-gray-300 rounded
        transition ease-in-out m-0 focus:outline-none focus:border-gray-200"/>
        
      <select className="bg-gray-100 border outline-none focus:border-gray-300" name="cars" id="cars">
    <option value="volvo">California</option>
    <option value="saab">Arizona</option>
    <option value="opel">Alaska</option>
    <option value="audi">Arkansas</option>
  </select>
          <div>
                  Zip Code <span className="text-red-500">*</span>
                </div>

                <div>
                  Phone <span className="text-red-500">*</span>
                </div>
                <input type="text" className="block w-full px-3 py-2 text-base font-normal text-gray-500 bg-gray-100 border border-solid border-gray-300 rounded
        transition ease-in-out m-0 focus:outline-none focus:border-gray-200"/>
          <input type="text" className="block w-full px-3 py-2 text-base font-normal text-gray-500 bg-gray-100 border border-solid border-gray-300 rounded
        transition ease-in-out m-0 focus:outline-none focus:border-gray-200"/>
          
                <div>
                  Email address <span className="text-red-500">*</span>
                </div>
                <div></div>
                <input type="text" className="col-span-2 block w-full px-3 py-2 text-base font-normal text-gray-500 bg-gray-100 border border-solid border-gray-300 rounded
        transition ease-in-out m-0 focus:outline-none focus:border-gray-200"/>
       
       
              <div>Create an account?<input className="ml-3" type="checkbox" onClick={handleCheck}></input></div>
         <div></div>
         {isShown ? (
          <>              <div className="">Create account password <span className="text-red-500">*</span></div>
              <input type="text" className="col-span-2 block w-full px-3 py-2 text-base font-normal text-gray-500 bg-gray-100 border border-solid border-gray-300 rounded
        transition ease-in-out m-0 focus:outline-none focus:border-gray-200" placeholder="Password"/></>
         ): ""}

</div>
<div className="m-4 flex flex-row flex-wrap border-b pb-2">
                <div className="w-72 font-bold">SHIP TO A DIFFERENT ADDRESS?</div>
                <input className="self-end" type="checkbox" onClick={handleCheck1}></input>
                </div>
               <div className="grid grid-cols-2 p-4 gap-3">
               {isShownn ? 
                (<><label>
                  First name <span className="text-red-500">*</span>
                </label>
                <label>
                  Last name <span className="text-red-500">*</span>
                </label>
                
    <input type="text" className="block w-full px-3 py-2 text-base font-normal text-gray-500 bg-gray-100 border border-solid border-gray-300 rounded
        transition ease-in-out m-0 focus:outline-none focus:border-gray-200"/>
             <input type="text" className="block w-full px-3 py-2 text-base font-normal text-gray-500 bg-gray-100 border border-solid border-gray-300 rounded
        transition ease-in-out m-0 focus:outline-none focus:border-gray-200"/>
          
                <div> Company name (optional)</div>

                <div>
                  Country / Region <span className="text-red-500">*</span>
                </div>
                   
          <input type="text" className="block w-full px-3 py-2 text-base font-normal text-gray-500 bg-gray-100 border border-solid border-gray-300 rounded
        transition ease-in-out m-0 focus:outline-none focus:border-gray-200"/>
        <select className="bg-gray-100 border outline-none focus:border-gray-300" name="cars" id="cars">
    <option value="volvo" className="">India</option>
    <option value="saab">United States (US)</option>
    <option value="opel">Islands</option>
    <option value="audi">Uruguay</option>
  </select>
          <div>
                  Street address <span className="text-red-500">*</span>
                </div>

                <div></div>
                <input type="text" className="block w-full px-3 py-2 text-base font-normal text-gray-500 bg-gray-100 border border-solid border-gray-300 rounded
        transition ease-in-out m-0 focus:outline-none focus:border-gray-200" placeholder="House number and street name"/>
          
          <input type="text" className="block w-full px-3 py-2 text-base font-normal text-gray-500 bg-gray-100 border border-solid border-gray-300 rounded
        transition ease-in-out m-0 focus:outline-none focus:border-gray-200" placeholder="Apartment, suite, unit, etc. (optional)"/>
          
                <div>
                  Town / City <span className="text-red-500">*</span>
                </div>

                <div>
                  State <span className="text-red-500">*</span>
                </div>
               
          
          <input type="text" className="block w-full px-3 py-2 text-base font-normal text-gray-500 bg-gray-100 border border-solid border-gray-300 rounded
        transition ease-in-out m-0 focus:outline-none focus:border-gray-200"/>
        
      <select className="bg-gray-100 border outline-none focus:border-gray-300" name="cars" id="cars">
    <option value="volvo">California</option>
    <option value="saab">Arizona</option>
    <option value="opel">Alaska</option>
    <option value="audi">Arkansas</option>
  </select>
          <div>
                  Zip Code <span className="text-red-500">*</span>
                </div>

                <div>
                 
                </div>
                <input type="text" className="col-span-2 block w-full px-3 py-2 text-base font-normal text-gray-500 bg-gray-100 border border-solid border-gray-300 rounded
        transition ease-in-out m-0 focus:outline-none focus:border-gray-200"/>
        </>) : ""}

<div className="col-span-2">Order notes (optional)</div>
        <textarea
      className="col-span-2 w-fullpx-3 p-2 text-base font-normal text-gray-500 border border-solid border-gray-300 rounded transition ease-in-out m-0
        focus:text-gray-500 focus:outline-none bg-gray-100"
           rows="5"
      placeholder="Notes about your order, e.g. special notes for delivery."
            ></textarea>  
</div>

              </div>
              </div>
              <div>
            
              <div className="border bg-white py-3 px-5">
              <div className="m-4 flex font-bold flex-row gap-24 flex-wrap border-b pb-2">
                <div className="w-30">YOUR ORDER</div>
                <div className="w-70">
                Have A Coupon?<span className="text-red-600"> Click Here To Enter Your Code</span>
                </div>
                </div>
                <div className="grid grid-cols-2 bg-gray-100 border-b">
                                <div className="border-r border-b p-3">PRODUCT</div>
              <div className="text-right border-b p-3">SUBTOTAL</div>
<div className="border-r border-b p-3">My Mother Doesn't Want Me Play With You T-Shirt x 1<br/><span className="font-bold"> Vendor:</span></div>
<div className="text-red-500 border-b text-right p-3">$82.00</div>
<div className="border-r border-b p-3">TW Sandals Ver.01 x 2<br/><span className="font-bold"> Vendor:</span></div>
<div className="text-red-500 text-right border-b p-3">$138.00</div>
<div className="font-bold border-r border-b p-3">Subtotal</div>
<div className="text-red-500 text-right border-b p-3">$220.00</div>
<div className="font-bold border-r border-b p-3">Shipping</div>
<div className="text-red-500 text-right border-b p-3">Enter Your Address To View Shipping Options.</div>
<div className="font-bold border-r border-b p-3">Total</div>
<div className="text-red-500 text-right border-b p-3">$220.00</div>
              </div>
             <div className="bg-gray-100 p-3 mt-5">
             <input type="radio" className="w-4 h-4" /><label className="ml-3 font-bold text-gray-400">Cash on delivery</label>
              <div className="bg-white p-3 mt-3">Pay with cash upon delivery.</div>
            
              <img src="https://www.paypalobjects.com/webstatic/mktg/Logo/AM_mc_vs_ms_ae_UK.png" className="mt-2 float-right w-30 h-10"></img>
              <input type="radio" className="mt-3 w-4 h-4" />
              <label className="ml-3 font-bold"><span className="text-gray-400">Paypal</span> What is Paypal?</label>
              
              

<div className="bg-white p-3 mt-3">Pay via PayPal; you can pay with your credit card if you don&apos;t have a PayPal account.</div>
              </div> 

             <div className="mt-3"> Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.</div>
             <button
            type="button"
            className="bg-red-600 mt-3 p-3 w-full uppercase font-bold text-white rounded-full"
            onClick={handleClick}
          >
            proceed to paypal
          </button>
            </div>
            </div>
            
            </div>
          </div>
      
          <div className="bg-gray-600 p-4 mt-16 text-white">
<div className="flex flex-row flex-wrap p-10 mt-10 text-white gap-36">
  <div className="w-2/6">
  <img
                width="119"
                height="30"
                src="https://demo-51.woovinapro.com/wp-content/uploads/2019/10/logo_Aden_2.png"
                alt="Demo 51 - WooVina Pro"
              ></img>
  <p className="mt-2">We are a team of designers and developers that create high quality WordPress, Magento, Prestashop, Opencart theme</p>
  <p className="font-bold mt-4 mb-3 text-lg">Payment</p>
  <img src="https://demo-51.woovinapro.com/wp-content/uploads/2019/10/payment-icon.png"></img>

</div>
<div><span className="font-bold text-xl">Useful Links</span>
  <ul className="mt-3">
    <li>
      Men
    </li>
    <li>
      Women
    </li>
    <li>
      Kid
    </li>
    <li>
      shoes
    </li>
    <li>
      Tops
    </li>
  </ul>
</div>
<div><span className="font-bold">
Information</span>
<ul className="mt-3"> 
    <li>
      Men
    </li>
    <li>
      Women
    </li>
    <li>
      Kid
    </li>
    <li>
      shoes
    </li>
    <li>
      Tops
    </li>
  </ul>
</div>
<div><span className="font-bold">Customer Service</span>
<ul className="mt-3"> 
    <li>
      Men
    </li>
    <li>
      Women
    </li>
    <li>
      Kid
    </li>
    <li>
      shoes
    </li>
    <li>
      Tops
    </li>
  </ul>
</div>
</div>  
<div className="flex flex-row flex-wrap p-6 mt-10 text-white gap-36 border-t">
 
<div className="w-2/3">?? Copyright 2022 Aden - All Rights Reserved - Powered by <Link to="https://woovina.com" className="hover:text-white hover:underline">WooVina Theme</Link>.</div>
<div>
  Frequently Questions | Privacy Polacy
</div>
</div>

</div>
</div>
        </main>
        <div className="pt-2 text-white fixed right-0 top-40 z-30 text-center w-16 h-16 bg-orange-400">
MORE DEMOS
  </div>
    </div>
  );
};
export default CheckOut;
