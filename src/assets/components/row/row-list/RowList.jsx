import { useContext, useEffect, useState } from "react";
import { NewRow } from "../new-row/NewRow";

import style from './RowList.module.scss'
import { useTables } from "../../../../state/store";

const RowList = ({ row, tableId }) => {

	const { array, deleteRow, saveServer } = useTables()

	useEffect(() => {
		console.log(array)
	}, [])

	return (
		<>
			<div className={style.wrapper}>
				{row.rowId}
				<button onClick={() => {
					deleteRow(tableId, row.rowId)
					saveServer()
				}}>del</button>
			</div>
		</>
	)
}

export { RowList }