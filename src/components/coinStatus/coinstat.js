import React from 'react';
import PropTypes from 'prop-types';
import { BsArrowRightCircle } from 'react-icons/bs';

function Coinstat({ singleCoin }) {
  const reducetoThreeDigits = (value) => {
    if (value === undefined) {
      return '';
    }
    const stringValue = value.toString();
    return stringValue.length <= 3 ? stringValue : stringValue.substring(0, 3);
  };

  if (!singleCoin) {
    return <div>loading</div>;
  }

  return (
    <div className="coinstats-container">
      <div className="items">
        <div className="card-top stats">
          <div className="img-container">
            <img alt="coin.png" src={singleCoin.iconUrl} className="top-img" />
          </div>
          <div className="card-info stats-info">
            <h1>
              {singleCoin.name}
            </h1>
            <h3>
              {reducetoThreeDigits(singleCoin.marketCap)}
            </h3>
            <p> supply</p>
          </div>
        </div>
        <div className="coin-details even">
          <h3>Number Of Markets</h3>
          <div className="coin-supply">
            <p>{reducetoThreeDigits(singleCoin.numberOfMarkets)}</p>
            <p>supply</p>
            <BsArrowRightCircle />
          </div>
        </div>
        <div className="coin-details odd">
          <h3>Number Of Exchanges</h3>
          <div className="coin-supply">
            <p>{reducetoThreeDigits(singleCoin.numberOfExchanges)}</p>
            <p>supply</p>
            <BsArrowRightCircle />
          </div>
        </div>
        <div className="coin-details even">
          <h3>Number Of Marketcap</h3>
          <div className="coin-supply">
            <p>{reducetoThreeDigits(singleCoin.marketCap)}</p>
            <p>supply</p>
            <BsArrowRightCircle />
          </div>
        </div>
        <div className="coin-details odd">
          <h3>fully Diluted MarketCap</h3>
          <div className="coin-supply">
            <p>{reducetoThreeDigits(singleCoin.fullyDilutedMarketCap)}</p>
            <p>supply</p>
            <BsArrowRightCircle />
          </div>
        </div>
        <div className="coin-details even">
          <h3>Price</h3>
          <div className="coin-supply">
            <p>{reducetoThreeDigits(singleCoin.price)}</p>
            <p>supply</p>
            <BsArrowRightCircle />
          </div>
        </div>
        <div className="coin-details odd">
          <h3> BTC Price</h3>
          <div className="coin-supply">
            <p>{reducetoThreeDigits(singleCoin.btcPrice)}</p>
            <p>supply</p>
            <BsArrowRightCircle />
          </div>
        </div>
        <div className="coin-details even">
          <h3> PriceAt</h3>
          <div className="coin-supply">
            <p>{reducetoThreeDigits(singleCoin.priceAt)}</p>
            <p>supply</p>
            <BsArrowRightCircle />
          </div>
        </div>
        <div className="coin-details odd">
          <h3> Number Of Changes</h3>
          <div className="coin-supply">
            <p>{reducetoThreeDigits(singleCoin.change)}</p>
            <p>supply</p>
            <BsArrowRightCircle />
          </div>
        </div>
        <div className="coin-details even">
          <h3> Number Of Rank</h3>
          <div className="coin-supply">
            <p>{reducetoThreeDigits(singleCoin.rank)}</p>
            <p>supply</p>
            <BsArrowRightCircle />
          </div>
        </div>
      </div>
    </div>
  );
}

Coinstat.propTypes = {
  singleCoin: PropTypes.shape({
    name: PropTypes.string.isRequired,
    numberOfMarkets: PropTypes.number.isRequired,
    numberOfExchanges: PropTypes.number.isRequired,
    marketCap: PropTypes.number.isRequired,
    fullyDilutedMarketCap: PropTypes.number.isRequired,
    price: PropTypes.string.isRequired,
    btcPrice: PropTypes.string.isRequired,
    priceAt: PropTypes.number.isRequired,
    change: PropTypes.string.isRequired,
    rank: PropTypes.number.isRequired,
    iconUrl: PropTypes.string.isRequired,
  }).isRequired,
};
export default Coinstat;
