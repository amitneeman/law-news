import {actionTypes} from './actions';

const initialState = {
    sideBarOpen: false
};

export const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.TOGGLE_MENU:
            return { ...state, sideBarOpen : !action.current}
        default:
            return state;
    }
}
