import './style.css';
import { useState } from 'react';

type FacetType = {
  facetName: string,
  facetAddr: string,
  functions: any[],
}

type PropTypes = {
  facets: FacetType[];
}

const FacetsList = ({ facets }: PropTypes) => {
  const [isOpen, setIsOpen] = useState<any>({});
  if (!facets) facets = [];
  const openRow = (i:number) => {
    const newIsOpen = {...isOpen};
    newIsOpen[i] = !Boolean(newIsOpen[i]);
    setIsOpen(newIsOpen);
  }
  console.log('isOpen ', isOpen);
  const renderFacet = (facet: any, i: number) => {
      return (
          <div className={`facetListRow `} key={`${facet.facetName}_${i}`}>
            <div className="facetListRowUpper">
              <div className="facetListLeft">
                  <h3 className="facetListTitle">
                      {facet.facetName}    
                  </h3>
                  <a className="facetListAddress" target="_blank" href={`https://etherscan.io/address/${facet.facetAddr}`}>
                    {facet.facetAddr}{' '}
                    <img src="/assets/regularlink-external.svg" className="externalLinkIcon" />
                  </a>
              </div>
              <div className="facetsListRight">
                <div className="facetsListAngle">
                  <img src="/assets/arrow-angle-down.svg" onClick={() => openRow(i)} className={`angleArrowIcon ${isOpen[i] && 'angleArrowIcon--up'}`} />  
                </div>
              </div>
            </div>
            {
              isOpen[i] && (
                <div className="facetListLower">
                  <p className="facetListFunctionsTitle">Functions:</p>
                  <div className="functionsList">
                    {
                      facet.functions && facet.functions.map((func: any, j: number) => {
                        return (
                          <div className="functionsListRow" key={j}>
                            {
                              Object.keys(func).map((key: string, k: number) => (
                                  <div className="funcDetailRow" key={k}>
                                    <div className="funcDetailRowHeading">
                                      {key}: 
                                    </div>
                                    <div className="funcDetailRowData">
                                      {func[key]}  
                                    </div>
                                  </div>
                              ))
                            }
                          </div>
                        )
                      })
                    }
                    
                  {/* "functions": [
                {
                    "_id": "637b0f8bf7a12b0457d7f5d3",
                    "selector": "0xcdffacc6",
                    "functionName": "facetAddress(bytes4)",
                    "facetAddr": "0x77518beac3fb4AB2bd6F5A722f31b6cF5E4B91E1",
                    "facetName": "DiamondLoupeFacet"
                }, */}
                  </div>
                </div>
              )
            
            }
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