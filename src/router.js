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
import Updateproduct from "./pages/admin/UpdateProduct"
import Updatepromo from "./pages/admin/UpdatePromo"
import Handlingproduct from "./pages/admin/Handlingproduct"

import PrivateElement from "./components/PrivateElement.js";


// import Error from "./pages/Error";

const router = createBrowserRouter([
    // { path: "/", element: <App />, errorElement: <Error /> },
    { path: "/", element: <Home /> },
    { path: "/login", element: <Login /> },
    { path: "/signup", element: <Signup /> },
    { path: "/product", element: <Product /> },
    {
        path: "/profile", element:
            <PrivateElement allowedRoles={["user"]}>
                <Profile />
            </PrivateElement>
    },
    {
        path: "/productdetail/:id", element:
            <PrivateElement allowedRoles={["user"]}>
                <ProductDetail />
            </PrivateElement>
    },
    {
        path: "/forgotpassword", element:
            <PrivateElement allowedRoles={["user"]}>
                <ForgotPWD />
            </PrivateElement>
    },
    {
        path: "/payment", element:
            <PrivateElement allowedRoles={["user"]}>
                <Payment />
            </PrivateElement>
    },
    {
        path: "/history", element:
            <PrivateElement allowedRoles={["user"]}>
                <History />
            </PrivateElement>
    },




    {
        path: "/updateproduct", element:
            <PrivateElement allowedRoles={["admin"]}>
                <Updateproduct />
            </PrivateElement>
    },
    {
        path: "/updatepromo", element:
            <PrivateElement allowedRoles={["admin"]}>
                <Updatepromo />
            </PrivateElement>
    },
    {
        path: "/handlingproduct", element:
            <PrivateElement allowedRoles={["admin"]}>
                <Handlingproduct />
            </PrivateElement>
    },

]);

export default router;