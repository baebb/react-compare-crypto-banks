/* eslint-disable */
const items = [
    {
        logo: '',
        url: 'https://blockfi.com',
        title: 'Block Fi Interest Account',
        companyName: 'Block Fi',
        savingsInterestRate: {
            BTC: 6.2,
            ETH: 2.5,
            GUSD: 4.2
        },
        minimums: {
            BTC: 0.5,
            ETH: 25,
            GUSD: 1500
        },
        fees: {
            BTC: 0.0025,
            ETH: 0.0015,
            GUSD: 5
        },
        interestPayout: 'Paid monthly',
        interestPayoutCurrencies: ['BTC', 'ETH', 'GUSD'],
        lockUpPeriod: 'Withdraw anytime',
        security: ['Bitgo Insured Custody', '2FA'],
        geoAvailability: 'US only',
        requirements: [
            'Email address',
            'US phone number',
            'Photo of your passport, driver’s license or other ID card',
            'Live in any of the permitted countries'
        ],
        keyPoints: [
            'Earn compound interest. Unlike other crypto storage methods, BlockFi pays interest on your deposit and savings, up to 6.2% APY',
            'Security. Your crypto is held by the Gemini Trust Company, regulated by the New York Department of Financial Services.',
            'Withdraw anytime. While BlockFi says it can take up to seven days to process withdrawals, most withdrawals are pushed through on the same day.'
        ]
    }
];

export default items;
