import * as constants from './constants';
import callApi from "../../../../utils/ApiCaller";


export const getNewDetailRequest = (id) => {
    return (dispatch) => {
        return callApi(`news/${id}`, "GET", null).then(res => {
            dispatch(getNewDetail(res.data));
        })
    }
};
export const getNewDetail = newDetail => {
    return {
        type: constants.GET_NEWSPAGE_DETAIL,
        newDetail
    }
};
