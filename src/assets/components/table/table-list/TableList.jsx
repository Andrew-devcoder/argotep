import { useEffect, useState } from "react"
import { NewTable } from "../new-table/NewTable"

import style from './TableList.module.scss'
import { useTables } from "../../../../state/store";

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

	// {/* test use add new table */}
	const { array, addRow } = useTables()

	return (
		<>
			<div className={style.wrapper}>
				{/* {tableList.map((table, index) => (
					<NewTable table={table} key={index} onArrayUpdate={handleParentUpdate} />
				))} */}

				{/* test use add new table */}
				{array.map((item) => (
					<NewTable key={item.tableId} table={item} addRow={addRow} />
				))}
				{/* test use add new table */}
			</div>
		</>
	)
}

export { TableList }