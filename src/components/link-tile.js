// NPM Dependencies
import React from 'react';

// Local Dependencies
import { Link } from 'components/Router';

// Image Dependencies
import InterestAccountsIcon from '../../public/images/icons/interest-accounts.svg';
import LoansIcon from '../../public/images/icons/loans.svg';

const tileContent = {
    loans: {
        url: '/crypto-loans',
        class: 'link-tile--purple',
        icon: LoansIcon,
        text: 'Loans'
    },
    interestAccounts: {
        url: '/crypto-interest-accounts',
        class: 'link-tile--red',
        icon: InterestAccountsIcon,
        text: 'Interest Accounts'
    }
};

const LinkTile = ({ linkId }) => {

    return (
        <Link to={tileContent[linkId].url} className={`col-xs-12 links-section__link-tile ${tileContent[linkId].class}`}>
            <div className="row">
                <div className="col-xs-4 col-sm-12 links-section__icon-wrapper">
                    <div className="links-section__icon-background">
                        <img
                            alt={`${tileContent[linkId].text}-icon`}
                            className="links-section__icon"
                            src={tileContent[linkId].icon}
                        />
                    </div>
                </div>
                <div className="col-xs-8 col-sm-12 links-section__link-text-wrapper">
                    <h4 className="links-section__link-text">
                        {tileContent[linkId].text}
                    </h4>
                </div>
            </div>
        </Link>
    );
};

export default LinkTile;
