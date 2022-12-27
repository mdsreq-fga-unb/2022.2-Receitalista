import { Outlet } from "react-router-dom"
import { useState } from 'react';
import Header from './components/Header/Header';

function App() {
  const [setCartIsShown] = useState(false);

  function showCartHandler() {
    setCartIsShown(true);
  }

  return (
    <div className="App">
      <Header onShowCart={showCartHandler} />
      <Outlet />
    </div>
  );
}

export default App;
