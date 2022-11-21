import './style.css';

type PropTypes = {
  facets: any;
}

const FacetsList = ({ facets }: PropTypes) => {
  const renderFacet = (facet: any) => {
      return (
          <div className="facetListRow">
              <div className="facetListLeft">
                  <h3 className="facetListTitle">
                      {facet.title}    
                  </h3>
                  <a className="facetListAddress" href="/">{facet.address}</a>
              </div>
          </div>
      )
  }

  return (
    <div className="facetsListContainer">
        <h3 className={"title"}>Facets</h3>
        <div className="facetsList">
            {
                facets.map(renderFacet)
            }
        </div>
    </div>  
  )
}

export default FacetsList;