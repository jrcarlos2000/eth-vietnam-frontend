import './styles.css';
import { useState } from 'react';
import FacetsList from '../FacetsList';

const demoFacet = {
    title: 'DemoFacet',
    address: '0x2f2ef2f2f2efe2f2f2f2f2',
}
const Dashboard = () => {
    const [facets, setFacets] = useState<any>([demoFacet]);


    return (
        <div className="dashboardContainer">
            <h1 className={"title"}>Dashboard</h1>
            <div className="dashboardInputContainer">
                <label className={"addressLabel"}>diamond address</label>
                <input className={"inputField addressInput"} placeholder={"address"}/>
            </div>
            <div className="dashbaordBodyContainer">
                <FacetsList facets={facets} />  
            </div>
        </div>
    )
}
export default Dashboard;