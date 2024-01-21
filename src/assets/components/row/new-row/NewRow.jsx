import { useState, useEffect } from "react"
import { CatName } from "../../room/cat-name/CatName"
import { CatBreed } from "../../room/cat-breed/CatBreed"
import { CatAge } from "../../room/cat-age/CatAge"
import { CateDate } from "../../room/cat-date/CatDate"
import { CatFact } from "../../room/cat-fact/CatFact"

import style from './NewRow.module.scss'

const NewRow = ({ row, testForPropsParent, sendDataRowsArray }) => {
	const [selectedDate, setSelectedDate] = useState(new Date())
	const [testInfo, setTestInfo] = useState('')

	const [state, setState] = useState({
		name: '',
		select: '',
		age: '',
		date: selectedDate.toLocaleDateString(),
		fact: testInfo,
	});

	useEffect(() => {
		sendDataRowsArray(state)
	}, [row])

	const handleChange = (e, field) => {
		if (field === 'fact') {
			setState((prevState) => ({
				...prevState,
				[field]: testInfo, // використай передане значення з компонента CatFact
			}));
		} else
			if (field === 'date') {
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

	// const sendDataToServer = async () => {
	// 	try {
	// 		const { name, select, age, date, fact } = state
	// 		console.log(state)

	// 		const rowData = {
	// 			name: name,
	// 			select: select,
	// 			age: age,
	// 			date: date,
	// 			fact: fact,
	// 		};


	// 		if (onSave) {
	// 			onSave(rowData);
	// 		}

	// 		const response = await fetch('http://localhost:3001/saveData', {
	// 			method: 'POST',
	// 			headers: {
	// 				'Content-Type': 'application/json',
	// 			},
	// 			body: JSON.stringify(sendData),
	// 		});

	// 		if (!response.ok) {
	// 			throw new Error('Помилка при відправці даних на сервер');
	// 		}

	// 		console.log('Дані успішно відправлені на сервер');

	// 		if (testAddRow) {
	// 			onSave(rowData)
	// 			testForPropsParent(rowData)
	// 		}

	// 	} catch (error) {
	// 		console.error(error.message);
	// 	}
	// };

	return (
		<>
			<div className={style.wrapper}>
				<p>{row.id}. </p>
				{/* <CatName handleChange={handleChange} state={state} /> */}
				{/* <CatBreed handleChange={handleChange} state={state} /> */}
				{/* <CatAge handleChange={handleChange} state={state} /> */}
				<CateDate selectedDate={selectedDate} setSelectedDate={setSelectedDate} handleChange={(date) => handleChange(date, 'date')} />
				{/* <CatFact row={row} handleChange={handleChange} changeGetInfo={batya} /> */}
				<button onClick={checkState}>check state</button>
				<button onClick={sendDataToServer}>Відправити дані на сервер</button>

				{/* <button onClick={testAddRow}> test add row </button> */}

				<button >delete</button>
			</div>
		</>
	)
}

export { NewRow }