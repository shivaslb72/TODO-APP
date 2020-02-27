import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import notesReducer from "../reducers/notesReducer";
import userReducer from "../reducers/userReducer"


const configureStore = () => {
    const store = createStore(
        combineReducers({
            notes: notesReducer,
            user: userReducer
        }),
        applyMiddleware(thunk)
    );
    return store;
};

export default configureStore;
