import { useContext, useEffect, useState } from "react";
import { CheckboxContext } from "../../../../context/checkbox-context";
import { NewRow } from "../new-row/NewRow";

import style from './RowList.module.scss'

const RowList = ({ addNewRow, creatRow, newRow }) => {
	const [rows, setRows] = useState([]);

	useEffect(() => {
		if (creatRow) {
			setRows((prevRows) => [
				...prevRows,
				{ rows: rows },
			]);
		}

	}, [creatRow]);

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