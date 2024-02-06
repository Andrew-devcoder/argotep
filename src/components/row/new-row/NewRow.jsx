import { useState, useEffect } from "react"
import { useRooms } from "../../../state/state"
import { CatName } from "../../cat/cat-name/CatName"
import { CateDate } from "../../cat/cat-date/CatDate"
import { sendDataToServer } from "../../../services/data-server/dataServer"

import { parseISO } from 'date-fns';

import style from './NewRow.module.scss'

const NewRow = ({ row, upDateRowsList, index }) => {
	const [name, setName] = useState(row.name)
	const [selectedDate, setSelectedDate] = useState(new Date())

	const { array, updateRowData } = useRooms()

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

	// const handleChange = () => {
	// 	updateRowData(row, selectedDate.toLocaleDateString())
	// 	// console.log(updateRowData)
	// 	// console.log(array)
	// 	// console.log(row.rowId, selectedDate.toLocaleDateString())
	// }

	const handleChange = (date) => {
		console.log(' its date ! ')
		console.log(date)
		row.date = date
		setSelectedDate(date);

		useRooms.setState((state) => {
			sendDataToServer(state.array)
			return state
		})
		// updateRowData(row, date);
	};

	const updatedRow = { ...row, name };

	return (
		<>
			<div className={style.wrapper}>
				<p>{index + 1}. </p>
				<CatName row={updatedRow} setName={handleNameChange} onBlur={handleBlur} />
				{/* <CatBreed handleChange={handleChange} state={state} /> */}
				{/* <CatAge handleChange={handleChange} state={state} /> */}
				{/* <CateDate selectedDate={selectedDate} setSelectedDate={setSelectedDate} handleChange={(date) => handleChange(date, 'date')} /> */}
				<CateDate
					selectedDate={selectedDate}
					setSelectedDate={setSelectedDate}
					handleChange={(date) => handleChange(date)}
				/>
				{/* <CatFact row={row} handleChange={handleChange} changeGetInfo={batya} /> */}
				{/* <button onClick={checkState}>check state</button> */}
				{/* <button onClick={sendDataToServer}>Відправити дані на сервер</button> */}

				{/* <button onClick={testAddRow}> test add row </button> */}

				{/* <button >delete</button> */}
			</div>
		</>
	)
}

export { NewRow }