import 'bootstrap-webpack';
import './stylesheets/index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import TabulateApp from './components/TabulateApp';

ReactDOM.render(
  <TabulateApp />
, document.getElementById('app'));
