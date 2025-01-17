import "./App.css";
import "./Components/Footer";
import Navbar from "./Components/Navbar";
import HomePage from "./Pages/HomePage";
import Footer from "./Components/Footer";
import AboutPage from "./Pages/AboutPage";
import CartPage from "./Pages/CartPage";
import AddItemPage from "./Pages/AddItemPage";
import DetailsPage from "./Pages/DetailsPage";
import QuotePage from "./Pages/QuotePage";
import { Routes, Route, useLocation } from "react-router-dom";
import { useState } from "react";
import EditItemPage from "./Pages/EditItemPage";
import { AppShell, Center } from "@mantine/core";
import errorPage from "./assets/images/404.png";
import { useEffect } from "react";

function App() {
  const [cartItems, setCartItems] = useState([]);
  let VITE_API_URL = `${import.meta.env.VITE_API_URL}/items`;

  const location = useLocation();
  useEffect(() => {
    let title = "";
    switch (location.pathname) {
      case "/":
        title = "";
        break;
      case "/About":
        title = "About Us |";
        break;
      case "/Cart":
        title = "Cart |";
        break;
      default:
        title = "";
    }
    document.title = `${title} Refurb - Reuse - Rebay!`;
  }, [location.pathname]);

  return (
    <AppShell>
      <div className="App">
        <AppShell.Main>
          <Navbar />
          <hr />
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  cartItems={cartItems}
                  setCartItems={setCartItems}
                  VITE_API_URL={VITE_API_URL}
                />
              }
            />
            <Route path="/About" element={<AboutPage />} />
            <Route
              path="/Cart"
              element={
                <CartPage
                  cartItems={cartItems}
                  setCartItems={setCartItems}
                  VITE_API_URL={VITE_API_URL}
                />
              }
            />
            <Route
              path="/AddItem"
              element={<AddItemPage VITE_API_URL={VITE_API_URL} />}
            />
            <Route path="/Quote" element={<QuotePage />} />
            <Route
              path="/item/:itemId"
              element={<DetailsPage VITE_API_URL={VITE_API_URL} />}
            />
            <Route
              path="/edit/:itemId"
              element={<EditItemPage VITE_API_URL={VITE_API_URL} />}
            />

            <Route
              path="*"
              element={
                <Center>
                  <img className="errorPage" src={errorPage} alt="404" />
                </Center>
              }
            />
          </Routes>
        </AppShell.Main>
      </div>
      <hr />
      <Footer />
    </AppShell>
  );
}
export default App;
