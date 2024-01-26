import { useContext, useDeferredValue, useEffect, useState } from "react"
import { RowList } from "../../row/row-list/RowList"
import { useTables } from "../../../../state/store"

import style from './NewTable.module.scss'
import { sendDataToServer } from "../../../../services/send-data-to-server/sendDataToServer";

const NewTable = ({ table }) => {
	const { addRow, array, deleteTable } = useTables();

	const [rows, setRows] = useState([]);

	useEffect(() => {
		const currentTable = array.find((t) => t.tableId === table.tableId);
		if (currentTable) {
			setRows(currentTable.rows || []);
		}
	}, [array, table.tableId]);

	const sendData = async () => {
		await deleteTable(table.tableId)

		useTables.setState((state) => {
			console.log(state, state.array)
			sendDataToServer(state.array)
			return state
		})
	}

	return (
		<>
			<header className={style.header}>
				<h2>hi mom {table.tableId} </h2>
				<button onClick={() => sendData()}>delete table</button>
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
