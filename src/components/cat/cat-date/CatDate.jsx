import { useEffect } from 'react'
import { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const CateDate = ({ row, onBlur }) => {
	const [selectedDate, setSelectedDate] = useState(new Date())

	useEffect(() => {
		if (row.date) {
			const formattedDate = new Date(row.date);
			setSelectedDate(formattedDate);
		} else {
			setSelectedDate(new Date());
			const formattedDate = formatDate(new Date());
			row.date = formattedDate;
			onBlur();
		}
	}, []);

	const handleDateChange = (date) => {
		setSelectedDate(date);
		const formattedDate = formatDate(date);
		row.date = formattedDate;
		onBlur();
	};

	const formatDate = (date) => {
		const year = date.getFullYear();
		const month = (date.getMonth() + 1).toString().padStart(2, '0');
		const day = date.getDate().toString().padStart(2, '0');
		return `${year}-${month}-${day}`;
	};

	return (
		<>
			<DatePicker
				closeOnScroll={true}
				selected={selectedDate}
				onChange={(date) => handleDateChange(date)}
			/>

		</>
	)
}

export { CateDate }