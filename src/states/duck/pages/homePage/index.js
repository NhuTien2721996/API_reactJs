import * as types from "./constants";

const initialState = {
    projects: [],
    news: [],
    status: false
};

const homePage = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_ALL_HOMEPAGE_PROJECTS:
            return {...state, projects: action.projects};
        case types.GET_ALL_HOMEPAGE_NEWS:
            return {...state, news: action.news};
        case types.TOGGLE_MODAL:
            return {...state, status: !state.status};
        default:
            return state
    }
};
export default homePage;
