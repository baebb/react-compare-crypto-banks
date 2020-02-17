// Local Dependencies
import nexoLogo from '../public/images/bankLogos/nexoLogo.svg';
import blockFiLogo from '../public/images/bankLogos/blockfi.png';
import youHodlerLogo from '../public/images/bankLogos/youHodlerLogo.svg';
import lednLogo from '../public/images/bankLogos/lednLogo.svg';
import hodlnautLogo from '../public/images/bankLogos/hodlnautLogo.svg';
import cryptoDotComLogo from '../public/images/bankLogos/cryptoDotComLogo.webp';
import bitrueLogo from '../public/images/bankLogos/bitrueLogo.svg';
import celciusNetworkLogo from '../public/images/bankLogos/celciusNetworkLogo.svg';

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

export const sortAlphabetical = (items, comparator) =>
    items.sort((a, b) => a[comparator].localeCompare(b[comparator]));

export const formatPublishDate = (publishDate) => {
    const objDate = new Date(publishDate);

    const day = objDate.toLocaleString("en", { day: "numeric" });
    const month = objDate.toLocaleString("en", { month: "long"  });
    const year = objDate.toLocaleString("en", { year: "numeric"});

    return `${day} ${month} ${year}`;
};
