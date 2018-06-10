import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

import './Stepper.css';

const styles = {
  root: {
    maxWidth: 400,
    flexGrow: 1,
  },
};

class DotsMobileStepper extends React.Component {
  state = {
    activeStep: 0,
  };

  handleNext = () => {
    this.setState({
      activeStep: this.state.activeStep + 1,
    });
  };

  handleBack = () => {
    this.setState({
      activeStep: this.state.activeStep - 1,
    });
  };

  render() {
    const { classes, theme } = this.props;

    return (
       <div
        className = 'stepper'>
            <MobileStepper
                variant = "dots"
                steps = {this.props.totalPages}
                position = "static"
                activeStep = {this.props.activePageNumber}
                className = {classes.root}
                nextButton = {
                <Button
                    size = "small"
                    onClick = {this.props.handlePageChange.bind(this, true)}
                    disabled = {this.props.activePageNumber === (this.props.totalPages - 1)}>
                    Next
                    <Icon>arrow_forward</Icon>
                </Button>
                }
                backButton={
                <Button
                    size = 'small'
                    onClick = {this.props.handlePageChange.bind(this, false)}
                    disabled = {this.props.activePageNumber === 0}>
                    <Icon>arrow_back</Icon>
                    Back
                </Button>
                }
            />
        </div>
    );
  }
}

DotsMobileStepper.propTypes = {
  classes: PropTypes.object.isRequired,
  
};

export default withStyles(styles, { withTheme: true })(DotsMobileStepper);