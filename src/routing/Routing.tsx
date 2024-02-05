import { Routes, Route } from "react-router-dom";
import Layout from "../layout/Layout";

import Home from "@/pages/Home";
import Login from "@/pages/Login";
import SignUp from "@/pages/SignUp";
import ForgetPassword from "@/pages/ForgetPassword";
import { useState } from "react";

import Page404 from "../pages/Page404";
import Shop from "../pages/Shop";

function Routing() {
  const [type, setType] = useState<string>("sign-in");
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={<Login type={type} setType={setType} />}
        />
        <Route path="/forgetPassword" element={<ForgetPassword />} />
        <Route
          path="/sign-up"
          element={<SignUp type={type} setType={setType} />}
        />

        <Route path="/shop" element={<Shop />} />
        <Route path="*" element={<Page404 />} />
      </Route>
    </Routes>
  );
}

export default Routing;
