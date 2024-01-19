import { useContext, useEffect, useState } from "react";
import { CheckboxContext } from "../../../../context/checkbox-context";
import { NewRow } from "../new-row/NewRow";

import style from './RowList.module.scss'

const RowList = ({ addNewRow, setUpdateRowsList }) => {
	const [rows, setRows] = useState([]);

	useEffect(() => {
		if (addNewRow) {
			// setRows((prevRows) => [
			// 	...prevRows,
			// 	{ rows: [addNewRow] },
			// ]);
			// setUpdateRowsList(rows)
			setRows((prevRows) => {
				const newRows = [...prevRows, { rows: [addNewRow] }];
				setUpdateRowsList(newRows);
				return newRows;
			});

		}
	}, [addNewRow, setUpdateRowsList]);

	useEffect(() => {
		console.log(rows)
	})

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