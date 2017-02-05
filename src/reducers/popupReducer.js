import { combineReducers } from 'redux';
import staticEventsList from '../data';

const inititalStateOfPopup = {
	isVisible: staticEventsList.popupVisible
};

export const popupReducer = (state = inititalStateOfPopup, action) => {
	switch (action.type) {
		case 'POPUP_CLOSED':
			return {...state, isVisible: false};

		case 'POPUP_TOGGLE':
			return {...state, isVisible: !state.isVisible};

		default: 
			return state;
	};
};
