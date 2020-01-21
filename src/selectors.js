// Local Dependencies
import nexoLogo from '../public/images/nexoLogo.svg';
import blockFiLogo from '../public/images/blockfi.png';
import youHodlerLogo from '../public/images/youHodlerLogo.svg';
import lednLogo from '../public/images/lednLogo.svg';
import hodlnautLogo from '../public/images/hodlnautLogo.svg';
import cryptoDotComLogo from '../public/images/cryptoDotComLogo.webp';
import bitrueLogo from '../public/images/bitrueLogo.svg';
import celciusNetworkLogo from '../public/images/celciusNetworkLogo.svg';

export const productLogos = {
    nexo: nexoLogo,
    bitrue: bitrueLogo,
    blockFi: blockFiLogo,
    celciusNetwork: celciusNetworkLogo,
    cryptoDotCom: cryptoDotComLogo,
    hodlnaut: hodlnautLogo,
    youHodler: youHodlerLogo,
    ledn: lednLogo
};

export const shuffle = (a) => {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
};
