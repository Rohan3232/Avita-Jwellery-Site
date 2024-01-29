import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { legacy_createStore as createStore } from 'redux';
import { Provider } from 'react-redux';
import BangleItems from './components/reducers/BangleItems';
import { createRoot } from 'react-dom/client';

const store = createStore(BangleItems);


const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<Provider store={store}><App /></Provider>);