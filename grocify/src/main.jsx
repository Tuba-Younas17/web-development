import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { store } from "./reduxToolkit/app/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<Provider store={store}>
		<Router>
			<App />
		</Router>
	</Provider>
	// <Router>
	// 	<App />
	// </Router>
);
