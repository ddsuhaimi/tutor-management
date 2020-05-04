import React from 'react';
import './App.scss';
import Navbar from './components/layout/Navbar'
import Tutors from './components/tutors/Tutors'

import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <Provider store={store}>

    <div className="App">
      <Navbar />

      <Tutors />
   </div>
    </Provider>
  );
}

export default App;
