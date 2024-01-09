import { useEffect, useState } from "react";
import { CatFat } from "../../room/cat-fact/CatFact"

import style from './TableRows.module.scss'

const TableRows = ({ addNewRow, isTodayChecked }) => {
	const [currentOrderNumber, setCurrentOrderNumber] = useState(1);

	useEffect(() => {
		setCurrentOrderNumber((prevOrderNumber) => {
			return addNewRow ? prevOrderNumber + 1 : prevOrderNumber;
		});
		console.log(currentOrderNumber);
	}, [addNewRow, currentOrderNumber]);


	return (
		<>
			<div className={style.wrapper}>
				<CatFat addNewRow={addNewRow} currentOrderNumber={currentOrderNumber} isTodayChecked={isTodayChecked} />
			</div>
		</>
	)
}

export { TableRows }