import React from 'react';

import {Header, Footer, About, Portfolio} from './containers';
import {Navbar} from './components';

const App = () => {


  


  return (
    <div className='App'>
    <Navbar />
    <Header />
    <About />
    <Portfolio />
    <Footer />
    

    </div>
  )
}

export default App