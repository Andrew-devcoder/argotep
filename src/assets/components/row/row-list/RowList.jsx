import { useEffect, useState } from "react";
import { NewRow } from "../new-row/NewRow";
import { useRooms } from "../../../../state/store";
import { sendDataToServer } from "../../../../services/send-data-to-server/sendDataToServer"

import style from './RowList.module.scss'

const RowList = ({ row, tableId }) => {

	const { array, delRow } = useRooms()

	useEffect(() => {
		console.log(array)
		sendDataToServer(array);
	}, [])

	useEffect(() => {
		console.log('after delete row -> reload')

	}, [row])

	const sendData = async () => {

		console.log('масив який в нас є:', array, '; з якої таблиці ми видаляємо рядок: ', tableId, '; id рядка який ми видаляємо: ', row.rowId);
		await delRow(tableId, row.rowId);

		reload()
		// console.log('не розумію чому масив залишився таким самим як і до видалення рядка  after delRow???:', array, tableId, row.rowId);
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