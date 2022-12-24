
import Home from "./components/Home";
import CartPage from "./components/CartPage"
import CheckOut from "./components/CheckOut"
import SingleCart from "./components/SingleCart"

import "./index.css";
import { BrowserRouter, Routes, Route, Link, useParams } from "react-router-dom";
import { DataProvider } from "./components/DataContext";
function App() {
  return (
    <BrowserRouter>
    
      <DataProvider>
      <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/singlecart" element={<SingleCart />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckOut />} />
            </Routes>
        </DataProvider>
    </BrowserRouter>
  );
}
export default App;
