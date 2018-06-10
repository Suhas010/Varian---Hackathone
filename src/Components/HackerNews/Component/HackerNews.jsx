import React, { Component } from 'react';

import {
    cloneDeep
} from 'lodash';

import Spinner from '../../Spinner/Component/Spinner.jsx';
import Popup from '../../Popup/Component/Popup.jsx';
import List from '../../List/Component/List.jsx';

import AppActions from '../../../Actions/';
import AppStore from '../../../Store/AppStore';

import compareData from '../../../utils/common';
import { ERROR_CODE } from '../../../utils/constants';
import strings from '../Constants';

import './HackerNews.css';
class HackerNews extends Component {
    constructor (props) {
        super(props);
        this.state = {
            isError: false,
            showPopupMessage: false,
            AppStore: AppStore.getState()
        }
    }

    componentDidMount () {
        AppActions.setLoader(true);
        AppActions.getHackerNewsArticles (
            this.getHackerNewsArticlesSuccess
        );
        AppStore.listen(this.onChange);
    }

    shouldComponentUpdate(nextProps, nextState) {
        const shouldRender = compareData(
            { ...this.state.AppStore },
            { ...nextState.AppStore },
            [
                'errorCode',
                'data',
                'isLoading',
                'totalPages',
                'pageNumber'
            ]);
        return shouldRender;
    }

    onChange = (state) => {
        const newState = cloneDeep(this.state);
        newState[state.displayName] = cloneDeep(state);
        this.setState(newState);
    }

    // show loading spinner
    showSpinner = () => {
        if (this.state.AppStore.isLoading) {
            return(
                <Spinner/>
            );
        }
        return <div/>;
    }

    // If error code is set it will return appropriate error message on Popup
    showPopup = () => {
        switch(this.state.AppStore.errorCode){
            
            case ERROR_CODE.FAILED:
                return this.getPopupMessage(
                    strings.ERROR,
                    strings.ERROR_MESSAGE,
                    strings.OK,
                );
                break;
            
            case ERROR_CODE.HTTP_FORBID:
                return this.getPopupMessage(
                    strings.ERROR,
                    strings.FORBID_MESSAGE,
                    strings.OK,
                );
                break;

            case ERROR_CODE.HTTP_BAD_GET:
                return this.getPopupMessage(
                    strings.ERROR,
                    strings.BAD_GETWAY,
                    strings.OK,
                );
                break;
            
            case ERROR_CODE.HTTP_BAD_GET:
                return this.getPopupMessage(
                    strings.ERROR,
                    strings.BAD_REQ,
                    strings.OK,
                );
                break;
            
            case ERROR_CODE.HTTP_GET_TIM_OUT:
                return this.getPopupMessage(
                    strings.ERROR,
                    strings.GET_WAY_TIME_OUT,
                    strings.OK,
                );
                break;

            default:
                return <div/>;
                break;


        } 
    }
    // return popup message
    getPopupMessage = (title, message, buttonText) => {
        return(
            <Popup
                title = {title}
                message = {message}
                buttonText = {buttonText}
            />
        );
    }
    clsoePopup = () => {
        this.setState({
            showPopupMessage: true,
            errorCode: null
        });
    }

    handlePageChange = (value) => {
        AppActions.handlePageNumberChange(value);
    }
    handleSortClick = () => {
        AppActions.changeOrder();
    }
     render() {
        return (
            <div
                className = 'hacker-new-container'>
                {this.showSpinner()}
                {this.showPopup()}
                <List
                    data = {this.state.AppStore.data}
                    totalPages = {this.state.AppStore.totalPages}
                    pageNumber = {this.state.AppStore.pageNumber}
                    handlePageChange = {this.handlePageChange}
                    activePageNumber = {this.state.AppStore.pageNumber}
                    handleSortCick = {this.handleSortClick}
                />
            </div>
        );

    }
}

export default HackerNews;