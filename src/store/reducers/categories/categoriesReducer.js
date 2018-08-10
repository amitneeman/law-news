import {actionTypes} from './actions';

const initialState = {};

export const categoriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_CATEGORY:
            return { ...state, [action.category.name] : action.category.posts}
        case actionTypes.GET_CATEGORIES:
            return action.categories
        default:
            return state;
    }
}