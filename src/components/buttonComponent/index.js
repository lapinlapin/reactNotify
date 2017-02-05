import React, { Component, PropTypes } from 'react';
import {RaisedButton} from 'material-ui';
 
class ButtonComponent extends Component {
  render() {
  	const {handler, cls, primary, label} = this.props;

  	return <RaisedButton onClick={handler} className={cls} primary={primary} label={label} />
  };
};

ButtonComponent.propTypes = {
	handler: React.PropTypes.func.isRequired,
	cls: React.PropTypes.string,
	primary: React.PropTypes.bool,
	label: React.PropTypes.string.isRequired
};
 
export default ButtonComponent;
