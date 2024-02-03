import { useRooms } from "../../../state/state";
import { NewTable } from "../new-room/NewRoom"

import style from './RoomList.module.scss'

const RoomList = () => {
	const { array, addRow } = useRooms()

	return (
		<>
			<div className={style.wrapper}>
				{array?.map((item) => (
					<NewTable key={Math.floor(Math.random() * 10000)} table={item} addRow={addRow} />
				))}
			</div>
		</>
	)
}

export { RoomList }