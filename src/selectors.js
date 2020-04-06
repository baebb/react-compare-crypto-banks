
const loanScanNameMap = {
    BlockFi: 'blockFi',
    CryptoCom: 'cryptoDotCom',
    dYdX: 'dYdX',
    Celsius: 'celsiusNetwork',
    CompoundV2: 'compound',
    Nuo: 'nuo',
    Hodlonaut: 'hodlnaut',
    AaveVariable: 'aave',
    Nexo: 'nexo',
    Ledn: 'ledn'
};

export const getRealTimeInterestRates = (rates) => {
    const ratesList = {};

    rates.forEach((rate) => {
        const lsId = rate.provider;
        if (loanScanNameMap[lsId]) {
            const dnId = loanScanNameMap[lsId];
            ratesList[dnId] = rate.supply;
        }
    });

    return ratesList;
};

// import nexoLogo from '../public/images/bankLogos/nexoLogo.svg';
// import blockFiLogo from '../public/images/bankLogos/blockfi.png';
// import youHodlerLogo from '../public/images/bankLogos/youHodlerLogo.svg';
// import lednLogo from '../public/images/bankLogos/lednLogo.png';
// import hodlnautLogo from '../public/images/bankLogos/hodlnautLogo.svg';
// import cryptoDotComLogo from '../public/images/bankLogos/cryptoDotComLogo.webp';
// import bitrueLogo from '../public/images/bankLogos/bitrueLogo.svg';
// import celsiusNetworkLogo from '../public/images/bankLogos/celsiusNetworkLogo.svg';
//
// export const productLogos = {
//     nexo: nexoLogo,
//     bitrue: bitrueLogo,
//     blockFi: blockFiLogo,
//     celsiusNetwork: celsiusNetworkLogo,
//     cryptoDotCom: cryptoDotComLogo,
//     hodlnaut: hodlnautLogo,
//     youHodler: youHodlerLogo,
//     ledn: lednLogo
// };

export const specialIds = ['blockFi', 'youHodler', 'ledn', 'coinloan', 'hodlnaut', 'celsiusNetwork'];

export const safeGet = (path, object) =>
    path.reduce((xs, x) =>
        (xs && xs[x]) ? xs[x] : null, object);

export const sortForMoney = (items) => {
    const sortedArray = [];
    const specialItems = [];
    const nonSpecialItems = [];

    items.forEach(item => {
        const orderLocation = specialIds.indexOf(item.fields.company.fields.id);

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

export const chooseDisplayCurrencies = interestRates => {
    const displayCount = 3;
    let displayCurrencies = [];

    if (interestRates['BTC'] && displayCurrencies.length < displayCount) {
        displayCurrencies.push('BTC');
    }

    if (interestRates['ETH'] && displayCurrencies.length < displayCount) {
        displayCurrencies.push('ETH');
    }

    if (interestRates['USDT'] && displayCurrencies.length < displayCount) {
        displayCurrencies.push('USDT');
    }

    if (interestRates['USDC'] && displayCurrencies.length < displayCount) {
        displayCurrencies.push('USDC');
    }

    if (interestRates['DAI'] && displayCurrencies.length < displayCount) {
        displayCurrencies.push('DAI');
    }

    if (interestRates['TUSD'] && displayCurrencies.length < displayCount) {
        displayCurrencies.push('TUSD');
    }

    if (interestRates['PAX'] && displayCurrencies.length < displayCount) {
        displayCurrencies.push('PAX');
    }

    if (interestRates['BUSD'] && displayCurrencies.length < displayCount) {
        displayCurrencies.push('BUSD');
    }

    if (interestRates['XRP'] && displayCurrencies.length < displayCount) {
        displayCurrencies.push('XRP');
    }

    if (interestRates['LTC'] && displayCurrencies.length < displayCount) {
        displayCurrencies.push('LTC');
    }

    return displayCurrencies;
};

export const formatLoanScanRates = (rates) => {
    let formattedRates = {};

    rates.forEach((item) => {
        const { symbol, rate } = item;
        formattedRates[symbol] = Number((rate*100).toFixed(2));
    });

    return formattedRates;
};

export const formatFloat = (number, places = 2) => Number((number * 100).toFixed(places));

export const formatBankMethods = (payoutMethods) => {
    const methodsArray = [];

    const hasStablecoins = payoutMethods.find(method => method === 'Stablecoins');
    const hasSEPA = payoutMethods.find(method => method === 'SEPA');
    const hasSWIFT = payoutMethods.find(method => method === 'SWIFT');

    if (hasStablecoins) {
        methodsArray.push('Stablecoins');
    }

    if (hasSEPA && hasSWIFT) {
        methodsArray.push('Bank wire (SWIFT or SEPA)');
    } else if (hasSEPA && !hasSWIFT) {
        methodsArray.push('Bank wire (SEPA)');
    } else if (!hasSEPA && hasSWIFT) {
        methodsArray.push('Bank wire (SWIFT)');
    }

    return methodsArray;
};
