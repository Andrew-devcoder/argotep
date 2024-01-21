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
	}, [addNewTable, rowsList]);

	useEffect(() => {
		console.log(tableList)
	}, [])

	const handleParentUpdate = (finalArray) => {
		setRowslist(finalArray)
		console.log('Grand Props:', { handleParentUpdate });
		console.log('Final Updated Array:', finalArray);
	};

	return (
		<>
			<div className={style.wrapper}>
				{tableList.map((table, index) => (
					<NewTable table={table} key={index} onArrayUpdate={handleParentUpdate} />
				))}
			</div>
		</>
	)
}

export { TableList }