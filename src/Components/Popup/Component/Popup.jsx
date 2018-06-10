import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import strings from '../Constants';

class Popup extends React.Component {
  state = {
    open: true,
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    let title = this.props.title == undefined || this.props.title == null ? strings.defaultTitle : this.props.title;
    let message = this.props.message == undefined || this.props.message == null ? strings.defaultMessage : this.props.message;
    let buttonText = this.props.buttonText == undefined || this.props.buttonText == null ? strings.defaultButton : this.props.buttonText;
    
    const actions = [
      <FlatButton
        label={buttonText}
        primary={true}
        keyboardFocused={true}
        onClick={this.handleClose}
      />,
    ];

    return (
      <div>
        <Dialog
          title={this.props.title}
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          {this.props.message}
        </Dialog>
      </div>
    );
  }
}

export default Popup;