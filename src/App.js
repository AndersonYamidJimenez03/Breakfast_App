import './App.css';
import Header from './components/Header/Header';
import { useState } from 'react';
import ContentItems from './components/Content/ContentItems';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';

function App() {
  const [orderMeu, setOrderMenu] = useState(false);

  const orderViewHandler = () => {
    setOrderMenu(true);
  }

  const orderHideHandler = () => {
    setOrderMenu(false);
  }
  return (
    <CartProvider>
      {orderMeu && <Cart onOrderHideHandler = {orderHideHandler} />}
      <Header onOrderViewHandler={orderViewHandler}/>
      <main>
        <ContentItems />
      </main>
    </CartProvider>
  );
}

export default App;
