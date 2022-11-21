import './style.css';
import { useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../utils/constants';
import { useSigner } from 'wagmi'

type FacetType = {
  facetName: string,
  facetAddr: string,
  functions: any[],
}

type PropTypes = {
  facets: FacetType[];
  address: string;
}

const FacetsList = ({ facets, address }: PropTypes) => {
  const { data: signer, isError, isLoading } = useSigner()
  const [isOpen, setIsOpen] = useState<any>({});
  if (!facets) facets = [];
  const openRow = (i:number) => {
    const newIsOpen = {...isOpen};
    newIsOpen[i] = !Boolean(newIsOpen[i]);
    setIsOpen(newIsOpen);
  }
  const removeFunction = async (functionName: string, facetAddr: string) => {
    const result = await axios.post(`${API_URL}/update-diamond`, {
      funcList: [functionName],
      action: 'remove',
      facetAddr
    });
    console.log('post result: ', JSON.stringify(result.data));

    const response = await signer?.sendTransaction(
      {
        data: result.data.payload,
        to: address,
        gasLimit: '100000'
      }
    );
    console.log('response: ', response);
    /* 
    signer.sendTransaction(
      { 
        data:"0x1f931c1c000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000140000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000600000000000000000000000000000000000000000000000000000000000000001661c5780000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"
        to: "diamondAddress",
        gasLimit: "100000"
      }
    )
    */
  }
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
                            <div className="facetsListContainer">
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
                            <div className="removeFacetContainer">
                              <button className="buttonGeneric buttonRemove" onClick={() => removeFunction(func.functionName, func.facetAddr)}>remove</button>  
                            </div>
                          </div>
                        )
                      })
                    }
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