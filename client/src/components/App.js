import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';
import Enter from './Enter';

const App = function () {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Enter} />
          <Route path="/home" component={Home} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
