import { useEffect, useState } from "react"
import { useRooms } from "../../../state/state"
import { sendDataToServer } from "../../../services/data-server/dataServer";
import { RowList } from "../../row/row-list/RowList"

import style from './NewRoom.module.scss'
import { NameRoom } from "../name-room/NameRoom";

const NewRoom = ({ room }) => {
	const { addRow, array, delRoom } = useRooms();
	const [name, setName] = useState(room.nameRoom)

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
		console.log('handle blur')
	};

	const updatedRow = { ...room, nameRoom: name }

	return (
		<>
			<header className={style.header}>
				<NameRoom room={updatedRow} setName={handleNameChange} onBlur={handleBlur} />

				<button onClick={() => remove()}>delete room</button>
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
