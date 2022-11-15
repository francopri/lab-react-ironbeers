import Header from "../components/Header";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from "axios";
import BeerDetails from "../components/BeerDetail";


function DetailsBeersPage() {

  const { beerID } = useParams();


  const [beer, setBeer] = useState('');

  useEffect(() => {

    async function fetchBeer() {

      const response = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/${beerID}`
      );

      setBeer(response.data);

    }

    fetchBeer();

  }, [beerID]);

  return (

    <div>

      <Header />

      <BeerDetails beer={beer} />

    </div>
  )
}

export default DetailsBeersPage;

