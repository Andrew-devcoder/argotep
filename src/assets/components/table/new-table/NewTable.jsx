import { useContext, useDeferredValue, useEffect, useState } from "react"
import { RowList } from "../../row/row-list/RowList"
import { useTables } from "../../../../state/store"

import style from './NewTable.module.scss'

const NewTable = ({ table }) => {
	const { addRow, array, deleteTable } = useTables();

	const [rows, setRows] = useState([]);

	useEffect(() => {
		const currentTable = array.find((t) => t.tableId === table.tableId);
		if (currentTable) {
			setRows(currentTable.rows || []);
		}
	}, [array, table.tableId]);

	return (
		<>
			<header className={style.header}>
				<h2>hi mom {table.tableId} </h2>
				<button onClick={() => deleteTable(table.tableId)}>delete table</button>
				<button onClick={() => addRow(table)}>+</button>
			</header>

			{rows.map((row, index) => (
				<div key={index}>
					<RowList row={row} tableId={table.tableId} />
				</div>
			))}
		</>
	);
};

export { NewTable };
