import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import axios from "axios";


function AllBeersPage() {

    const [beers, setBeers] = useState([]);

    useEffect(() => {
        async function fetchBeers() {
            const response = await axios.get(
                "https://ih-beers-api2.herokuapp.com/beers"
            );
            setBeers(response.data);
        }

        fetchBeers();

    }, []);

    // function handleReload() {
    //     setReload(!reload);
    // }

    return (

        <div>
            <Header />

            {beers.map((beer) => {

                return (

                    <Link  key={beer._id} to={`/beers/${beer._id}`}>

                        <div className="beer-container">

                            <div className="beer-img">
                                <div><img src={beer.image_url} alt={beer.image_url} /></div>
                            </div>

                            <div className="beer-text">
                                <h2>{beer.name}</h2>
                                <div className="beer-tagline">{beer.tagline}</div>
                                <div className="beer-contributed">Created by: {beer.contributed_by}</div>

                            </div>
                        </div>
                    </Link>);
            })}
        </div>
    )
}

export default AllBeersPage;

