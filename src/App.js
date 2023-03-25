import './App.css';
import Header from './components/Header/Header';
import { Fragment } from 'react';
import ContentItems from './components/Content/ContentItems';

function App() {
  return (
    <Fragment className="App">
      <Header />
      <ContentItems />
    </Fragment>
  );
}

export default App;
