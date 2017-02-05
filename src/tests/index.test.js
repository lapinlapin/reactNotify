import {addNewEvent} from '../actions';
import {popupReducer} from '../reducers/popupReducer';
import {eventsReducer} from '../reducers/eventsReducer';
import staticEventsList from '../data';
import {getTextFromDateAgo, generateTmplOfNewEvent} from '../utils';

const inititalStateOfPopup = {
	isVisible: staticEventsList.popupVisible
};

const inititalStateOfEvents = {
	data: staticEventsList.data.map((item) => {
		return {...item, textTime: getTextFromDateAgo(item.datetime)}
	})
};

it('ACTION: should create an action to add new event', () => {
	const title = 'new event';
	
	expect(addNewEvent(title)).toEqual({
	  type: 'ADD_NEW_EVENT',
	  title
	});
});

it('REDUCER (events): should return the initial state', () => {
    expect(eventsReducer(undefined, {})).toEqual(inititalStateOfEvents);
});

it('REDUCER (events): should clear events', () => {
    expect(eventsReducer(inititalStateOfEvents, {
        type: 'REMOVE_ALL_EVENTS'
     })).toEqual({...inititalStateOfEvents, data: []});
});

it ('REDUCER (events): should update time label', () => {
	expect(eventsReducer(inititalStateOfEvents, {
		type: 'UPDATE_TIME_EVENTS',
	})).toEqual({
		...inititalStateOfEvents,
		data: inititalStateOfEvents.data.map((item) => {
			return {
				...item,
				textTime: getTextFromDateAgo(item.datetime)
			}
		})
	});
});

it('REDUCER (popup): should return the initial state', () => {
    expect(popupReducer(undefined, {})).toEqual(inititalStateOfPopup);
});

it('REDUCER (popup): should popup close', () => {
    expect(popupReducer(inititalStateOfPopup, {
        type: 'POPUP_CLOSED'
     })).toEqual({...inititalStateOfPopup, isVisible: false});
});

it('REDUCER (popup): should popup toggle', () => {
    expect(popupReducer(inititalStateOfPopup, {
        type: 'POPUP_TOGGLE'
     })).toEqual({...inititalStateOfPopup, isVisible: !inititalStateOfPopup.isVisible});
});
