import { useContext, useEffect, useState } from "react";
import { CheckboxContext } from "../../../../context/checkbox-context";
import { NewRow } from "../new-row/NewRow";

import style from './RowList.module.scss'

const RowList = ({ addNewRow }) => {
	const [rows, setRows] = useState([]);

	useEffect(() => {
		if (addNewRow) {
			setRows((prevRows) => [
				...prevRows,
				{ rows: [addNewRow] },
			]);

			// upDateArray(rows)
		}
	}, [addNewRow]);

	useEffect(() => {
		console.log(rows)
	}, [rows])

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