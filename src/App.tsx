import React from 'react';
import './App.css';
import AppRoutes from "./components/routes/AppRoutes";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter } from 'react-router-dom';
import { createClient, configureChains, chain,WagmiConfig } from 'wagmi'
import '@rainbow-me/rainbowkit/styles.css';
import {
    getDefaultWallets,
    RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { publicProvider } from 'wagmi/providers/public';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import '@rainbow-me/rainbowkit/styles.css';



const {chains, provider} = configureChains([chain.polygonMumbai], [publicProvider()]);

const {connectors} =getDefaultWallets({
    appName:"Eth Vietnam",
    chains,
});

const wagmiClient = createClient({
    connectors,
    provider,
})

function App() {
  return (
    <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains}>
          <BrowserRouter>
            <Header />
            <AppRoutes />
            <Footer />
          </BrowserRouter>
        </RainbowKitProvider>
    </WagmiConfig>
  )
}
export default App;
