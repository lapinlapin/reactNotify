const REMOVE_ALL_EVENTS = 'REMOVE_ALL_EVENTS';
const ADD_NEW_EVENT = 'ADD_NEW_EVENT';
const UPDATE_TIME_EVENTS = 'UPDATE_TIME_EVENTS';
const GENERATE_EVENT = 'GENERATE_EVENT';
const READ_ALL = 'READ_ALL';

//popup
const POPUP_CLOSED = 'POPUP_CLOSED';
const POPUP_TOGGLE = 'POPUP_TOGGLE';

export const getRemoveAllEventsAction = () => {
	return {
		type: REMOVE_ALL_EVENTS
	};
};

export const addNewEvent = (title) => {
	return {
		type: ADD_NEW_EVENT,
		title
	};
};

export const updateEventsTime = () => {
	return {
		type: UPDATE_TIME_EVENTS
	};
};

export const generateNewEvent = () => {
	return {
		type: GENERATE_EVENT
	}
};

export const readAll = () => {
	return {
		type: READ_ALL
	};
};

export const closePopup = () => {
	return {
		type: POPUP_CLOSED
	};
};

export const togglePopup = () => {
	return {
		type: POPUP_TOGGLE
	};
};
