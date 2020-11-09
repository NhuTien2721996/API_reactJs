import * as constants from './constants';
import callApi from "../../../../utils/ApiCaller";


export const getProjectRequestDetail = (id) => {
    return (dispatch) => {
        return callApi(`projects/${id}`, "GET", null).then(res => {
            dispatch(getProjectDetail(res.data));
        })
    }
};
export const getProjectDetail = projectDetail => {
    return {
        type: constants.GET_PROJECT_PAGE_DETAIL,
        projectDetail
    }
};

