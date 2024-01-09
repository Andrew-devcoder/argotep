import { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const CateDate = () => {
	const [selectedDate, setSelectedDate] = useState(null)

	return (
		<>
			<DatePicker selected={selectedDate} onChange={date => setSelectedDate(date)} />
		</>
	)
}

export { CateDate }