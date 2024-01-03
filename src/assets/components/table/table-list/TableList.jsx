import { useEffect, useState } from "react"
import { NewTable } from "../new-table/NewTable"

import style from './TableList.module.scss'

const TableList = ({ addNewTable }) => {

	const [tableList, setTableList] = useState([])
	const [addTable, setAddTable] = useState(1)

	useEffect(() => {
		if (addNewTable) {
			const newItem = <NewTable key={addTable} />;
			setAddTable(addTable + 1);
			setTableList([...tableList, newItem]);
		}
	}, [addNewTable]);

	return (
		<>
			<div className={style.wrapper}>
				{tableList.map((table) => table)}
			</div>
		</>
	)
}

export { TableList }