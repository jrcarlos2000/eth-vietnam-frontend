import './styles.css';
import '@rainbow-me/rainbowkit/styles.css';
// import TwitterLogo from '../../assets/TwitterLogo.svg';
// import DiscordLogo from '../../assets/DiscordLogo.svg';

const Footer = () => {
    return (
        <>
            <nav className={'footerContent'}>
                <a href='#'><img src={'assets/TwitterLogo.svg'} /></a>
                <a href='#'><img src={'assets/DiscordLogo.svg'} /></a>
            </nav>
        </>
    )
}
export default Footer