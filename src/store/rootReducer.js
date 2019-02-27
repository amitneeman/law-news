import { combineReducers } from 'redux';
import { categoriesReducer } from './reducers/categories/categoriesReducer';
import { uiReducer } from './reducers/ui/uiReducer';

export const rootReducer = combineReducers({
    categories: categoriesReducer,
    ui: uiReducer
});

