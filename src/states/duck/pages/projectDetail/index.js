import * as types from "./constants";

const initialState =[];

const projectDetail = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_PROJECT_PAGE_DETAIL:
            return action.projectDetail;
        default:
            return state
    }
};
export default projectDetail;
