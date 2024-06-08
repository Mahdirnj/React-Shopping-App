import {Disclosure} from '@headlessui/react'
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/outline'
import "./Header.css"
import {useNavigate} from "react-router-dom";
import {useState} from "react";

const navigation = [
    {name: 'Home', href: '', current: "one", className: 'home-nav-link'},
    {name: 'Shop', href: '/shop', current: "two", className: 'shop-nav-link'},
    {name: 'About Page', href: '/aboutme', current: "three", className: 'about-me-nav-link'},
    {name: 'Login', href: 'login', current: "four", className: 'login-nav-link'}
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function Header() {
    const [active, setActive] = useState(1)
    const navigate = useNavigate()
    return (
        <div>
            <header className="App-header">
            </header>
            <Disclosure as="nav" className="bg-gray-800">
                {({open}) => (
                    <>
                        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                            <div className="relative flex h-16 items-center justify-between">
                                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                    {/* Mobile menu button*/}
                                    <Disclosure.Button
                                        className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                        <span className="absolute -inset-0.5"/>
                                        <span className="sr-only">Open main menu</span>
                                        {open ? (
                                            <XMarkIcon className="block h-6 w-6" aria-hidden="true"/>
                                        ) : (
                                            <Bars3Icon className="block h-6 w-6" aria-hidden="true"/>
                                        )}
                                    </Disclosure.Button>
                                </div>
                                <div
                                    className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                    <div className="flex flex-shrink-0 items-center">
                                        <img
                                            className="h-8 w-auto"
                                            src="src/assets/react.svg"
                                            alt="Your Company"
                                        />
                                    </div>
                                    <div className="w-11/12 hidden sm:ml-6 sm:block ">
                                        <div className="ml-16 w-11/12 flex space-x-4 justify-center">
                                            {navigation.map((item) => (
                                                <a
                                                    onClick={() => {
                                                        setActive(item.current)
                                                        navigate(item.href)
                                                    }}
                                                    key={item.name}
                                                    className={`rounded-md px-5 py-2 text-sm font-medium ${item.current === active ? 'bg-gray-600 text-white' : 'text-gray-300 hover:bg-gray-500 hover:text-white'} ${item.className}`}
                                                    aria-current={item.current ? 'page' : undefined}
                                                >
                                                    {item.name}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Disclosure.Panel className="sm:hidden">
                            <div className="space-y-1 px-2 pb-3 pt-2">
                                {navigation.map((item) => (
                                    <Disclosure.Button
                                        key={item.name}
                                        as="a"
                                        href={item.href}
                                        className={classNames(
                                            item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                            'block rounded-md px-3 py-2 text-base font-medium'
                                        )}
                                        aria-current={item.current ? 'page' : undefined}
                                    >
                                        {item.name}
                                    </Disclosure.Button>
                                ))}
                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
        </div>
    )
}

export default Header;
