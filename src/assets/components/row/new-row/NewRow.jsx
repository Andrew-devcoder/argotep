import { useState, useEffect } from "react"
import { CatName } from "../../room/cat-name/CatName"
import { CatBreed } from "../../room/cat-breed/CatBreed"
import { CatAge } from "../../room/cat-age/CatAge"
import { CateDate } from "../../room/cat-date/CatDate"
import { CatFact } from "../../room/cat-fact/CatFact"

import style from './NewRow.module.scss'

const NewRow = ({ row }) => {
	const [selectedDate, setSelectedDate] = useState(new Date())
	console.log(row)
	const { rowId } = row


	return (
		<>
			<div className={style.wrapper}>
				<p>{rowId}. </p>
				<CatName row={row} />
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