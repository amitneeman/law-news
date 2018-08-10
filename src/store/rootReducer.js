import { combineReducers } from 'redux';
import { categoriesReducer } from './reducers/categories/categoriesReducer';
export const rootReducer = combineReducers({
    categories: categoriesReducer
});

