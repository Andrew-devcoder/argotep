import { useEffect, useState } from "react"
import { NewTable } from "../new-table/NewTable"

import style from './TableList.module.scss'

const TableList = ({ addNewTable }) => {

	const [tableList, setTableList] = useState([]);
	const [rowsList, setRowslist] = useState([])

	useEffect(() => {
		if (addNewTable) {
			setTableList((prevBlocks) => [
				...prevBlocks,
				{ tableId: prevBlocks.length + 1, rows: rowsList },
			]);
		}
	}, [addNewTable]);

	useEffect(() => {
		console.log(tableList)
	})

	return (
		<>
			<div className={style.wrapper}>
				{tableList.map((table, index) => (
					<NewTable table={table} key={index} setRowslist={setRowslist} />
				))}
			</div>
		</>
	)
}

export { TableList }