import { combineReducers } from 'redux';
import WishReducer from './wishReducer';
import CartReducer from './cartReducer';

const SiteReducer = combineReducers({
    CartReducer,
    WishReducer
})

export default SiteReducer;