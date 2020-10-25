import './App.css';
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import { useState } from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import MomentLocaleUtils from 'react-day-picker/moment';

import 'moment/locale/ru';

import dateFnsFormat from 'date-fns/format';
import dateFnsParse from 'date-fns/parse';

function parseDate(str, format, locale) {
	const parsed = dateFnsParse(str, format, new Date(), { locale });
	if (DateUtils.isDate(parsed)) {
		return parsed;
	}
	return undefined;
}

function formatDate(date, format, locale) {
	return dateFnsFormat(date, format, { locale });
}

const MONTHS = [
	'Январь',
	'Февраль',
	'Март',
	'Апррель',
	'Май',
	'Июнь',
	'Июль',
	'Авгутс',
	'Сентябрь',
	'Октябрь',
	'Ноябрь',
	'Декабрь',
];

function App() {
	const [selectedDay, setSelectedDay] = useState(new Date());

	const handleDayClick = (day) => {
		setSelectedDay(day);
	}

	const handleDayChange = (day, modifiers, dayPickerInput) => {

		debugger
		//setSelectedDay(day);
	}

	const FORMAT = 'dd.MM.yyyy';

	return (
		<div className="App">
			<DayPickerInput
				formatDate={formatDate}
				format={FORMAT}
				parseDate={parseDate}
				placeholder={`${dateFnsFormat(new Date(), FORMAT)}`}
				dayPickerProps={{
					locale: 'ru',
					localeUtils: MomentLocaleUtils,
					months: MONTHS,
					showWeekDays: true,
					//selectedDays: selectedDay,
					onDayClick: handleDayChange,

				}}
			/>
		</div>
	);
}

export default App;
