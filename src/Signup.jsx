import "./Signup.css"
import SocialButton from "./Component/SocialButton.jsx";
import Nav from "./Component/Nav.jsx";

function Signup() {

    return (
        <div>
            <Nav/>
            <div className="signup">
                <div className="signup-connect">
                    <h1>Create your account</h1>
                    <SocialButton mytext={"Sign in with Facebook"} myclass={"btn-facebook"}/>
                    <SocialButton mytext={"Sign in with Twitter"} myclass={"btn-twitter"}/>
                    <SocialButton mytext={"Sign in with Google"} myclass={"btn-google"}/>
                    <SocialButton mytext={"Sign in with Linkedin"} myclass={"btn-linkedin"}/>
                    <SocialButton mytext={"Sign in with Google"} myclass={"btn-facebook"}/>
                </div>
                <div className="signup-classic">
                    <h2>Or use the classical way</h2>
                    <form className="form">
                        <fieldset className="username">
                            <input type="text" placeholder="username"/>
                        </fieldset>
                        <fieldset className="email">
                            <input type="email" placeholder="email"/>
                        </fieldset>
                        <fieldset className="password">
                            <input type="password" placeholder="password"/>
                        </fieldset>
                        <button type="submit" className="btn">sign up</button>
                    </form>
                </div>
            </div>
        </div>

    )

}

export default Signup