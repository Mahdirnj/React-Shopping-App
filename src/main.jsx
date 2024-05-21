import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRouter from './AppRouter.jsx'
import "./assets/index.css"
import {HashRouter} from "react-router-dom";
import Header from "./Component/Header.jsx";
import Footer from "./Component/Footer.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <HashRouter>
        <React.StrictMode>
            <Header/>
            <AppRouter/>
            <Footer/>
        </React.StrictMode>
    </HashRouter>
)
