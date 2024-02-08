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
			setSelectedDate(new Date())
			const date = selectedDate.toLocaleDateString()
			row.date = date
			onBlur()
		}
	}, [])

	const handleDateChange = (date) => {
		setSelectedDate(date);
		row.date = date
		onBlur()
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