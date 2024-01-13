import { useState } from "react"
import { CatAge } from "../../room/cat-age/CatAge"
import { CatBreed } from "../../room/cat-breed/CatBreed"
import { CateDate } from "../../room/cat-date/CatDate"
import { CatFact } from "../../room/cat-fact/CatFact"
import { CatName } from "../../room/cat-name/CatName"

import style from './NewRow.module.scss'

const NewRow = ({ row }) => {

	const [selectedDate, setSelectedDate] = useState(new Date())

	const [state, setState] = useState({
		name: '',
		select: '',
		age: '',
		date: '',
		fact: '',
	});

	const handleChange = (e, field) => {
		if (field === 'fact') {
			setState((prevState) => ({
				...prevState,
				[field]: e, // використай передане значення з компонента CatFact
			}));
		} else if (field === 'date') {
			setState((prevState) => ({
				...prevState,
				[field]: e,
			}));
		} else {
			setState((prevState) => ({
				...prevState,
				[field]: e.target.value,
			}));
		};
	};

	const checkState = () => {
		console.log(state)
	}

	return (
		<>
			<div className={style.wrapper}>
				<p>{row.id}. </p>
				<CatName handleChange={handleChange} state={state} />
				<CatBreed handleChange={handleChange} state={state} />
				<CatAge handleChange={handleChange} state={state} />
				<CateDate selectedDate={selectedDate} setSelectedDate={setSelectedDate} handleChange={(date) => handleChange(date, 'date')} />
				<CatFact row={row} handleChange={handleChange} state={state} />
				<button onClick={checkState}>check state</button>
			</div>
		</>
	)
}

export { NewRow }