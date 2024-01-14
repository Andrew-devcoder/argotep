import { useState } from "react"
import { CatName } from "../../room/cat-name/CatName"
import { CatBreed } from "../../room/cat-breed/CatBreed"
import { CatAge } from "../../room/cat-age/CatAge"
import { CateDate } from "../../room/cat-date/CatDate"
import { CatFact } from "../../room/cat-fact/CatFact"

import Data from '../../../../database/database.json';

import style from './NewRow.module.scss'
import { useEffect } from "react"

const NewRow = ({ row }) => {

	const [selectedDate, setSelectedDate] = useState(new Date())

	const [state, setState] = useState({
		name: '',
		select: '',
		age: '',
		date: selectedDate.toLocaleDateString(),
		fact: '',
	});

	const [dataTest, setDataTest] = useState([])

	const testChangeDate = () => {
		const updateData = Data.map((item, index) => {
			const count = item.id = index + 1
			item.title = 'new title ' + count
			item.rows.map((row, index) => {
				const count = index + 1
				row.name = 'fck ' + count
				return { ...row }
			})
			return { ...item };
		})
		setDataTest(updateData)
	}

	useEffect(() => {
		testChangeDate()
	}, [row])

	useEffect(() => {
		console.log(dataTest);
	}, [dataTest]);


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
				<CatFact row={row} handleChange={handleChange} />
				<button onClick={checkState}>check state</button>
				<button >delete</button>
			</div>
		</>
	)
}

export { NewRow }