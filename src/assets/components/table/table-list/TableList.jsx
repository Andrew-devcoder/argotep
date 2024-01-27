import { useEffect, useState } from "react"
import { NewTable } from "../new-table/NewTable"

import style from './TableList.module.scss'
import { useTables } from "../../../../state/store";
import { getDataFromServer } from "../../../../services/send-data-to-server/sendDataToServer";

const TableList = () => {

	const { array, addRow } = useTables()

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await getDataFromServer()
				console.log(data)
				const dataArray = data.data.array
				useTables.setState({ array: dataArray })
			} catch (error) {
				console.error("Error fetching data from server:", error);
			}
		};

		fetchData()
	}, [])

	return (
		<>
			<div className={style.wrapper}>
				{array?.map((item) => (
					<NewTable key={item.tableId} table={item} addRow={addRow} />
				))}
			</div>
		</>
	)
}

export { TableList }