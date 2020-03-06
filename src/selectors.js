// Local Dependencies
import nexoLogo from '../public/images/bankLogos/nexoLogo.svg';
import blockFiLogo from '../public/images/bankLogos/blockfi.png';
import youHodlerLogo from '../public/images/bankLogos/youHodlerLogo.svg';
import lednLogo from '../public/images/bankLogos/lednLogo.png';
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

export const specialIds = ['blockFi', 'youHodler', 'ledn', 'celsiusNetwork'];

export const sortForMoney = (items, comparator) => {
    const sortedArray = [];
    const specialItems = [];
    const nonSpecialItems = [];

    items.forEach(item => {
        const orderLocation = specialIds.indexOf(item[comparator]);

        if (orderLocation !== -1) {
            specialItems[orderLocation] = item;
        } else {
            nonSpecialItems.push(item);
        }
    });

    sortedArray.push(...specialItems);
    sortedArray.push(...nonSpecialItems);

    return sortedArray;
};

export const sortAlphabetical = (items, comparator) =>
    items.sort((a, b) => a[comparator].localeCompare(b[comparator]));

export const formatPublishDate = (publishDate) => {
    const objDate = new Date(publishDate);

    const day = objDate.toLocaleString("en", { day: "numeric" });
    const month = objDate.toLocaleString("en", { month: "long"  });
    const year = objDate.toLocaleString("en", { year: "numeric"});

    return `${month} ${day}, ${year}`;
};

export const getReviewScores = (reviews) => {
    const scores = {};

    reviews.forEach(({ fields: review }) => {
        const { productId, rating } = review;
        scores[productId] = rating;
    });

    return scores;
};

export const getReviewLinks = (reviews) => {
    const links = {};

    reviews.forEach(({ fields: review }) => {
        const { productId, slug } = review;
        links[productId] = slug;
    });

    return links;
};
