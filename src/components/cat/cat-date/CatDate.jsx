import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const CateDate = ({ selectedDate, setSelectedDate, handleChange }) => {

	const handleDateChange = (date) => {
		setSelectedDate(date);
		handleChange(date.toLocaleDateString(), 'date');
	};

	return (
		<>
			<DatePicker
				closeOnScroll={true}
				selected={selectedDate}
				onChange={handleDateChange}
			/>

		</>
	)
}

export { CateDate }