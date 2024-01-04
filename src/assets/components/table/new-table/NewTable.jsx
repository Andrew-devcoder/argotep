import { useEffect, useState } from "react"
import { CatFat } from "../../room/cat-fact/CatFact"
import { TableRows } from "../table-rows/TableRows"

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
			<div>
				hi mom <button onClick={handleAddNewRow}>+</button>
			</div>

			<TableRows addNewRow={addNewRow} orderNumber={orderNumber} />
		</>
	)
}

export { NewTable }