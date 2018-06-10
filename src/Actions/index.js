import alt from '../alt.js';
import RequestHandler from '../Helpers/RequestHandler.jsx';
import { PortalAPI } from '../utils/constants';

class AppActions {
    constructor() {
        this.generateActions(
            'getHackerNewsArticlesSuccess',
            'setLoader',
            'handlePageNumberChange',
            'changeOrder'
        );
    }


    getHackerNewsArticles (callback) {
        RequestHandler.get(PortalAPI.getHackerNewsArticles)
            .then( (result) => {
                this.getHackerNewsArticlesSuccess(result);
            }).catch(error => {
                this.getHackerNewsArticlesSuccess(error);
            });
    }
}
export default alt.createActions(AppActions);
