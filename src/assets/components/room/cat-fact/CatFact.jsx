import { useState } from "react"
import { useEffect } from "react"
import { getCatFact } from "../../../../services/cats/catfact.ninja"
import { CatAge } from "../cat-age/CatAge"
import { CatBreed } from "../cat-breed/CatBreed"
import { CateDate } from "../cat-date/CatDate"



import style from './CatFact.module.scss'

const CatFat = ({ addNewRow, currentOrderNumber, isTodayChecked }) => {

	const [listRows, setListRows] = useState([])

	useEffect(() => {
		const fetchData = async () => {
			try {
				const fact = await getCatFact();
				const newRow = <div key={fact} className={style.row}>
					{currentOrderNumber}.
					<input type="text" placeholder="write name" maxLength="20" />
					<CatBreed />
					<CatAge />
					{/* <input
						type="date"
						value={selectedDate}
						onChange={(e) => setSelectedDate(e.target.value)}
						onBlur={(e) => setSelectedDate(e.target.value)}
					/> */}

					<CateDate />

					{fact}
				</div>;
				setListRows((prevList) => [...prevList, newRow]);
			} catch (error) {
				console.error('get fact in component error:', error);
			}
		};

		if (addNewRow) {
			fetchData();
		}

	}, [addNewRow, currentOrderNumber,]);

	useEffect(() => {
		if (isTodayChecked) {
			const currentDate = new Date();
			listRows.map((row) => console.log(row.date, currentDate))
		}
	}, [isTodayChecked, listRows]);

	const checkDate = () => {
		console.log('list', listRows[0].props.children[5]);
	};




	return (
		<>
			{listRows.map((row) => row)}
			<button onClick={checkDate}>cheack date in row</button>
		</>
	)
}

export { CatFat }