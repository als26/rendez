var React = require('react');
var ReactDOM = require('react-dom');
var App = require ('./components/App');
var Joinroom = require ('./components/Joinroom');
var Createroom = require ('./components/Createroom');


//ReactDOM.render(<App/>, document.getElementById('react-container'));
ReactDOM.render(
  <div>
    <App/>
    <Joinroom/>
    <Createroom/>
  </div>,
  document.getElementById('react-container')
);
