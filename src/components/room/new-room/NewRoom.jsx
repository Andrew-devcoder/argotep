import { useState } from "react"
import { useRooms } from "../../../state/state"
import { NameRoom } from "../name-room/NameRoom";
import { RowList } from "../../row/row-list/RowList"
import { sendDataToServer } from "../../../services/data-server/dataServer";

import style from './NewRoom.module.scss'

const NewRoom = ({ room, index }) => {
	const { addRow, array, delRoom } = useRooms();
	const roomIndex = index.toString()
	const { rows } = room

	const remove = async () => {
		await delRoom(index)
		useRooms.setState((state) => {
			sendDataToServer(state.array)
			return state
		})
	}

	const handleBlur = () => {
		sendDataToServer(array)
	};

	return (
		<>
			<header className={style.header}>
				<NameRoom
					room={room}
					onBlur={handleBlur}
				/>

				<button onClick={() => remove(index)}>delete room</button>
				<button onClick={() => addRow(room)}>+</button>
			</header>

			<RowList rows={rows} roomIndex={roomIndex} />
		</>
	);
};

export { NewRoom };
