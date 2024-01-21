import { useContext, useEffect, useState } from "react";
import { CheckboxContext } from "../../../../context/checkbox-context";
import { NewRow } from "../new-row/NewRow";

import style from './RowList.module.scss'

const RowList = ({ addNewRow, onArrayUpdate }) => {
	const [rows, setRows] = useState([]);

	useEffect(() => {
		if (addNewRow) {
			setRows((prevRows) => [
				...prevRows,
				{ rows: [addNewRow] },
			]);

			// upDateArray(rows)
			updateArray()
		}
	}, [addNewRow]);

	useEffect(() => {
		console.log(rows)
	}, [rows])

	const updateArray = () => {
		const updatedArray = [1, 2, 3]; // Ваша логіка для оновлення масиву
		onArrayUpdate(updatedArray);
	};

	return (
		<>
			<div className={style.wrapper}>
				{rows.map((row, index) => (
					<NewRow row={row} key={index} />
				))}
			</div>
		</>
	)
}

export { RowList }