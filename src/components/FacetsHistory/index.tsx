import './style.css';

type PropTypes = {
  facets: any;
}

const FacetsHistory = ({ facets }: PropTypes) => {
  const renderFacetHistory = (facet: any) => {
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
    <div className="facetsHistoryContainer">
        <h3 className={"title"}>History</h3>
        <div className="facetsHistory">
            {
                facets.map(renderFacetHistory)
            }
        </div>
    </div>  
  )
}

export default FacetsHistory;