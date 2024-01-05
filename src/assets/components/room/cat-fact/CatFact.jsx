import { useState } from "react"
import { getCatFact } from "../../../../services/cats/catfact.ninja"
import { useEffect } from "react"

import style from './CatFact.module.scss'

const CatFat = ({ addNewRow, currentOrderNumber }) => {

	const [listRows, setListRows] = useState([])

	useEffect(() => {
		const fetchData = async () => {
			try {
				const fact = await getCatFact();
				const newRow = <div key={fact} className={style.row}>
					{currentOrderNumber}.
					<input type="text" placeholder="write name" />
					<select>
						<option value="мейнкун">мейнкун</option>
						<option value="сіамська">сіамська</option>
						<option value="сфінкс">сфінкс</option>
						<option value="бірманка">бірманка</option>
					</select>
					<input type="number" step='0.1' pattern="^(\d{1,2}(\.\d)?)?$" />
					<input type="date" />
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
	}, [addNewRow]);

	return (
		<>
			{listRows.map((row) => row)}
		</>
	)
}

export { CatFat }