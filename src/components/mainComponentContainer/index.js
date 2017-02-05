import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {
  getRemoveAllEventsAction,
  addNewEvent,
  updateEventsTime,
  generateNewEvent,
  readAll,

  closePopup,
  togglePopup
} from '../../actions';
import ButtonComponent from '../buttonComponent';
import InputComponent from '../inputComponent';
import HeaderNotifyComponent from '../HeaderNotifyComponent';
 
let inputValue;

const onInputChange = (evt, value) => {
	inputValue = value;
};

const mapStateToProps = (state) => {
	return {
		events: state.eventsReducer.data,
		notifyVisibleFlag: state.popupReducer.isVisible,

		onInputChange,
		primary: true,
		eventsCountToShow: 5
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onClearEvents: () => {
			dispatch(getRemoveAllEventsAction());
		},
		onNewAdd: () => {
			inputValue = inputValue ? inputValue : 'simple event text...';

			dispatch(addNewEvent(inputValue));
			dispatch(updateEventsTime());
	    },
	    onGenerateEvent: () => {
	    	dispatch(generateNewEvent());
	    },
	    onClosePopup: () => {
	    	dispatch(closePopup());
	    },
	    onTogglePopup: () => {
	    	dispatch(togglePopup());
	    },
	    onReadAll: () => {
	    	dispatch(readAll());
	    }
	}
}

class MainComponentContainer extends Component {
	componentDidMount() {
		setInterval(() => {
			this.props.onGenerateEvent();

		}, Math.round(5000 + ((Math.random() * 10) * 1000)));
	}
	render() {
		return (
			<div className="app-wrapper">
				<HeaderNotifyComponent 
					notifyCount={this.props.events.length} 
					handler={this.props.onClosePopup} 
					events={this.props.events} 
					isVisible={this.props.notifyVisibleFlag}
					toShow={this.props.eventsCountToShow}
				/>
				<div className="form-wrapper">
					<InputComponent cls="form-wrapper__input" handler={this.props.onInputChange} hintText="Введите название события" />
					<ButtonComponent cls="form-wrapper__btn_primary" handler={this.props.onNewAdd} primary={this.props.primary} label="Отправить" />
					<ButtonComponent cls="form-wrapper__btn" handler={this.props.onReadAll} label="Пометить все события прочитанными" />
					<ButtonComponent cls="form-wrapper__btn" handler={this.props.onClearEvents} label="Удалить все события" />
					<ButtonComponent cls="form-wrapper__btn" handler={this.props.onTogglePopup} label="Скрыть / показать попап нотификаций (toggle btn)" />
				</div>
			</div>
		)
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(MainComponentContainer);
 