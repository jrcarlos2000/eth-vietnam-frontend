import './styles.css';
import '@rainbow-me/rainbowkit/styles.css';
import WalletButton from "./WalletButton";

const Header = () => {
    return (
        <>
            
        <nav className={'headerContent'}>
            <text >Facets.wiki</text>
            <img src={"/Vector.png"} alt={"logo"} className={"logo"} />
    <div className={"eth-text"}>
            <text >Ethereum Diamond Facets Library and Inspector</text>
     </div>
            <button className={"headerButtons"} >Dashboard</button>
            <button className={"headerButtons"}>+</button>
            <button className={"headerButtons"}>Wiki</button>
            <button className={"headerButtons"}>Facet</button>
            <WalletButton />
        </nav>
                
        </>
    )
}
export default Header;