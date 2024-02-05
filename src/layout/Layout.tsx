import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
import Discount from "./discount/Discount";
import { useState } from "react";

function Layout() {
  const [discount, setDiscount] = useState(true);
  return (
    <>
      {discount && <Discount setDiscount={setDiscount} />}
      <Header />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
