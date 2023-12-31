import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../styles/coin.css';

function Coin({ coin, index }) {
  let bgColor = '';
  const variedindices = [0, 3, 4, 7, 8, 11, 12, 15, 16, 19, 20];
  const nonVariedindices = [1, 2, 5, 6, 9, 10, 13, 14, 17, 18];

  if (variedindices.includes(index)) {
    bgColor = 'odd';
  } else if (nonVariedindices.includes(index)) {
    bgColor = 'even';
  }
  const roundedPrice = Math.round(coin.price);
  return (
    <Link to={`/CoinStats/${coin.uuid}`} className={`link ${bgColor}`}>
      <div data-testid="coin-card" className="card-items">
        <div className="img-container upper-left">
          <img alt="coin.png" src={coin.iconUrl} className="card-img" />
        </div>
        <div className="card-info lower-right">
          <h3>{coin.name}</h3>
          <p>{roundedPrice}</p>
        </div>
      </div>
    </Link>
  );
}

Coin.propTypes = {
  coin: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    uuid: PropTypes.string.isRequired,
    iconUrl: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default Coin;
