import moment from 'moment';

export const getTextFromDateAgo = (datetime) => {
	return moment(datetime).fromNow();
};

export const generateTmplOfNewEvent = title => {
	const id = (Math.random() * 100).toString().slice(3, 8);
	const datetime = new Date();

	return {
		title: title ? title : 'event id ' + id,
		id,
		datetime,
		textTime: getTextFromDateAgo(datetime),
		unread: true
	};
};
