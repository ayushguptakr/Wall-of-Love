import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductPage from "./pages/ProductPage";
import WallOfLove from "./pages/WallOfLove";
import Checkout from "./pages/Checkout";
import Success from "./pages/Success";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/wall-of-love" element={<WallOfLove />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
