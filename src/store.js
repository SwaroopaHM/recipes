
import { createStore } from 'redux';
import reducers from './reducers'

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem("state");
        if (!serializedState) return undefined;
        else return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};

export const saveState = state => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem("state", serializedState);
    } catch (err) {
    }
};


const persistedStore = loadState();
const initialState = persistedStore;

const store = createStore(reducers, initialState)

store.subscribe(() => {
    saveState(store.getState());
});

export default store;