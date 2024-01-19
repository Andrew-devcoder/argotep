import { useContext, useDeferredValue, useEffect, useState } from "react"
import { RowList } from "../../row/row-list/RowList"

import style from './NewTable.module.scss'
import { CheckboxContext } from "../../../../context/checkbox-context"
import { endOfISOWeek } from "date-fns"

const NewTable = ({ table, setRowslist }) => {

	const [count, setCount] = useState(0)

	const [upDateRowsList, setUpDateRowsList] = useState([])

	const { tableId } = table

	useEffect(() => {
		setRowslist(upDateRowsList)
	}, [])

	useEffect(() => {
		console.log(table)

	})

	return (
		<>
			<header className={style.header}>
				<h2>hi mom {tableId} </h2>
				<button onClick={() => setCount(count + 1)}>+</button>
			</header>

			<RowList addNewRow={count} setUpDateRowsList={upDateRowsList} />
		</>
	)
}

export { NewTable }