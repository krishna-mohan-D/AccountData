import  {createStore, applyMiddleware,compose} from 'redux';
import  {AccountReducer} from './reducers/AccountReducer';
import thunk from 'redux-thunk';

export const store = createStore(AccountReducer,compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    ));

