import './styles.css';
import '@rainbow-me/rainbowkit/styles.css';
import TwitterLogo from '../../assets/TwitterLogo.svg';
import DiscordLogo from '../../assets/DiscordLogo.svg';

const Footer = () => {
    return (
        <>
            <nav className={'footerContent'}>
                <a href='#'><img src={TwitterLogo} /></a>
                <a href='#'><img src={DiscordLogo} /></a>
            </nav>
        </>
    )
}
export default Footer