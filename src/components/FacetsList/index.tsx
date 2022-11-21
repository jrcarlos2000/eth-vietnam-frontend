import './style.css';

type FacetType = {
  facetName: string,
  facetAddress: string,
  functions: any[],
}

type PropTypes = {
  facets: FacetType[];
}

const FacetsList = ({ facets }: PropTypes) => {
  if (!facets) facets = [];
  const renderFacet = (facet: any) => {
      return (
          <div className="facetListRow" key={facet.facetName}>
              <div className="facetListLeft">
                  <h3 className="facetListTitle">
                      {facet.facetName}    
                  </h3>
                  <a className="facetListAddress" target="_blank" href={`https://etherscan.io/address/${facet.facetAddress}`}>{facet.facetAddress}</a>
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