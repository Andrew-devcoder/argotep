import { useState, useEffect } from "react"


import style from './NewRow.module.scss'
import { useRooms } from "../../../state/state"
// import { sendDataToServer } from "../../../../services/send-data-to-server/sendDataToServer"
import { CatName } from "../../cat/cat-name/CatName"
import { CateDate } from "../../cat/cat-date/CatDate"

const NewRow = ({ row, upDateRowsList, index }) => {
	const [selectedDate, setSelectedDate] = useState(new Date())
	const [name, setName] = useState(row.name)

	const { array, updateRowData } = useRooms()

	const handleNameChange = (newName) => {
		row.name = newName
		setName(newName);
	};

	const handleBlur = () => {
		sendDataToServer(array)
	};

	const handleChange = () => {
		updateRowData(row, selectedDate.toLocaleDateString())
		// console.log(updateRowData)
		// console.log(array)
		// console.log(row.rowId, selectedDate.toLocaleDateString())
	}

	const updatedRow = { ...row, name };

	return (
		<>
			<div className={style.wrapper}>
				<p>{index + 1}. </p>
				<CatName row={updatedRow} setName={handleNameChange} onBlur={handleBlur} />
				{/* <CatBreed handleChange={handleChange} state={state} /> */}
				{/* <CatAge handleChange={handleChange} state={state} /> */}
				{/* <CateDate selectedDate={selectedDate} setSelectedDate={setSelectedDate} handleChange={(date) => handleChange(date, 'date')} /> */}
				<CateDate selectedDate={selectedDate} setSelectedDate={setSelectedDate} handleChange={(date) => handleChange(date, 'date')} />
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