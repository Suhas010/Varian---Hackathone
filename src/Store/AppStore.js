import alt from '../alt.js';
import AppActions from '../Actions/';
import _ from 'lodash';

class AppStore {
    constructor() {
        this.bindActions(AppActions);
        this.clearStore();
    }

    clearStore() {
        this.response = null;
        this.data = null;
        this.errorCode = null;
        this.isLoading = true;
        this.pageNumber = 0;
        this.totalPages = 0;
        this.minRecords = 0;
        this.maxRecords = 16;
        this.order = 'asc';

    }

    setLoader (value) {
        this.isLoading = value;
    }

    getHackerNewsArticlesSuccess (response) {
        let { data, errorCode } = response;
        if (data instanceof Array) {
            data.splice(0,1);
        }
        this.response = data;
        this.totalPages = Math.floor(data.length/16) + 1;
        this.data = data.slice(this.minRecords, this.maxRecords);
        this.sort();
        this.isLoading = false;
        this.errorCode = errorCode;
    }

    changeOrder(){
        if (this.order === 'asc') {
            this.order = 'desc';
        } else {
            this.order = 'asc'
        }
        this.sort();
    }

    sort() {
        let data  = _.cloneDeep(this.data);
        _.map(data, article =>{
            article.author = article.author.toUpperCase();

        })
        this.data = _.orderBy(data, ['author'],[this.order]);
    }
    
    handlePageNumberChange (type) {
        if (type) {
            if (this.pageNumber <= this.totalPages) {
                this.pageNumber++;
                this.minRecords = this.maxRecords;
                if (this.maxRecords < this.response.length){
                    this.maxRecords = this.maxRecords + 16;
                    this.data = this.response.slice(this.minRecords, this.maxRecords);
                    this.sort();
                }
            }

        } else {
            if (this.pageNumber !== 0) {
                this.pageNumber--;
                this.minRecords = this.minRecords - 16;
                this.maxRecords = this.maxRecords - 16;
                this.data = this.response.slice(this.minRecords, this.maxRecords);
                this.sort();
                
            }
        }

    }
    
}
export default alt.createStore(AppStore, 'AppStore');
