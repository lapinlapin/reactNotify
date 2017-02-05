import { combineReducers } from 'redux';
import staticEventsList from '../data';
import moment from 'moment';
import {
	generateTmplOfNewEvent,
	getTextFromDateAgo
} from '../utils';

moment.locale('ru');

const initialStateOfEvents = {
	data: staticEventsList.data.map((item) => {
		return {...item, textTime: getTextFromDateAgo(item.datetime)}
	})
};

export const eventsReducer = (state = initialStateOfEvents, action) => {
	switch (action.type) {
		case 'REMOVE_ALL_EVENTS':
			return {...state, data: []};

		case 'ADD_NEW_EVENT':
			return {...state, data: [
				generateTmplOfNewEvent(action.title)
			].concat(state.data)
		};

		case 'UPDATE_TIME_EVENTS':
			return {
				...state,
				data: state.data.map((item) => {
					return {
						...item,
						textTime: getTextFromDateAgo(item.datetime)
					}
				})
			}

		case 'GENERATE_EVENT':
			return {
				...state,
				data: [
					generateTmplOfNewEvent()
				].concat(state.data)
			}

		case 'READ_ALL':
			return {
				...state,
				data: state.data.map((item) => {
					return {
						...item,
						unread: false
					}
				})
			}

		default: 
			return state;
	}
}
