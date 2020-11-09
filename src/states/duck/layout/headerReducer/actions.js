import * as constants from './constants';
import callApi from "../../../../utils/ApiCaller";

export const getAllRequest = () => {
    return (dispatch) => {
        return callApi('routes', 'GET', null).then(res => {
            dispatch(getAll(res.data))
        })
    }
};
export const getAll = (menus) => {
    return {
        type: constants.GET_ALL_MENU,
        menus
    }
};
