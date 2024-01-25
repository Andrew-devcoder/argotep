import { useEffect, useState } from "react"
import { NewTable } from "../new-table/NewTable"

import style from './TableList.module.scss'
import { useTables } from "../../../../state/store";

const TableList = () => {
	const { array, addRow } = useTables()

	return (
		<>
			<div className={style.wrapper}>
				{array.map((item) => (
					<NewTable key={item.tableId} table={item} addRow={addRow} />
				))}
			</div>
		</>
	)
}

export { TableList }