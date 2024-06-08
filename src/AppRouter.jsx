import {Route, Routes} from "react-router-dom";
import MainPage from "./Pages/MainPage.jsx";
import ShopPage from "./Pages/ShopPage.jsx";
import Login from "./Pages/Login.jsx";
import Aboutme from "./Pages/Aboutme.jsx";
import DashboardPage from "./Pages/DashboardPage.jsx";
import Signup from "./Component/Signup.jsx";

function AppRouter() {
    return (
        <Routes>
            <Route path={"/"} element={<MainPage/>}/>
            <Route path={"/shop"} element={<ShopPage/>}/>
            <Route path={"/login"} element={<Login/>}/>
            <Route path={"/aboutme"} element={<Aboutme/>}/>
            <Route path={"/dashboard"} element={<DashboardPage/>}/>
            <Route path={"/Signup"} element={<Signup/>}/>
        </Routes>
    )
}

export default AppRouter
