import { Link } from "react-router-dom";
import beers from "../assets/beers.png";
import random from "../assets/random-beer.png"
import newbeer from "../assets/new-beer.png"


function HomePage() {

    return (

        <div className="home-container">

            <Link to={`/beers`}>
                <div className="home-img" style={{ backgroundImage: `url(${beers})` }} />
                <div className="home-text">
                    <h2>All Beers </h2>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi necessitatibus quidem animi maxime eaque neque, sequi ducimus tenetur similique, blanditiis eum magni, quibusdam aspernatur! Expedita ad amet ea nobis ipsum!
                </div>
            </Link>

            <div>

                <Link to={`/random-beer`}>
                    <div className="home-img" style={{ backgroundImage: `url(${random})` }} />
                    <div className="home-text">
                        <h2>Random Beer</h2>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque quaerat incidunt quis ad maiores. Qui, repudiandae provident quisquam similique ipsam repellendus voluptatum veritatis, et cum soluta aut quos laboriosam officia.
                    </div>
                </Link>
            </div>

            <div> <Link to={`/new-beer`}>
                    <div className="home-img" style={{ backgroundImage: `url(${newbeer})` }} />
                    <div className="home-text">
                        <h2>New Beer</h2>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque quaerat incidunt quis ad maiores. Qui, repudiandae provident quisquam similique ipsam repellendus voluptatum veritatis, et cum soluta aut quos laboriosam officia.
                    </div>
                </Link></div>

        </div>
    );
}

export default HomePage;