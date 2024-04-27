import "./Aboutme.css"
import Nav from "./Component/Nav.jsx";

function Aboutme() {
    return (
        <div>
            <Nav/>
            <header className='masthead'>
                <p className='masthead-intro'>Hi Im</p>
                <h1 className='masthead-heading'>Mahdi</h1>
            </header>
            <section className="introduction-section">
                <h1>Introduction</h1>
                <p>I am a construction business owner, part time marketer, and soon to be web developer.</p>
                <p>I love the internet, technology, and building beautiful things.</p>
            </section>
            <section className="location-section">
                <h1>Where Im From</h1>
                <p>Im originally from Iran, Tabriz. </p>
            </section>
            <section className="questions-section">
                <h1>More About Me</h1>
                <h2>What are your favorite hobbies?</h2>
                <p>My favorite hobby is building things on the internet like ecommerce sites and email marketing
                    campaigns.</p>
                <h2>What is your dream job?</h2>
                <p>My dream job is similar to my current job except I would like to be building software instead of
                    buildings.</p>
                <h2>Where do you live?</h2>
                <p>I live in my own dreams.</p>
                <h2>Why do you want to be a web developer?</h2>
                <p>Because programming is awesome and programming for the internet is even more awesome.</p>
            </section>

            <footer className="content-footer">
                <p>Say hi to me on these social networks:</p>
                <ul className="social">
                    <li><a className="css-is-deranged" href="">GitHub</a></li>
                    <li><a className="css-is-deranged" href="">Twitter</a></li>
                    <li><a className="css-is-deranged" href="">Google+</a></li>
                </ul>
            </footer>
        </div>

    )
}

export default Aboutme