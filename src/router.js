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
// import Error from "./pages/Error";

const router = createBrowserRouter([
    // { path: "/", element: <App />, errorElement: <Error /> },
    { path: "/", element: <Home /> },
    { path: "/login", element: <Login /> },
    { path: "/signup", element: <Signup /> },
    { path: "/profile", element: <Profile /> },
    { path: "/product", element: <Product /> },
    { path: "/productdetail", element: <ProductDetail /> },
    { path: "/forgotpassword", element: <ForgotPWD /> },
    { path: "/payment", element: <Payment /> },
    { path: "/history", element: <History /> },
]);

export default router;