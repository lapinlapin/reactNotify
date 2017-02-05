import React, { Component, PropTypes } from 'react';
import {TextField} from 'material-ui';

class InputComponent extends Component {
	render() {
		const {handler, cls, hintText} = this.props;

		return <TextField onChange={handler} className={cls} hintText={hintText} />
	};	
};

InputComponent.propTypes = {
	handler: React.PropTypes.func.isRequired,
	cls: React.PropTypes.string,
	hintText: React.PropTypes.string.isRequired
};
 
export default InputComponent;
