import { useState, useEffect, useSyncExternalStore } from "react"
import { CatName } from "../../room/cat-name/CatName"
import { CatBreed } from "../../room/cat-breed/CatBreed"
import { CatAge } from "../../room/cat-age/CatAge"
import { CateDate } from "../../room/cat-date/CatDate"
import { CatFact } from "../../room/cat-fact/CatFact"

import style from './NewRow.module.scss'
import { useRooms } from "../../../../state/state"
import { sendDataToServer } from "../../../../services/send-data-to-server/sendDataToServer"

const NewRow = ({ row, upDateRowsList }) => {
	const [selectedDate, setSelectedDate] = useState(new Date())
	const [name, setName] = useState(row.name)
	const [timer, setTimer] = useState(null);

	const { rowId } = row
	const { updateRowName, array } = useRooms()

	const handleNameChange = (newName) => {
		row.name = newName
		setName(newName);
	};


	const handleBlur = () => {
		updateRowName(row.tableId, row.rowId, name);
		upDateRowsList();
	};

	// useEffect(() => {
	// 	updateRowName(row.tableId, row.rowId, name);
	// }, [row])

	const updatedRow = { ...row, name }; // Create a new object with updated name
	console.log('test', updatedRow, 'перевірка всього масива в стейте :', array);

	return (
		<>
			<div className={style.wrapper}>
				<p>{rowId}. </p>
				<CatName row={updatedRow} setName={handleNameChange} onBlur={handleBlur} />
				{/* <CatBreed handleChange={handleChange} state={state} /> */}
				{/* <CatAge handleChange={handleChange} state={state} /> */}
				{/* <CateDate selectedDate={selectedDate} setSelectedDate={setSelectedDate} handleChange={(date) => handleChange(date, 'date')} /> */}
				{/* <CateDate selectedDate={selectedDate} setSelectedDate={setSelectedDate} handleChange={(date) => handleChange(date, 'date')} /> */}
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