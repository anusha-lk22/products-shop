import { React, useState, useEffect, useContext } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import DataContext from "./DataContext";
import { Link } from "react-router-dom";
import SingleCart from "./SingleCart";


const Home = () => {
  const [fake, setFake] = useState([]);
  const [count, setCount] = useState(0);
  const { DataSet, setDataSet } = useContext(DataContext);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const response = await fetch("https://fakestoreapi.com/products");

    const jsonData = await response.json();

    setFake(jsonData);
  };

  let handleClick = (id) => {
    let ix = fake.find((e) => e.id === id);
    let index = DataSet.find((el) => el.id === id);
    if (ix && !index) {
      ix.count = 1;
      setDataSet([...DataSet, ix]);
    }
  };
  return (
    <div>
<nav className="border-b fixed top-0 left-0 z-10 flex h-20 w-full items-center justify-center bg-white">
        <div className="mx-auto h-5/6 w-11/12 xl:w-5/6">
          <div className="navbar px-0">
            <div className="navbar-start">
              <div className="flex flex-row flex-wrap gap-4">
<svg width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334c0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518a3.301 3.301 0 0 0 1.447-1.817a6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429a3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218a3.203 3.203 0 0 1-.865.115a3.23 3.23 0 0 1-.614-.057a3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"></path></svg>
<svg width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2.01h-2l-.396 3.98h2.396v8.01Z"></path></svg>
       <svg width="1.25em" height="1em" viewBox="0 0 640 512"><path fill="currentColor" d="M386.061 228.496c1.834 9.692 3.143 19.384 3.143 31.956C389.204 370.205 315.599 448 204.8 448c-106.084 0-192-85.915-192-192s85.916-192 192-192c51.864 0 95.083 18.859 128.611 50.292l-52.126 50.03c-14.145-13.621-39.028-29.599-76.485-29.599c-65.484 0-118.92 54.221-118.92 121.277c0 67.056 53.436 121.277 118.92 121.277c75.961 0 104.513-54.745 108.965-82.773H204.8v-66.009h181.261zm185.406 6.437V179.2h-56.001v55.733h-55.733v56.001h55.733v55.733h56.001v-55.733H627.2v-56.001h-55.733z"></path></svg>
       <svg width="0.75em" height="1em" viewBox="0 0 384 512"><path fill="currentColor" d="M204 6.5C101.4 6.5 0 74.9 0 185.6C0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4c0-9.3-23.7-29.1-23.7-67.8c0-80.4 61.2-137.4 140.4-137.4c68.1 0 118.5 38.7 118.5 109.8c0 53.1-21.3 152.7-90.3 152.7c-24.9 0-46.2-18-46.2-43.8c0-37.8 26.4-74.4 26.4-113.4c0-66.2-93.9-54.2-93.9 25.8c0 16.8 2.1 35.4 9.6 50.7c-13.8 59.4-42 147.9-42 209.1c0 18.9 2.7 37.5 4.5 56.4c3.4 3.8 1.7 3.4 6.9 1.5c50.4-69 48.6-82.5 71.4-172.8c12.3 23.4 44.1 36 69.3 36c106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z"></path></svg>
       <svg width="1em" height="1em" viewBox="0 0 15 15"><path fill="none" stroke="currentColor" d="M11 3.5h1M4.5.5h6a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4h-6a4 4 0 0 1-4-4v-6a4 4 0 0 1 4-4Zm3 10a3 3 0 1 1 0-6a3 3 0 0 1 0 6Z"></path></svg>
        </div>
                          </div>
                          <div className="navbar-end">
              <div className="flex flex-row flex-wrap gap-4">
                <div class="dropdown dropdown-end group text-gray-500">Language
                <ul className="group/edit hidden group-hover:inline">
                <li className="border-t-2 py-1 px-2 border-red-400 shadow-md">
English
                  </li>
                  <li className="border-t py-1 px-2 shadow-md">
French
                  </li>
                </ul>
                </div>


                <div class="dropdown dropdown-end text-gray-500 group">Currency
                <ul className="group/edit hidden group-hover:inline">
                <li className="border-t-2  py-1 px-2 border-red-400 shadow-md">
USD                  </li>
                  <li className="border-t py-1 px-2 shadow-md">
EUR
                  </li>
                </ul>
                </div>
                <div className="text-gray-500 hover:text-red-500">Login/Register</div>
  
</div></div>
                         			
</div> 
        
        </div>
      </nav>
      <nav className="border-b left-0 fixed top-0 z-10 flex h-20 w-full mt-20 items-center justify-center bg-white">
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
            <div className="flex flex-row flex-wrap">
            <button className="ml-20 border-2 p-2 rounded-full border-gray-200">
                <div className="flex flex-row flex-wrap">
                <span className="border border-1 rounded-full bg-red-500 px-1 text-white">
                  0
                </span> <svg className="text-2xl" width="1em" height="1em" viewBox="0 0 36 36"><path fill="currentColor" d="M32.84 15.72a1 1 0 1 0-2 .29a13.15 13.15 0 0 1 .16 1.93A13 13 0 0 1 8.7 27h5.36a1 1 0 0 0 0-2h-9v9a1 1 0 1 0 2 0v-5.8a15 15 0 0 0 25.78-12.48Z" class="clr-i-outline clr-i-outline-path-1"></path><path fill="currentColor" d="M30.06 1A1.05 1.05 0 0 0 29 2v5.83A14.94 14.94 0 0 0 3 17.94a15.16 15.16 0 0 0 .2 2.48a1 1 0 0 0 1 .84h.16a1 1 0 0 0 .82-1.15A13.23 13.23 0 0 1 5 17.94a13 13 0 0 1 13-13A12.87 12.87 0 0 1 27.44 9h-5.38a1 1 0 0 0 0 2H31V2a1 1 0 0 0-.94-1Z" class="clr-i-outline clr-i-outline-path-2"></path><path fill="none" d="M0 0h36v36H0z"></path></svg>
                </div>
              </button>
              <button className="ml-4 border-2 p-2 rounded-full border-gray-200">
                <div className="flex flex-row flex-wrap">
                <span className="border border-1 rounded-full bg-red-500 px-1 text-white">
                  0
                </span>{" "}
                <svg className="text-2xl" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" d="m8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385c.92 1.815 2.834 3.989 6.286 6.357c3.452-2.368 5.365-4.542 6.286-6.357c.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"></path></svg>
                 </div>
              </button>
              <Link to="/cart">
            <button className="ml-4 border-2 p-2 rounded-full border-gray-200">
                <div className="flex flex-row flex-wrap">
                <span className="border border-1 rounded-full bg-red-500 px-1 text-white">
                  {DataSet ? DataSet.length : 0}
                </span>{" "}
                <svg className="text-2xl" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M19.5 8.25h-3v-.5a4.5 4.5 0 0 0-9 0v.5h-3A1.25 1.25 0 0 0 3.25 9.5V18A2.75 2.75 0 0 0 6 20.75h12A2.75 2.75 0 0 0 20.75 18V9.5a1.25 1.25 0 0 0-1.25-1.25ZM9 7.75a3 3 0 0 1 6 0v.5H9ZM19.25 18A1.25 1.25 0 0 1 18 19.25H6A1.25 1.25 0 0 1 4.75 18V9.75H7.5V12A.75.75 0 0 0 9 12V9.75h6V12a.75.75 0 0 0 1.5 0V9.75h2.75Z"></path></svg>
                </div>
              </button>
              </Link>
            </div>
            </div>
          </div>
        </div>
      </nav>
      <nav className="border-b left-0 fixed top-0 z-10 flex h-20 w-full mt-40 items-center justify-center bg-white">
        <div className="mx-auto h-5/6 w-11/12 xl:w-5/6">
          <div className="navbar px-0">
            <div className="navbar-start">
            <div className="flex flex-row flex-wrap gap-4">
<div className="text-gray-500 hover:text-red-500">Home</div>
<div class="bg-white text-gray-500 dropdown dropdown-end group pb-2 px-2">
    <span className="hover:text-red-500">Shop</span>
    <div className="flex flex-row flex-wrap gap-10 hover:border-t-2 hover:border-red-500">
                <ul className="mt-3 group hidden group-hover:inline">
                <li className="py-1 px-2 font-bold hover:text-red-500">
                SHOP LAYOUT
                  </li>
                  <li className="mt-2 hover:text-red-500">
                  Shop Left Sidebar
                  </li>
                  <li className="mt-2 hover:text-red-500">
                  Shop Right Sidebar
                  </li>
                  <li className="mt-2 text-red-500">
                  <Link to="/home" className="hover:text-red-500">Shop Full Width</Link>
                  </li>
                  <li className="mt-2 hover:text-red-500">
                  Shop Both Sidebars
                  </li>
                </ul>
                <ul className="group mt-3 hidden group-hover:inline">
                <li className="py-1 px-2 font-bold hover:text-red-500">
                SHOP PAGES
                  </li>
                  <li className="mt-2 hover:text-red-500">
                  My Account
                  </li>
                  <li className="mt-2 hover:text-red-500">
                  My Wishlist
                  </li>
                  <li className="mt-2 hover:text-red-500">
                  My Cart
                  </li>
                  <li className="mt-2 hover:text-red-500">
                  <Link to="/checkout">My Checkout</Link>
                  </li>
                </ul>
                <ul className="mt-3 group hidden group-hover:inline">
                <li className="py-1 px-2 font-bold hover:text-red-500">
                PRODUCT TYPES
                  </li>
                  <li className="mt-2 hover:text-red-500">
                  Simple Product
                  </li>
                  <li className="mt-2 hover:text-red-500">
                  Variable Product
                  </li>
                  <li className="mt-2 hover:text-red-500">
                  Affiliate Product
                  </li>
                  <li className="mt-2 hover:text-red-500">
                  Grouped Product
                  </li>
                </ul>
                <ul className="mt-3 group hidden group-hover:inline">
                  <li className="mt-3">
                  <img className="w-56" src="https://demo-51.woovinapro.com/wp-content/uploads/2020/10/banner-04.jpg" />
                  </li>
                </ul>
                </div>
           </div>
           <div className="text-gray-500 hover:text-red-500">Blog</div>
           <div class="bg-white text-gray-500 dropdown dropdown-end group pb-2 px-2">
    <span className="hover:text-red-500">Pages</span>
    <ul className="mt-3 group hidden group-hover:inline  hover:border-t-2 hover:border-red-500">
      <li>
      Frequently Questions
      </li>
      <li>
      Privacy Policy
      </li>
      <li>Error</li>
      </ul>

</div>




<div className="text-gray-500 hover:text-red-500">About Us</div>
<div className="text-gray-500 hover:text-red-500">Contact Us</div>
<div className="text-gray-500 hover:text-red-500">Vendor Zone</div>
              </div>

            </div>
     

</div></div>
</nav>

       <main className="pt-[var(--header-height)]">
       <div className="bg-[url('https://demo-51.woovinapro.com/wp-content/uploads/2020/11/bk-title-header.jpg')] h-44">
        <div className="p-4 mt-60 text-white text-4xl font-bold text-center">
          
          Shop Full Width
        </div>
        </div>
        <div className="flex flex-row flex-wrap gap-1 items-center">
          {fake.map((item) => {
            return (
              <div
                className="group m-3 w-80 h-[35rem] p-9 box-border border-1 shadow-lg text-center hover:bg-slate-100"
                key={item.id}
              >
              
                  <img className="w-44 h-48 mx-auto" src={item.image} />
           
                <div className="mt-16 hover:text-red-400 text-gray-500">{item.category}</div>

                <div className="text-blue-500 hover:text-red-400 mt-2">{item.title}</div>
                <div className="text-5xl text-gray-400">&#8902;&#8902;&#8902;&#8902;&#8902;</div>
                <div className="my-1">${item.price}</div>
                
                <button type="button" className="mt-3 mx-auto hidden bg-red-500 text-white py-1 px-2 group-hover:block rounded-md hover:bg-black"
                                                onClick={() => handleClick(item.id)}
                                              >
                                                ADD TO CART
                                              </button>
                                        </div>
                                           
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default Home;
