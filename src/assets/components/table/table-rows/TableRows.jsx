import { useEffect, useState } from "react";
import { CatFat } from "../../room/cat-fact/CatFact"
import { CatBreed } from "../../room/cat-breed/CatBreed";
import { CatAge } from "../../room/cat-age/CatAge";
import { CateDate } from "../../room/cat-date/CatDate";

import style from './TableRows.module.scss'

const TableRows = ({ item }) => {
	const [selectedDate, setSelectedDate] = useState(new Date())

	const test = () => {
		console.log('click:', item.id, selectedDate)
	}
	return (
		<>
			<div className={style.wrapper}>
				{item.id}.
				<input type="text" placeholder="write name" maxLength="20" />
				<CatBreed />
				<CatAge />
				<CateDate selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
				<CatFat item={item} />

				<button onClick={test}>check</button>
			</div>
		</>
	)
}

export { TableRows }