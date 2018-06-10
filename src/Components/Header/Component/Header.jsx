import React, { Component } from 'react';
// import Paper from 'material-ui/Paper';
import { Row } from "react-bootstrap";
import './Header.css';
import strings from '../Constants';

class Header extends Component {    
    render(){
        return(
         <div>   
            <Row>
                <div className='header'>
                    { strings.header }
                </div>
            </Row>
        </div>
        )
    }

}

export default Header;