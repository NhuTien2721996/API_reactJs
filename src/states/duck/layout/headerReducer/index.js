import * as types from "./constants";

const initialState = [];

const routes = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_ALL_MENU:
            state=action.menus;
            return state;
        default:
            return state
    }
};
export default routes;
