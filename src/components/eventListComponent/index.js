import React, { Component, PropTypes } from 'react';

class EventListComponent extends Component {
  render() {
  	const {events, isVisible, toShow, handler} = this.props;
  	
  	return isVisible && (
  		<ul className="events-list">
  			{!!events && !events.length && <div className="events-list__error">Уведомлений нет...</div>}	
			{events.slice(0, toShow).map((event) => {
				const readCls = event.unread ? 'events-list__item-title' : 'events-list__item-title events-list__item-title_readed'
				return (
					<li className={readCls} key={event.id}>
						{event.title}
						<div className="events-list__item-time-title">{event.textTime}</div>
					</li>
				)
			})}
			<div onClick={handler} className="events-list__close">Закрыть...</div>
  		</ul>
  	)
  };
};

EventListComponent.propTypes = {
	events: React.PropTypes.array.isRequired,
	isVisible: React.PropTypes.bool.isRequired,
	toShow: React.PropTypes.number.isRequired,
	handler: React.PropTypes.func.isRequired
};
 
export default EventListComponent;
