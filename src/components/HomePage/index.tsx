
import './styles.css';
import {Box} from "@material-ui/core";
import UploadFacet from "../UploadFacet";

const HomePage = () => {

    return (
        <div className="homeContainer">
            {/*<Dashboard/>*/}
            {/*<UploadFacet/>*/}
            <div className="leaderboardContainer">
                <h1 className={"boxText"}>Facets Leaderboard</h1>
                <Box className={"leaderBox"} >
                    <div className={"boxTopContent"}>
                    <p>name</p>
                    <p>used</p>
                        <line className={"verticalLine"}/>
                        <line className={"horizontalLine"}/>
                    </div>
                    <li className={"dataBox"}>data</li>
                </Box>
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