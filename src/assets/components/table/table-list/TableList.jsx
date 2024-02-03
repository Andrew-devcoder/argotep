import { useRooms } from "../../../../state/store";
import { NewTable } from "../new-table/NewTable"

import style from './TableList.module.scss'

const TableList = () => {
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

export { TableList }