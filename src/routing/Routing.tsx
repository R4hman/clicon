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
import CircularPageLoader from "@/components/reusable/CircularPageLoader";

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
// import Settings from "@/pages/Settings";

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
const SingleProduct: LazyExoticComponent<FC> = lazy(
  () => import("@/pages/SingleProduct")
);
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
const Settings: LazyExoticComponent<FC> = lazy(
  () => import("@/pages/Settings")
);
const OrderHistory: LazyExoticComponent<FC> = lazy(
  () => import("@/pages/OrderHistory")
);
const PaymentComplete: LazyExoticComponent<FC> = lazy(
  () => import("@/pages/PaymentComplete")
);

function Routing() {
  const [type, setType] = useState<string>("sign-in");
  return (
    <Suspense fallback={<CircularPageLoader />}>
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
          <Route path="/shop/:id" element={<SingleProduct />} />
          <Route path="/compare" element={<CompareProducts />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/shopping-card" element={<ShoppingCard />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/payment-completed" element={<PaymentComplete />} />
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
            <Route path="my-orders" element={<OrderHistory />} />
          </Route>
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default Routing;
