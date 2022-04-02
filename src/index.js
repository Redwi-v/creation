import React from 'react';
import './index.scss';
import App from './App';
import * as ReactDOMClient from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

const root = ReactDOMClient.createRoot(document.getElementById('root'));

root.render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>,
);
