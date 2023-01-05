import { createBrowserRouter } from "react-router-dom";

// import App from "./pages/App";
import Login from "./pages/Login.js";
import Signup from "./pages/SignUp.js";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Product from "./pages/Product";
import ProductDetail from "./pages/ProductDetail";
import ForgotPWD from "./pages/ForgotPWD";
import Payment from "./pages/Payment";
import History from "./pages/History";
import Updateproduct from "./pages/admin/UpdateProduct";
import AddProduct from "./pages/admin/AddProduct";
import Updatepromo from "./pages/admin/UpdatePromo";
import AddPromo from "./pages/admin/AddPromo";
import ResetPass from "./pages/ResetPassword";
import OTP from "./pages/auth/Otp";

import PrivateElement from "./components/PrivateElement.js";

// import Error from "./pages/Error";

const router = createBrowserRouter([
   // { path: "/", element: <App />, errorElement: <Error /> },
   { path: "/", element: <Home /> },
   { path: "/login", element: <Login /> },
   { path: "/signup", element: <Signup /> },
   { path: "/product", element: <Product /> },
   { path: "/forgotpassword", element: <ForgotPWD /> },
   { path: "/resetpassword", element: <ResetPass /> },
   { path: "/auth/:otp", element: <OTP /> },

   {
      path: "/profile",
      element: (
         <PrivateElement allowedRoles={["user"]}>
            <Profile />
         </PrivateElement>
      ),
   },
   {
      path: "/productdetail/:id",
      element: (
         <PrivateElement allowedRoles={["user"]}>
            <ProductDetail />
         </PrivateElement>
      ),
   },
   {
      path: "/payment",
      element: (
         <PrivateElement allowedRoles={["user"]}>
            <Payment />
         </PrivateElement>
      ),
   },
   {
      path: "/history",
      element: (
         <PrivateElement allowedRoles={["user", "admin"]}>
            <History />
         </PrivateElement>
      ),
   },

   {
      path: "/updateproduct/:id",
      element: (
         <PrivateElement allowedRoles={["admin"]}>
            <Updateproduct />
         </PrivateElement>
      ),
   },
   {
      path: "/updatepromo/:id",
      element: <Updatepromo />,
   },
   {
      path: "/addproduct",
      element: (
         <PrivateElement allowedRoles={["admin"]}>
            <AddProduct />
         </PrivateElement>
      ),
   },
   {
      path: "/addpromo",
      element: (
         <PrivateElement allowedRoles={["admin"]}>
            <AddPromo />
         </PrivateElement>
      ),
   },
]);

export default router;
