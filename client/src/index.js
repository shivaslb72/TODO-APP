import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/configureStore";

import { Provider } from "react-redux";
import App from "./App";
import { startGetNotes } from "./actions/notes"

const store = configureStore();

store.subscribe(() => console.log(store.getState()));
console.log(store.getState());

store.dispatch(startGetNotes());




const jsx = (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById("root"));
