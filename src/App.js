import { Route, Routes } from 'react-router-dom';
import Navigation from './components/navigation/navigation';
import routes from './components/routess';
import Coins from './components/coin/coins';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Coins />} />
        {routes.map((route) => (
          <Route
            key={route.id}
            path={route.path}
            element={route.element}
          />
        ))}
      </Routes>
    </>
  );
}

export default App;
