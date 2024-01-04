import { useEffect, useState } from "react"
import { CatFat } from "../../room/cat-fact/CatFact"

const NewTable = () => {
	const [addNewRow, setAddNewRow] = useState(false)

	const handleAddNewRow = () => {
		setAddNewRow(true)
	}

	useEffect(() => {
		if (addNewRow) {
			setAddNewRow(false)
		}
	}, [addNewRow])

	return (
		<>
			<h1>
				hi mom <button onClick={handleAddNewRow}>+</button>
				<CatFat addNewRow={addNewRow} />
			</h1>
		</>
	)
}

export { NewTable }