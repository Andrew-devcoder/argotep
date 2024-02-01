import { useEffect, useState } from "react";
import { NewRow } from "../new-row/NewRow";
import { useTables } from "../../../../state/store";
import { sendDataToServer } from "../../../../services/send-data-to-server/sendDataToServer"

import style from './RowList.module.scss'

const RowList = ({ row, tableId }) => {

	const { array, deleteRow } = useTables()

	useEffect(() => {
		console.log(array)
		sendDataToServer(array);
	}, [])

	const sendData = async () => {

		console.log('Before deleteRow:', array, tableId, row.rowId);
		await deleteRow(tableId, row.rowId);
		console.log('after deleteRow:', array, tableId, row.rowId);

		reload()
	}

	const reload = () => {
		console.log('reload')

		useTables.setState((state) => {
			console.log('Before sendDataToServer:', state.array);
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