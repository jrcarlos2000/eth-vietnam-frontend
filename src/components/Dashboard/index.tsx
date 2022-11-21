import './styles.css';
import { useState } from 'react';
import FacetsList from '../FacetsList';
import FacetsHistory from '../FacetsHistory';
import axios from 'axios';

const demoFacet = {
    facetName: 'DemoFacet',
    facetAddr: '0xa353373ef1f0d442676dd3130aea23e041942179',
}
const Dashboard = () => {
    const [facets, setFacets] = useState<any>([demoFacet]);
    const [history, setHistory] = useState<any>([demoFacet]);
    const [address, setAddress] = useState<string>("");

    const handleSubmit = async () => {
        
        const result: any = await axios.post('https://shark-app-ciezx.ondigitalocean.app/get-diamond-info', { "address": address });
        console.log(`result: ${JSON.stringify(result)}`);

        setFacets(result.data.facets);
        setHistory(result.data.history);
    }

    return (
        <div className="dashboardContainer">
            <h1 className={"title"}>Dashboard</h1>
            <div className="dashboardInputContainer">
                <label className={"addressLabel"}>diamond address</label>
                <input className={"inputField addressInput"} placeholder={"address"} onChange={(e: any) => setAddress(e.target.value)} />
                <button className="buttonGeneric addressSubmit" onClick={handleSubmit}>inspect</button>
            </div>
            <div className="dashbaordBodyContainer">
                <FacetsList facets={facets} />  
                <FacetsHistory history={history} />
            </div>
        </div>
    )
}
export default Dashboard;