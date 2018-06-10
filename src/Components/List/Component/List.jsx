import React, { Component } from 'react';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Icon from '@material-ui/core/Icon';
import Badge from '@material-ui/core/Badge';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

// import AutoCompleate from '../../AutoCompleate/Component/AutoCompleate.js';
import Stepper from '../../Stepper/Component/Stepper.jsx';
import './List.css';
import { getRandomInt } from '../../../utils/common';

class List extends Component {
    

    getArticleList = () => {
        let images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpeg', '7.jpeg', '8.jpg', '9.jpg']

        if (this.props.data && this.props.data.length > 0) {
            return this.props.data.map(article => {
                return(
                    
                    <GridListTile
                        key={article.id}
                        cols={1}
                        className='post-container'>
                        <Card
                            raised = {true}>
                            <CardHeader
                                avatar = {
                                    <Avatar
                                        aria-label = "Recipe" >
                                        {article.author[0].toUpperCase()}
                                    </Avatar>}
                                title = {article.author}
                                subheader = {article.created_at}
                            />
                            
                            <CardContent>
                                <img src={images[getRandomInt(0,6)]}
                                    style = {{
                                        height: '163px',
                                        width: '258px',
                                        marginLeft: '-25px'
                                    }}
                                    />
                                <Typography
                                    component="p">
                                    <a
                                        href = {article.url}
                                        target = '_blank'
                                        style = {{ color: '#337ab7' }}>
                                        {article.title}
                                    </a>
                                </Typography>
                            </CardContent>
                            <CardActions >
                                <Tooltip
                                    id = {article.id}
                                    title = 'likes'>
                                    <IconButton aria-label="Add to favorites">
                                        <FavoriteIcon />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip
                                    id = {article.id}
                                    title = 'comments'>
                                    <Badge 
                                        badgeContent={article.num_comments}
                                        color="primary">
                                        <Icon>
                                            markunread
                                        </Icon>
                                    </Badge>
                                </Tooltip>
                                <Tooltip
                                    id = {article.id}
                                    title = 'share?'>
                                    <IconButton aria-label="Share">
                                        <ShareIcon />
                                    </IconButton>
                                </Tooltip>
                            </CardActions>
                        </Card>
                    </GridListTile>
                       
                )
            })
        } else {
            return (
                <div
                    className = 'no-records-found'>
                    No records Found
                </div>
            )
        }
        
    }

    render () {
        return(
            <div>
                <div>
                    {/* <SearchBox/> */}
                </div>
                
                <div
                    className = 'stepper-container'>
                    <GridList
                        cols = {3}
                        cellHeight = {58}>
                        <GridListTile
                            key={'search'}
                            cols={1}>
                            {/* <AutoCompleate/> */}
                            {/* TODO */}
                            <TextField
                                id="password-input"
                                label="Search"
                                type="text"
                                margin="normal"
                                />

                        </GridListTile>
                        <GridListTile
                            key={'search'}
                            cols={1}>
                            <Button
                                color="primary"
                                onClick = {this.props.handleSortCick}>
                                <Icon>
                                    filter_list
                                </Icon>
                            </Button>
                        </GridListTile>
                        <GridListTile
                            key={'search'}
                            cols={1}>
                            <Stepper
                                totalPages = {this.props.totalPages}
                                handlePageChange = {this.props.handlePageChange}
                                activePageNumber = {this.props.activePageNumber}/>
                        </GridListTile>
                    </GridList>
                </div>        

                <GridList
                    cellHeight = {160}
                    cols = {4}>
                    {this.getArticleList()}
                </GridList>
                <div
                    className = 'stepper-container'>
                    <Stepper
                        totalPages = {this.props.totalPages}
                        handlePageChange = {this.props.handlePageChange}
                        activePageNumber = {this.props.activePageNumber}/>
                </div>
            </div>
        )
    }
}

export default List;