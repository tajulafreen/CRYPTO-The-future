import CoinStats from './coinStatus/coinstatus';
import Coins from './coin/coins';

const routes = [
  {
    id: 1,
    path: '/Coins',
    element: <Coins />,
  },
  {
    id: 2,
    path: '/CoinStats/:coinId',
    element: <CoinStats />,
  },
];

export default routes;
