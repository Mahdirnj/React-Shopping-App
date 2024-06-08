import CardInfoNoButton from "../Component/Card-info-noButton.jsx";
import DataAnalystSVG from "../Component/DataAnalystSVG.jsx";
import MainIntro from "../Component/Main-Intro.jsx";
import Timeline from "../Component/Timeline.jsx";
import FeatureSection from "../Component/Feature-section.jsx";
import {Helmet} from "react-helmet";

function MainPage() {
    return (
        <div>
            <Helmet>
                <title>Home</title>
                <link rel="icon" href="../assets/Homefav.png"/>
            </Helmet>
            <div className="bg-gray-800 text-white dark:bg-gray-900 dark:text-white ">
                <div className="transform">
                    <MainIntro/>
                </div>

                {/*//---------------------------------    These are page content--*/}
                <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white mt-10 md:text-5xl lg:text-6xl text-center"><span
                    className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Better feeling </span>
                    When you have reShop </h1>
                <p className="font-bold text-lg  text-gray-500 lg:text-xl dark:text-gray-400 text-center">Here at
                    reShop
                    we focus on
                    markets where technology, innovation, and capital can unlock long-term value and drive economic
                    growth.</p>
                <br/>
                <br/>
                <section className="text-center">
                    <p className="mb-3 text-lg text-gray-500 md:text-xl dark:text-gray-400">Deliver great service
                        experiences fast - without the complexity of traditional solutions.Accelerate critical
                        needs of work .</p>
                    <p className="text-gray-500 dark:text-gray-400">Track work across the enterprise through an open,
                        collaborative platform. Link issues across reShop and ingest data from other shoppers , so your
                        shop and teams have richer contextual information to rapidly
                        respond
                        to requests, incidents, and changes.</p>
                </section>
                <div className="flex justify-center flex-shrink-0 mt-10 ">
                    <img className="max-w-32 h-32  rounded-3xl  justify-center "
                         src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                         alt="Rounded avatar"/>

                    <blockquote
                        className=" text-center text-lg italic font-semibold text-gray-900 w-96 dark:text-white">
                        <p>"reShop is just awesome. It contains tons of predesigned products and tools starting from
                            daily basis to complex tasks. Perfect choice for everyone "</p>
                        <span className="m-10">"David"</span>
                    </blockquote>
                </div>

                {/*  Info section   */}

                <div className="flex justify-center p-3 bg-gray-800 rounded-3xl h-9-max ml-52 mr-52">
                    <CardInfoNoButton Heading={"How big is this?"}
                                      info={"Well it big enough to your skill and scale of your project but this method (Using reShop as a provider ) is a faster way to do your job"}/>
                    <span className="ml-5"></span>
                    <CardInfoNoButton Heading={"What is this ?"}
                                      info={"reShop provides a fresh set of products and home and complex based on the popular tools and data. It makes living much easier "}/>
                </div>
                <FeatureSection/>
                <div className="flex justify-center mt-10 bg-gray-800 rounded-3xl ml-52 mr-52  ">
                    <h1 className="mt-36 ml-4 h-72 text-5xl font-extrabold dark:text-blue-700">reShop<small
                        className="ms-2 font-semibold text-gray-500 dark:text-gray-400">The road map</small></h1>
                    <Timeline/>
                </div>
                <div className="mt-10 ">
                    <div className="pb-7">
                        <DataAnalystSVG PhotoInside={"src/assets/stats.jpg"}/>
                    </div>
                </div>
                {/*<Stats fHead={"Happy users"} fDesc={"94%"} secHead={"Up time"} secDesc={"99.99 %"} thrdHead={""}*/}
                {/*       thrdDesc={""}/>*/}
                {/*<br/>*/}
                {/*<div className="flex justify-center mt-0">*/}
                {/*    <Button Buttomtext={"Click here to add counter"}/>*/}
                {/*</div>*/}
            </div>
        </div>
    )
}

export default MainPage;