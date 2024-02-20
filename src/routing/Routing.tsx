import { Routes, Route } from "react-router-dom";
import {
  FC,
  LazyExoticComponent,
  ReactElement,
  lazy,
  useState,
  Suspense,
} from "react";
import Layout from "../layout/Layout";
import { TLogin } from "@/types";
import Profile from "@/pages/Profile";
import ProtectedRoutes from "@/components/ProtectedRoutes";
import ProfileLayout from "@/components/ProfileLayout";
import Settings from "@/pages/Settings";

// import Home from "@/pages/Home";
// import Login from "@/pages/Login";
// import SignUp from "@/pages/SignUp";
// import ForgetPassword from "@/pages/ForgetPassword";
// import Page404 from "../pages/Page404";
// import Shop from "../pages/Shop";
// import CompareProducts from "@/pages/CompareProducts";
// import Wishlist from "@/pages/Wishlist";
// import VerifyEmail from "@/pages/VerifyEmail";
// import Checkout from "@/pages/Checkout";
// import ShoppingCard from "@/pages/ShoppingCard";

const Home: LazyExoticComponent<FC> = lazy(() => import("@/pages/Home"));
const Login: LazyExoticComponent<FC<TLogin>> = lazy(
  () => import("@/pages/Login")
);
const SignUp: LazyExoticComponent<FC<TLogin>> = lazy(
  () => import("@/pages/SignUp")
);
const ForgetPassword: LazyExoticComponent<FC> = lazy(
  () => import("@/pages/ForgetPassword")
);
const Page404: LazyExoticComponent<FC> = lazy(() => import("@/pages/Page404"));
const Shop: LazyExoticComponent<FC> = lazy(() => import("@/pages/Shop"));
const CompareProducts: LazyExoticComponent<FC> = lazy(
  () => import("@/pages/CompareProducts")
);
const Wishlist: LazyExoticComponent<FC> = lazy(
  () => import("@/pages/Wishlist")
);
const VerifyEmail: LazyExoticComponent<FC> = lazy(
  () => import("@/pages/VerifyEmail")
);
const Checkout: LazyExoticComponent<FC> = lazy(
  () => import("@/pages/Checkout")
);
const ShoppingCard: LazyExoticComponent<FC> = lazy(
  () => import("@/pages/ShoppingCard")
);

function Routing() {
  const [type, setType] = useState<string>("sign-in");
  return (
    <Suspense fallback="loading...">
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
          <Route path="/user/verify-email" element={<VerifyEmail />} />

          <Route path="/shop" element={<Shop />} />
          <Route path="/compare" element={<CompareProducts />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/shopping-card" element={<ShoppingCard />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoutes>
                <ProfileLayout />
              </ProtectedRoutes>
            }
          >
            {/* <Route path="settings" element={<Profile />} /> */}
            <Route path="shopping-card" element={<ShoppingCard />} />
            <Route path="compare" element={<CompareProducts />} />
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="settings" element={<Settings />} />
          </Route>
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default Routing;
