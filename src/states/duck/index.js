import { combineReducers } from "redux";
import routes from "./layout/headerReducer/index"
import homePage from "./pages/homePage/index";
import newsPage from "./pages/newDetail/index";
import projectDetail from "./pages/projectDetail/index";

const rootReducer = combineReducers({
    homePage,routes,newsPage,projectDetail
});
export default rootReducer;
