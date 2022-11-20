import './styles.css';
import '@rainbow-me/rainbowkit/styles.css';
import WalletButton from "./WalletButton";
import { Flex, Box } from '@chakra-ui/react';
import facetsLogo from '../../assets/facets-logo.svg';

const Header = () => {
    return (
        <nav className={'headerContent'}>
                <div className={'headerLeft'}>
                    <text className={"headerTitle"}>Facets.wiki</text>
                    <img src={facetsLogo} alt={"logo"} className={"headerLogo"} />
                    <div className={"headerEthText"}>
                        <text>Ethereum Diamond Facets Library and Inspector</text>
                    </div>
                </div>
                <div className={'headerRight'}>
                    <button className={"headerButtons"}>Facet</button>
                    <button className={"headerButtons"}>Wiki</button>
                    <button className={"plusButton"}>+</button> 
                    <button className={"dashboardButton"} >Dashboard</button>
                    <WalletButton />
                </div>
        </nav>
      
    )
}
export default Header;