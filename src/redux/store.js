import { legacy_createStore} from 'redux';
import rootReducer from './rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

    const composeEnhancers = composeWithDevTools();

 const store = legacy_createStore(rootReducer, composeEnhancers);
 console.log(store.getState())
 export default store;