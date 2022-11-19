import Header from "../Header";
import Footer from "../Footer";
import './styles.css';
import {Box} from "@material-ui/core";
import {list} from "@chakra-ui/react";


const HomePage = () => {

    return (
        <div >
            <Header />
            <div >
                <text className={"boxText"}>Facets Leaderboard</text>
                <Box className={"leaderBox"} >
                    <div className={"boxTopContent"}>
                    <text>name</text>
                    <text>used</text>
                        <line className={"verticalLine"}/>
                        <line className={"horizontalLine"}/>
                    </div>
                    <li className={"dataBox"}>data</li>
                </Box>
            </div>
            <div className={"container"}>
                <text className={"aboveFieldText"}>Search for Facets</text>
                <input className={"inputField"} placeholder={"Keyword"}  />
                <input className={"inputField2"} placeholder={"Enter address"}  />
                <text className={"aboveFieldText2"}>Facets visualizers</text>
            </div>
            <Footer/>
            </div>
    )
}
export default HomePage;