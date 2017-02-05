import React, { Component, PropTypes } from 'react';
import {getEventsCountAction} from '../../actions';
import { connect } from 'react-redux';
import EventListComponent from '../eventListComponent';

class HeaderNotifyComponent extends Component {
  render() {
  	const {
  		notifyCount, 
  		events,
  		handler,
  		isVisible, 
  		toShow
  	} = this.props;

  	let unreadCount = 0;
  	events.forEach((item) => {
  		item.unread ? unreadCount++ : unreadCount;
  	});

  	return (
  		<div>
	  		<div className="header-notify">
	  			{!!notifyCount && <div className="header-notify__counter">{unreadCount} / {notifyCount}</div>}
	  		</div>
	  		<EventListComponent 
	  			handler={handler} 
	  			events={events} 
	  			isVisible={isVisible}
	  			toShow={toShow}
	  		/>
  		</div>
  	)
  };
};

HeaderNotifyComponent.propTypes = {
	notifyCount: React.PropTypes.number.isRequired,
	events: React.PropTypes.array.isRequired,
	isVisible: React.PropTypes.bool.isRequired,
	toShow: React.PropTypes.number.isRequired,
	handler: React.PropTypes.func.isRequired
};
 
export default HeaderNotifyComponent;
