import { useState } from "react"
import { CatAge } from "../../room/cat-age/CatAge"
import { CatBreed } from "../../room/cat-breed/CatBreed"
import { CateDate } from "../../room/cat-date/CatDate"
import { CatFact } from "../../room/cat-fact/CatFact"
import { CatName } from "../../room/cat-name/CatName"

import style from './NewRow.module.scss'

const NewRow = ({ rows }) => {

	const [selectedDate, setSelectedDate] = useState(new Date())

	return (
		<>
			<div className={style.wrapper}>
				<p>{rows.id}. </p>
				<CatName />
				<CatBreed />
				<CatAge />
				<CateDate selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
				<CatFact rows={rows} />
			</div>
		</>
	)
}

export { NewRow }