import "../assets/index.css"
import CorpInfo from "../Component/CorpInfo.jsx";
import Stats from "../Component/Stats.jsx";

function Aboutme() {
    return (
        <div className="bg-gray-900 pt-7">
            <h1 className=" text-center mb-5 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Welcome
                to <mark
                    className=" px-2 text-white bg-blue-700 rounded dark:bg-blue-900 ">reShop</mark> intro page
            </h1>
            <p className="text-center text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">in this page we
                are going to
                introduce
                our shop what it can do and capable of </p>
            <section className="pt-8 px-9">
                <p className="mb-3 text-gray-500 dark:text-gray-400 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:me-3 first-letter:float-start">Track
                    work across the enterprise through an open, collaborative platform. Link issues across Jira and
                    ingest
                    data from other software development tools, so your IT support and operations teams have richer
                    contextual information to rapidly respond to requests, incidents, and changes.</p>
                <p className="text-gray-500 dark:text-gray-400">Deliver great service experiences fast - without the
                    complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and
                    deploy changes with ease, with a complete audit trail for every change.</p>
                <div className="flex justify-center flex-shrink-0 mt-10">
                    <CorpInfo Address={"92 Miles Drive, Newark, NJ 07103, California, USA"}
                              Email={"www.reShop@shop.com"}
                              PhoneNum={"+01-2569-978"}/>
                </div>
                <div className="flex justify-center  mt-10">
                    <Stats fHead={"Active users "} fDesc={2546} secHead={"Total orders"} secDesc={5962}
                           thrdHead={"Products"} thrdDesc={578}/>
                </div>
            </section>

        </div>
    )
}

export default Aboutme