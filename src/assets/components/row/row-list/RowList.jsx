import { useContext, useEffect, useState } from "react";
import { CheckboxContext } from "../../../../context/checkbox-context";
import { NewRow } from "../new-row/NewRow";

import style from './RowList.module.scss'
import { useTables } from "../../../../state/store";

const RowList = ({ row, tableId }) => {

	const { deleteRow } = useTables()

	return (
		<>
			<div className={style.wrapper}>
				{row.rowId}
				<button onClick={() => deleteRow(tableId, row.rowId)}>del</button>
			</div>
		</>
	)
}

export { RowList }