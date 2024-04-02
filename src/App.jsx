import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Layout from "./pages/Layout/Layout";
import NoPage from "./pages/NoPage/NoPage";
import Product from "./pages/Product/Product";
import "./App.css";
import { CartProvider } from "./context/CartContext";
import Search from "./pages/Search/Search";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="product/:productID" element={<Product />} />
            <Route path="search/" element={<Search />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
