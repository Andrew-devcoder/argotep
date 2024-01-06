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
					<input
						type="number"
						step="0.1"
						min="0.1"
						max="99.9"
						value={listRows.length > 0 ? listRows[listRows.length - 1].inputValue : ""}
						onChange={(e) => handleInputChange(e, listRows.length - 1)}
					/>
					<input type="date" />
					{fact}
				</div>;
				setListRows((prevList) => [...prevList, { inputValue: "" }]);
				setListRows((prevList) => [...prevList, newRow]);
			} catch (error) {
				console.error('get fact in component error:', error);
			}
		};

		if (addNewRow) {
			fetchData();
		}
	}, [addNewRow, currentOrderNumber, inputValue]);

	const handleInputChange = (e, index) => {
		const value = e.target.value;

		// Перевірка чи не більше однієї цифри після крапки
		if (value.includes(".") && value.split(".")[1].length > 1) {
			return; // Ігноруємо введення, якщо умова порушена
		}

		// Перевірка чи введене значення знаходиться в межах від 0.1 до 99.9
		if (parseFloat(value) >= 0.1 && parseFloat(value) <= 99.9) {
			setListRows((prevList) => {
				const updatedList = [...prevList];
				updatedList[index] = { ...updatedList[index], inputValue: value };
				return updatedList;
			});
		}
	};

	return (
		<>
			{listRows.map((row) => row)}
		</>
	)
}

export { CatFat }