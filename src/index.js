import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import store from "./redux/redux-store";
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
	 <BrowserRouter>
		 <Provider store={store}>
			 <App state={store.getState()}/>
		 </Provider>
	 </BrowserRouter>,
	 document.getElementById('root')
);
reportWebVitals();
