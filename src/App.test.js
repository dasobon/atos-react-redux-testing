import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//unit test, co jest prawdziwe, a co mockowane
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
