
import './styles.css';
import UploadFacet from "../UploadFacet";
import FacetsTable from '../FacetsTable/index';
import { useEffect, useState } from 'react';
import axios from 'axios';

const HomePage = () => {
    const [facets, setFacets] = useState<any>([]);
    useEffect(() => {
        loadFacets();
    }, []);

    const loadFacets = async () => {
        const result = await axios.get('https://shark-app-ciezx.ondigitalocean.app/facets');
        console.log(`resutl: ${JSON.stringify(result.data.facets)}`);
        
        setFacets(result?.data?.facets);
    }

    return (
        <div className="homeContainer">
            <div className="leaderboardContainer">
               <FacetsTable data={facets} />
            </div>
            <div className={"searchContainer"}>
                <text className={"aboveFieldText"}>Search for Facets</text>
                <input className={"inputField"} placeholder={"Keyword"} />
                <input className={"inputField2"} placeholder={"Enter address"}  />
                <text className={"aboveFieldText2"}>Facets visualizers</text>
            </div>
        </div>
    )
}
export default HomePage;