import { useEffect, useState } from "react"
import { useRooms } from "../../../state/state"
import { sendDataToServer } from "../../../services/data-server/dataServer";
import { RowList } from "../../row/row-list/RowList"

import style from './NewRoom.module.scss'

const NewTable = ({ table }) => {
	const { addRow, array, delRoom } = useRooms();
	const [rows, setRows] = useState([]);

	useEffect(() => {
		const currentTable = array.find((t) => t.tableId === table.tableId);
		if (currentTable) {
			setRows(currentTable.rows || []);
		}
	}, [array, table.tableId]);

	const sendData = async () => {
		await delRoom(table.tableId)

		useRooms.setState((state) => {
			console.log(state, state.array)
			sendDataToServer(state.array)
			setRows([]);
			return state
		})
	}



	return (
		<>
			<header className={style.header}>
				{/* <h2>hi mom {table.tableId} </h2>	 */}
				{/* imput -> name table */}
				<input
					type="text"
					placeholder="Name room"
				/>
				<button onClick={() => sendData()}>delete room</button>
				<button onClick={() => addRow(table)}>+</button>
			</header>

			{rows.map((row) => (
				<div key={`row-${Math.floor(Math.random() * 10000)}`}>
					<RowList row={row} tableId={table.tableId} />
				</div>
			))}
		</>
	);
};

export { NewTable };
