import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Shop from "./pages/Shop";
import ShopCategory from "./pages/ShopCategory";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import LoginSignup from "./pages/LoginSignup";
import MenBanner from "./assets/banner_men.png";
import WomenBanner from "./assets/banner_women.png";
import KidBanner from "./assets/banner_kid.png";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import ScrollReset from "./helpers/ScrollReset";

function Layout({ children }) {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";

  return (
    <div className="flex min-h-screen flex-col">
      {!isLoginPage && <Navbar />}
      <main className="flex-grow">{children}</main>
      {!isLoginPage && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollReset />
      <Layout>
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/mens"
            element={<ShopCategory banner={MenBanner} category="Men" />}
          />
          <Route
            path="/womens"
            element={<ShopCategory banner={WomenBanner} category="Women" />}
          />
          <Route
            path="/kids"
            element={<ShopCategory banner={KidBanner} category="Kid" />}
          />
          <Route path="/:category/product/:productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
