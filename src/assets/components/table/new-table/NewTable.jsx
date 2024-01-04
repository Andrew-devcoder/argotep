import { useEffect, useState } from "react"
import { CatFat } from "../../room/cat-fact/CatFact"
import { TableRows } from "../table-rows/TableRows"

import style from './NewTable.module.scss'

const NewTable = ({ orderNumber }) => {
	const [addNewRow, setAddNewRow] = useState(false)

	const handleAddNewRow = () => {
		setAddNewRow(true)
		console.log('click for handle')
	}

	useEffect(() => {
		if (addNewRow) {
			setAddNewRow(false)
			console.log('click for useEffect')
		}
	}, [addNewRow])

	return (
		<>
			<header className={style.header}>
				<h2>hi mom </h2><button onClick={handleAddNewRow}>+</button>
			</header>

			<TableRows addNewRow={addNewRow} orderNumber={orderNumber} />
		</>
	)
}

export { NewTable }