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

		console.log('Before deleteRow:', array);
		await deleteRow(tableId, row.rowId);

		useTables.setState((state) => {
			console.log('Before sendDataToServer:', state.array);
			sendDataToServer(state.array);
			return state;
		});
	}


	return (
		<>
			<div className={style.wrapper}>
				<NewRow row={row} />

				<button onClick={() => {
					sendData()
				}}>del</button>
			</div >
		</>
	)
}

export { RowList }