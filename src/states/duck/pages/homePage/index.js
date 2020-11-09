import * as types from "./constants";

const initialState = {
    projects:[],
    news:[],
    status:false
};

const homePage = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_ALL_HOMEPAGE_PROJECTS:
            state.projects=action.projects;
            return {...state};
        case types.GET_ALL_HOMEPAGE_NEWS:
            state.news=action.news;
            return {...state};
        case types.TOGGLE_MODAL:
            state.status=!state.status;
            return {...state};
        default:
            return state
    }
};
export default homePage;
