import './style.css';

type PropTypes = {
  history: any;
}

const FacetsHistory = ({ history }: PropTypes) => {
  const renderFacetHistory = (event: any) => {
      return (
          <div className="facetListRow" key={event.title}>
              <div className="facetListLeft">
                  <h3 className="facetListTitle">
                      {event.title}    
                  </h3>
                  <a className="facetListAddress" href="/">{event.address}</a>
              </div>
          </div>
      )
  }

  return (
    <div className="facetsHistoryContainer">
        <h3 className={"title"}>History</h3>
        <div className="facetsHistory">
            {
                history.map(renderFacetHistory)
            }
        </div>
    </div>  
  )
}

export default FacetsHistory;