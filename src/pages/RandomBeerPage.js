import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import BeerDetails from "../components/BeerDetail";

function RandomBeersPage() {

  const [beer, setBeer] = useState('');

  useEffect(() => {

    async function fetchBeer() {
      const response = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/random`
      );

      setBeer(response.data);

    }

    fetchBeer();

  }, []);

  return (

    <div>

      <Header />
      
      <BeerDetails beer={beer} />

    </div>
  )

}

export default RandomBeersPage;

