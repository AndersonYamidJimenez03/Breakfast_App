import './App.css';
import Header from './components/Header/Header';
import { Fragment } from 'react';
import ContentItems from './components/Content/ContentItems';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <Fragment className="App">
      <Cart />
      <Header />
      <ContentItems />
    </Fragment>
  );
}

export default App;
