import { useContext, useDeferredValue, useEffect, useState } from "react"
import { RowList } from "../../row/row-list/RowList"

import style from './NewTable.module.scss'
import { CheckboxContext } from "../../../../context/checkbox-context"

const NewTable = ({ table, onArrayUpdate }) => {

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

	const handleChildUpdate = (updatedArray) => {
		console.log('Parent Props:', { handleChildUpdate });
		console.log('Updated Array from Child:', updatedArray);

		onArrayUpdate(updatedArray);
	};

	return (
		<>
			<header className={style.header}>
				<h2>hi mom {tableId} </h2>
				<button onClick={() => setCount(count + 1)}>+</button>
			</header>

			<RowList addNewRow={count} onArrayUpdate={handleChildUpdate} />
		</>
	)
}

export { NewTable }