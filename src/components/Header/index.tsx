import './styles.css';
import '@rainbow-me/rainbowkit/styles.css';
import WalletButton from "./WalletButton";


const Header = () => {
    return (
        <nav className={'headerContent'}>
            <text className={"title"}>Facets.wiki</text>
            <img src={"/Vector.png"} alt={"logo"} className={"logo"} />
        <div className={"eth-text"}>
            <text >Ethereum Diamond Facets Library and Inspector</text>
        </div>
            <button className={"headerButtons"}>Facet</button>
            <button className={"headerButtons"}>Wiki</button>
            <button className={"plusButton"}>+</button> 
            <button className={"dashboardButton"} >Dashboard</button>
            <WalletButton />
        </nav>
      
    )
}
export default Header;