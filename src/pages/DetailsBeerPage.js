import Header from "../components/Header";
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from "axios";
import BeerDetails from "../components/BeerDetail";


function DetailsBeerPage() {

  const { beerID } = useParams();
  const navigate = useNavigate();

  const [beer, setBeer] = useState('');

  async function handleDelete(e) {
    await axios.delete(`https://ironbeer-api.fly.dev/delete/${beerID}`);
    navigate("/beers");
  }

  useEffect(() => {

    async function fetchBeer() {

      const response = await axios.get(
        `https://ironbeer-api.fly.dev/${beerID}`
      );

      setBeer(response.data);

    }

    fetchBeer();

  }, [beerID]);

  return (

    <div>

      <Header />

      <BeerDetails beer={beer} />

      <div className="ps-3 pb-3">
        <Link className="btn btn-secondary" to={`/beers/${beerID}/edit`}>Editar</Link> &nbsp;
        <button onClick={handleDelete} className="btn btn-secondary">Excluir</button>
      </div>
    </div>
  )
}

export default DetailsBeerPage;

