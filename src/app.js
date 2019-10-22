import React from 'react';

import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';
import Counter from './components/counter/counter.js';
import Dreamfield from './components/dreamfield';

import './styles/app.scss';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Dreamfield />
        <Header />
        <Counter />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
