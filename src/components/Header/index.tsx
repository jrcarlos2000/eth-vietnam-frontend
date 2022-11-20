import './styles.css';
import '@rainbow-me/rainbowkit/styles.css';
import WalletButton from "./WalletButton";
import facetsLogo from '../../assets/facets-logo.svg';
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    return (
        <nav className={'headerContent'}>
                <div className={'headerLeft'}>
                    <text className={"headerTitle"}>Facets.wiki</text>
                    <img src={facetsLogo} alt={"logo"} className={"headerLogo"} />
                    <div className={"headerEthText"}>
                        <p>Ethereum Diamond Facets Library and Inspector</p>
                    </div>
                </div>
                <div className={'headerRight'}>
                    <button className={"headerButtons"} onClick={() => navigate('/upload-facet')}>Facet</button>
                    <button className={"headerButtons"}>Wiki</button>
                    <button className={"dashboardButton"} >Dashboard</button>
                    <WalletButton />
                </div>
        </nav>
      
    )
}
export default Header;