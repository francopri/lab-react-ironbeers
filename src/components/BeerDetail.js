
function BeerDetails({beer}) {

  return (

    <div>

      <div className="beer-detail-container">

        <div className="beer-detail-img"><img src={beer.image_url} alt={beer.tagline} /></div>

        <div className="beer-detail-row">
          <div className="beer-detail-name">{beer.name}</div>
          <div className="beer-detail-lvl">{beer.attenuation_level}</div>
        </div>

        <div className="beer-detail-row">
          <div className="beer-detail-tag">{beer.tagline}</div>
          <div className="beer-detail-brd">{beer.first_brewed}</div>
        </div>

        <div className="beer-detail-desc">{beer.description}</div>
        <div className="beer-detail-contr">{beer.contributed_by}</div>

      </div>
    </div>

  )

}

export default BeerDetails;

