import * as constants from './constants';
import callApi from "../../../../utils/ApiCaller";

export const getAllProjectRequest = () => {
    return (dispatch) => {
        return callApi('projects', 'GET', null).then(res => {
            dispatch(getAllProject(res.data));
        });
    }
};
export const getAllProject = projects => {
    return {
        type: constants.GET_ALL_HOMEPAGE_PROJECTS,
        projects
    }
};

export const getAllNewsRequest = () => {
    return (dispatch) => {
        return callApi('news', 'GET', null).then(res => {
            dispatch(getAllNews(res.data));

        });
    }
};
export const getAllNews = news => {
    return {
        type: constants.GET_ALL_HOMEPAGE_NEWS,
        news
    }
};
export const onToggleModal = () => {
    return {
        type: constants.TOGGLE_MODAL,
    }
};

