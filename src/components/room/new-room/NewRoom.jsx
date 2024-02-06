import { useState } from "react"
import { useRooms } from "../../../state/state"
import { sendDataToServer } from "../../../services/data-server/dataServer";
import { RowList } from "../../row/row-list/RowList"

import style from './NewRoom.module.scss'
import { NameRoom } from "../name-room/NameRoom";

const NewRoom = ({ room, index }) => {
	const { addRow, array, delRoom } = useRooms();
	const [name, setName] = useState(room.nameRoom)
	const roomIndex = index.toString()

	const { rows } = room

	const remove = async () => {
		await delRoom(index)
		useRooms.setState((state) => {
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

				<button onClick={() => remove(index)}>delete room</button>
				<button onClick={() => addRow(room)}>+</button>
			</header>

			<RowList rows={rows} roomIndex={roomIndex} />
		</>
	);
};

export { NewRoom };
