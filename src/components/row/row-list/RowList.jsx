import { useEffect, useState } from "react";
import { NewRow } from "../new-row/NewRow";
import { useRooms } from "../../../state/state";
import { sendDataToServer } from "../../../services/data-server/dataServer"

import style from './RowList.module.scss'

const RowList = ({ rows, roomIndex }) => {

	const { array, delRow, removeRow } = useRooms()

	console.log(roomIndex)

	useEffect(() => {
		console.log(array)
		sendDataToServer(array);
	}, [])

	const sendData = async () => {
		await delRow(tableId, row.rowId);
		reload()
	}

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
				{rows?.map((row, index) => (

					<div div key={`row-${Math.floor(Math.random() * 10000)}`}>
						<NewRow row={row} index={index} upDateRowsList={() => reload()} />
						<button onClick={() => {
							removeRow(row.rowId)
						}}>del</button>

					</div>
				))}

				{/* <NewRow row={row} upDateRowsList={() => reload()} /> */}

				{/* <button onClick={() => {
					sendData()
				}}>del</button> */}
			</div >
		</>
	)
}

export { RowList }