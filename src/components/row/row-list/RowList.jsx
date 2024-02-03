import { useEffect, useState } from "react";
import { NewRow } from "../new-row/NewRow";
import { useRooms } from "../../../state/state";
import { sendDataToServer } from "../../../services/data-server/dataServer"

import style from './RowList.module.scss'

const RowList = ({ row, tableId }) => {
	const { array, delRow } = useRooms()

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
				<NewRow row={row} upDateRowsList={() => reload()} />

				<button onClick={() => {
					sendData()
				}}>del</button>
			</div >
		</>
	)
}

export { RowList }