import React, {useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import Alert from './Alert';
import {Button} from "flowbite-react";

function LoginComp() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [alert, setAlert] = useState({show: false, Boldtxt: '', Infotxt: '', AlertType: ''});
    const navigate = useNavigate();

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };
    const handleSignup = () => {
        navigate('/Signup');
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.get('../UserData.json')
            .then((response) => {
                const usersData = response.data;
                const user = Object.values(usersData).find(user => user.username === username);

                if (user) {
                    if (user.password === password) {
                        setAlert({show: true, Boldtxt: 'Success!', Infotxt: 'Login successful.', AlertType: 'success'});
                        // eslint-disable-next-line no-global-assign
                        Name = user.name;
                        setTimeout(() => {
                            navigate('/dashboard');
                        }, 2000);
                    } else {
                        setAlert({show: true, Boldtxt: 'Error!', Infotxt: 'Incorrect password.', AlertType: 'error'});
                    }
                } else {
                    setAlert({
                        show: true,
                        Boldtxt: 'Attention!',
                        Infotxt: 'Username does not exist.',
                        AlertType: 'info'
                    });
                }
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setAlert({
                    show: true,
                    Boldtxt: 'Error!',
                    Infotxt: 'An error occurred while fetching data.',
                    AlertType: 'error'
                });
            });
    };

    return (
        <div>
            <section className="bg-gray-50 dark:bg-gray-900">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
                    <div className="flex flex-col justify-center">
                        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">We
                            invest in the world’s potential</h1>
                        <br/>
                        <h2 className="mb-5 text-white font-serif">
                            We invest in your time <span
                            className="mx-2 text-blue-500 font-bold font-mono">That matters</span>
                        </h2>
                        <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
                            Here at Flowbite we focus on markets where technology, innovation, and capital can unlock
                            long-term value and drive economic growth.
                        </p>
                        <a href="#"
                           className="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center">
                            Read more about our app
                            <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </a>
                    </div>
                    <div>
                        <div
                            className="w-full lg:max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow-xl dark:bg-gray-800">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                                Sign in to reShop
                            </h2>
                            <form className="mt-8 space-y-6" action="#">
                                <div>
                                    {alert.show && <Alert Boldtxt={alert.Boldtxt} Infotxt={alert.Infotxt}
                                                          AlertType={alert.AlertType}/>}
                                    <div className="relative z-0">
                                        <input autoComplete={"off"} onChange={handleUsernameChange} type="email"
                                               name="email" id="email-login"
                                               className="block py-2.5 px-0 w-full text-sm text-gray-300 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                               placeholder=" "/>
                                        <label htmlFor="email"
                                               className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Your
                                            Email</label>
                                    </div>
                                </div>
                                <div>
                                    <div className="relative z-0">
                                        <input autoComplete={"off"} onChange={handlePasswordChange} type="password"
                                               name="password"
                                               className="block py-2.5 px-0 w-full text-sm text-gray-300 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                               placeholder=" "/>
                                        <label htmlFor="floating_standard"
                                               className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Password</label>
                                    </div>
                                </div>
                                <button onClick={handleSubmit} type="submit"
                                        className="w-full px-5 ml-40 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Login to your account
                                </button>
                                <div
                                    className="text-sm  font-medium align-middle ml-40  flex text-gray-900 dark:text-white">
                                    Not registered yet? <Button onClick={handleSignup}
                                                                className="bg-gray-700 hover:bg-gray-900 text-blue-600 hover:underline  dark:text-blue-500 ml-3 py-2">Create
                                    account</Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default LoginComp;
