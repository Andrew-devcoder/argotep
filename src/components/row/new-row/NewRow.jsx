import { useState, useEffect } from "react"
import { useRooms } from "../../../state/state"
import { CatName } from "../../cat/cat-name/CatName"
import { CateDate } from "../../cat/cat-date/CatDate"
import { CatAge } from "../../cat/cat-age/CatAge"
import { sendDataToServer } from "../../../services/data-server/dataServer"

import style from './NewRow.module.scss'
import { CatBreed } from "../../cat/cat-breed/CatBreed"
import { CatFact } from "../../cat/cat-fact/CatFact"

const NewRow = ({ row, index }) => {
	const [name, setName] = useState(row.name)
	const [selectedDate, setSelectedDate] = useState(new Date())

	const { array } = useRooms()

	const handleNameChange = (newName) => {
		row.name = newName
		setName(newName);
	};

	const handleBlur = () => {
		sendDataToServer(array)
	};

	useEffect(() => {
		if (row.date) {
			setSelectedDate(row.date)
		} else {
			setSelectedDate(new Date())
			const date = selectedDate.toLocaleDateString()
			row.date = date
		}
	}, [])

	const handleChange = (date) => {
		console.log(' its date ! ')
		console.log(date)
		row.date = date
		setSelectedDate(date);

		useRooms.setState((state) => {
			sendDataToServer(state.array)
			return state
		})
	};

	const updatedRow = { ...row, name };

	return (
		<>
			<div className={style.wrapper}>
				<p>{index + 1}. </p>
				<CatName
					row={updatedRow}
					setName={handleNameChange}
					onBlur={handleBlur}
				/>
				<CatBreed
					row={row}
					onBlur={handleBlur}
				/>
				<CatAge
					row={row}
					onBlur={handleBlur}
				/>
				<CateDate
					selectedDate={selectedDate}
					setSelectedDate={setSelectedDate}
					handleChange={(date) => handleChange(date)}
				/>
				<CatFact
					row={row}
				/>
			</div>
		</>
	)
}

export { NewRow }