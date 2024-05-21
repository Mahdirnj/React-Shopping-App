import {Route, Routes} from "react-router-dom";
import MainPage from "./Pages/MainPage.jsx";
import ShopPage from "./Pages/ShopPage.jsx";
import Login from "./Pages/Login.jsx";
import Aboutme from "./Pages/Aboutme.jsx";


function AppRouter() {
    return (
        <Routes>
            <Route path={"/"} element={<MainPage/>}/>
            <Route path={"/shop"} element={<ShopPage/>}/>
            <Route path={"/login"} element={<Login/>}/>
            <Route path={"/aboutme"} element={<Aboutme/>}/>
        </Routes>
    )
}

export default AppRouter
