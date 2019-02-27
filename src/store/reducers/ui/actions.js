export const actionTypes = {
    TOGGLE_MENU: "TOGGLE_MENU",
}

export const toggleMenu = (current) => {
    return dispatch => {
        dispatch({
            type: actionTypes.TOGGLE_MENU,
            current
        })
    }
}