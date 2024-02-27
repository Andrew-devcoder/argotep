import { useRooms } from "../../../state/state"
import { NameRoom } from "../name-room/NameRoom";
import { RowList } from "../../row/row-list/RowList"
import { sendDataToServer } from "../../../services/data-server/dataServer";

import style from './NewRoom.module.scss'

const NewRoom = ({ room, index, id }) => {
	// id we make use for del row 
	console.log(id)
	const { addRow, array, delRoom } = useRooms();
	const roomIndexStr = index.toString()
	const { rows } = room
	const { header, buttonDelRoom, buttonAddRow } = style

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
			<header
				className={header}

			>
				<NameRoom
					room={room}
					onBlur={handleBlur}
				/>

				<button
					className={buttonDelRoom}
					onClick={() => remove(index)}
				>
					delete room
				</button>

				<button
					className={buttonAddRow}
					onClick={() => addRow(room)}
				>
					new cat
				</button>

			</header>

			<RowList rows={rows} roomIndex={roomIndexStr} />
		</>
	);
};

export { NewRoom };
