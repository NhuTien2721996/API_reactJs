import * as types from "./constants";

const initialState = [];

const newsPage = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_NEWSPAGE_DETAIL:
            return action.newDetail;
        default:
            return state
    }
};
export default newsPage;
