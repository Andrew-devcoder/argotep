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
		console.log('After deleteRow:', array);

		// const { array } = useTables()

		// console.log('Before sendDataToServer:', array);
		// await sendDataToServer(array);

		useTables.setState((state) => {
			console.log('Before sendDataToServer:', state.array);
			sendDataToServer(state.array);
			return state;
		});
	}


	return (
		<>
			<div className={style.wrapper}>
				{row.rowId}
				<button onClick={() => {
					sendData()
				}}>del</button>
			</div >
		</>
	)
}

export { RowList }