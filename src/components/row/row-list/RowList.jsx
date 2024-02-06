import { useEffect } from "react";
import { NewRow } from "../new-row/NewRow";
import { useRooms } from "../../../state/state";
import { sendDataToServer } from "../../../services/data-server/dataServer"

import style from './RowList.module.scss'

const RowList = ({ rows, roomIndex }) => {
	const { array, delRow } = useRooms()

	useEffect(() => {
		sendDataToServer(array);
	}, [])

	const reload = () => {
		console.log('reload')
		useRooms.setState((state) => {
			console.log('ось цей стан масиву ми передаємо до серверу :', state.array);
			sendDataToServer(state.array);
			return state;
		});
	}

	return (
		<>
			<div className={style.wrapper}>
				{rows?.map((row, index) => {
					const rowIndex = index.toString()
					const newRowIndex = rowIndex + roomIndex;
					return (
						<div key={`row-${Math.floor(Math.random() * 10000)}`}>

							<NewRow row={row} index={index} upDateRowsList={() => reload()} />

							<button onClick={() => {
								delRow(newRowIndex)
							}}>del</button>

						</div>
					)
				})}
			</div >
		</>
	)
}

export { RowList }