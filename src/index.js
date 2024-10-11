import React from 'react';
import './index.css';
import App from './App';
import { legacy_createStore as createStore } from 'redux';
import { Provider } from 'react-redux';
import BangleItems from './components/reducers/BangleItems';
import { createRoot } from 'react-dom/client';

const store = createStore(BangleItems);


const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Provider store={store}><App /></Provider>);