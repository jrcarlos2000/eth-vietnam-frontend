import './styles.css';
import { useState } from 'react';
import FacetsList from '../FacetsList';
import FacetsHistory from '../FacetsHistory';
import axios from 'axios';

const demoFacet = {
    title: 'DemoFacet',
    address: '0x2f2ef2f2f2efe2f2f2f2f2',
}
const Dashboard = () => {
    const [facets, setFacets] = useState<any>([demoFacet]);
    const [address, setAddress] = useState<string>("");

    const handleSubmit = async () => {
        // axios({
        //     method: 'post',
        //     url: baseUrl + 'applications/' + appName + '/dataexport/plantypes' + plan,
        //     headers: {}, 
        //     data: {
        //       foo: 'bar', // This is the body part
        //     }
        //   });

        const result = await axios({
            url: 'https://shark-app-ciezx.ondigitalocean.app/get-diamond-info', 
            data: { address: address },
            headers: {},
            method: 'get',
        });
        console.log(`result: ${result}`);

        setFacets(result.data);
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
                <FacetsHistory facets={facets} />
            </div>
        </div>
    )
}
export default Dashboard;