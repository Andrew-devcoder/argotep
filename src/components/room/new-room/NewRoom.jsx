import { useEffect, useState } from "react"
import { useRooms } from "../../../state/state"
import { sendDataToServer } from "../../../services/data-server/dataServer";
import { RowList } from "../../row/row-list/RowList"

import style from './NewRoom.module.scss'
import { NameRoom } from "../name-room/NameRoom";

const NewRoom = ({ room }) => {
	const { addRow, array, delRoom, updateRoomName } = useRooms();
	// const [rows, setRows] = useState([]);

	// useEffect(() => {
	// 	const currentTable = array.find((t) => t.tableId === table.tableId);
	// 	if (currentTable) {
	// 		setRows(currentTable.rows || []);
	// 	}
	// }, [array, table.tableId]);

	// const rows = room.rows

	const { rows } = room


	const sendData = async () => {
		await delRoom(room.tableId)

		useRooms.setState((state) => {
			console.log(state, state.array)
			sendDataToServer(state.array)
			setRows([]);
			return state
		})
	}

	const [name, setName] = useState(room.nameRoom)

	const handleNameChange = (newName) => {
		room.nameRoom = newName
		setName(newName);
	};

	const handleBlur = () => {
		// updateRoomName(name, room);
		sendDataToServer(array)
		console.log('handle blur')
	};

	const updatedRow = { ...room, name }


	return (
		<>
			<header className={style.header}>
				<NameRoom room={updatedRow} setName={handleNameChange} onBlur={handleBlur} />

				<button onClick={() => sendData()}>delete room</button>
				<button onClick={() => addRow(room)}>+</button>
			</header>

			{rows.map((row) => (
				<div key={`row-${Math.floor(Math.random() * 10000)}`}>
					<RowList row={row} tableId={room.tableId} />
				</div>
			))}
		</>
	);
};

export { NewRoom };
