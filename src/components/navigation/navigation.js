import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../styles/coin.css';
import { FaMicrophone, FaLessThan } from 'react-icons/fa';
import { FcSettings } from 'react-icons/fc';

const Navigation = () => {
  const { singleCoinChanged } = useSelector((state) => state.coins);
  const Message = singleCoinChanged ? 'Crypto views' : ' Crypto/coin supply';
  const Message2 = singleCoinChanged ? 2015 : '';
  return (
    <div className="navigation">
      <div className="nav-left">
        <Link to="/Coins" className="link">
          <FaLessThan className="less-than" />
          {Message2}
        </Link>
      </div>
      <div className="nav-center">
        <p>{Message}</p>
      </div>
      <div className="nav-right">
        <div className="mic-set">
          <FaMicrophone className="mic" />
          <FcSettings className="settings" />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
