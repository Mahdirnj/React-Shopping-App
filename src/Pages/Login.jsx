import LoginComp from "../Component/LoginComp.jsx";
import {Helmet} from "react-helmet";

function Login() {
    return (
        <div className="bg-gray-900">
            <Helmet>
                <title>Login</title>
            </Helmet>
            <div className="w-auto transform bg-gray-800">
                <LoginComp/>
            </div>
        </div>
    )
}

export default Login;