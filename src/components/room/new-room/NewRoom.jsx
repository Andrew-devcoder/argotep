import { useEffect, useState } from "react"
import { useRooms } from "../../../state/state"
import { sendDataToServer } from "../../../services/data-server/dataServer";
import { RowList } from "../../row/row-list/RowList"

import style from './NewRoom.module.scss'
import { NameRoom } from "../name-room/NameRoom";

const NewRoom = ({ room, index }) => {
	const { addRow, array, delRoom, removeRoom } = useRooms();
	const [name, setName] = useState(room.nameRoom)
	const roomIndex = index.toString()
	console.log(room)

	const { rows } = room

	const remove = async () => {
		await delRoom(room.id)
		useRooms.setState((state) => {
			console.log(state, state.array)
			sendDataToServer(state.array)
			return state
		})
	}

	const handleNameChange = (newName) => {
		room.nameRoom = newName
		setName(newName);
	};

	const handleBlur = () => {
		sendDataToServer(array)
	};

	const updatedRoom = { ...room, nameRoom: name }

	return (
		<>
			<header className={style.header}>
				<NameRoom room={updatedRoom} setName={handleNameChange} onBlur={handleBlur} />

				<button onClick={() => removeRoom(index)}>delete room</button>
				<button onClick={() => addRow(room)}>+</button>
			</header>

			<RowList rows={rows} roomIndex={roomIndex} />

			{/* {rows.map((row) => (
				<div key={`row-${Math.floor(Math.random() * 10000)}`}>
					<RowList row={row} tableId={room.tableId} />
				</div>
			))} */}
		</>
	);
};

export { NewRoom };
