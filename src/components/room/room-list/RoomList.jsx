import { useRooms } from "../../../state/state";
import { NewRoom } from "../new-room/NewRoom"

import style from './RoomList.module.scss'

const RoomList = () => {
	const { array } = useRooms()

	return (
		<>
			<div className={style.wrapper}>
				{array?.map((room, index) => (
					<NewRoom key={Math.floor(Math.random() * 10000)} room={room} index={index} />
				))}
			</div>
		</>
	)
}

export { RoomList }