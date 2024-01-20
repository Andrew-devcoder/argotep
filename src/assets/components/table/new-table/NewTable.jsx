import { useContext, useDeferredValue, useEffect, useState } from "react"
import { RowList } from "../../row/row-list/RowList"

import style from './NewTable.module.scss'
import { CheckboxContext } from "../../../../context/checkbox-context"

const NewTable = ({ table }) => {

	const [count, setCount] = useState(0)
	const { tableId } = table

	useEffect(() => {
		console.log(table)
	}, [])

	// const [upDateArrayRows, setUpDateArrayRows] = useState([])

	// useEffect(() => {
	// 	upDateArray()
	// 	console.log(upDateArrayRows)
	// }, [upDateArray])

	// const upDateArray = (array) => {
	// 	setUpDateArrayRows(array)
	// }

	return (
		<>
			<header className={style.header}>
				<h2>hi mom {tableId} </h2>
				<button onClick={() => setCount(count + 1)}>+</button>
			</header>

			<RowList addNewRow={count} />
		</>
	)
}

export { NewTable }