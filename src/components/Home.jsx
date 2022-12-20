import { React, useState, useEffect, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import DataContext from "./DataContext";
import { Link } from "react-router-dom";

const Home = () => {
  const [fake, setFake] = useState([]);
  const [count, setCount] = useState(0);
  const { DataSet, setDataSet } = useContext(DataContext);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const response = await fetch("https://fakestoreapi.com/products?limit=10");

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
              <Link
                to="/cart"
                className="ml-20 border-2 p-3 mr-10 rounded-full border-gray-200"
              >
                <span className="border border-1 rounded-full bg-red-300 p-2">
                  {DataSet ? DataSet.length : 0}
                </span>{" "}
                <FontAwesomeIcon icon={faShoppingBasket} />
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <main className="pt-[var(--header-height)]">
        <div className="p-4 bg-gray-300 mt-20 text-white text-2xl font-bold text-center">
          Shop Projects
        </div>
        <div className="flex flex-row flex-wrap gap-1">
          {fake.map((item) => {
            return (
              <div
                className="group m-5 w-40 h-50 p-4 box-border border-1 shadow-lg text-center hover:bg-slate-100"
                key={item.id}
              >
                <img src={item.image} />

                <div className="mt-10 hover:text-red-400">{item.category}</div>
                <div className="text-blue-500">{item.title}</div>
                <div>rating: {item.rating.rate}</div>
                <div>${item.price}</div>
                <button
                  type="button"
                  className="mt-2 hidden bg-red-500 text-white p-1 group-hover:block rounded-md hover:bg-black"
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
