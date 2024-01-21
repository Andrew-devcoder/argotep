import { useContext, useDeferredValue, useEffect, useState } from "react"
import { RowList } from "../../row/row-list/RowList"

import style from './NewTable.module.scss'
import { CheckboxContext } from "../../../../context/checkbox-context"

const NewTable = ({ table, onArrayUpdate }) => {

	// const [count, setCount] = useState(0)
	const { tableId } = table

	// useEffect(() => {
	// 	console.log(table)
	// }, [])

	// const [upDateArrayRows, setUpDateArrayRows] = useState([])

	// useEffect(() => {
	// 	upDateArray()
	// 	console.log(upDateArrayRows)
	// }, [upDateArray])

	// const upDateArray = (array) => {
	// 	setUpDateArrayRows(array)
	// }

	// const grendGetPropsParent = (item) => {
	// 	console.log('Parent Props:', { item });
	// 	console.log('Updated Array from Child:', updatedArray);

	// 	onArrayUpdate(item);
	// };

	const [row, setRow] = useState(0)
	const [rows, setRows] = useState([])

	const handleAddNewRow = () => {
		setRow(row + 1)
		console.log('click handle add new row')
	}

	useEffect(() => {
		console.log(rows)
	}, [setRows])

	return (
		<>
			<header className={style.header}>
				<h2>hi mom {tableId} </h2>
				{/* <button onClick={() => setCount(count + 1)}>+</button> */}
				<button onClick={handleAddNewRow}>+</button>
			</header>

			{/* <RowList addNewRow={count} sendGrandProps={grendGetPropsParent} /> */}
			<RowList creatRow={row} setRows={newRow => console.log(newRow)} />
		</>
	)
}

export { NewTable }