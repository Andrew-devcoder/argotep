import { useState } from "react";
import { Header } from "../header/Header"
import { TableList } from "../table/table-list/TableList"

const CentralArea = () => {
	const [count, setCount] = useState(0)

	return (
		<>
			<div>
				<Header handleAddNewTable={setCount} />
				<TableList addNewTable={count} />
			</div>
		</>
	)
}

export { CentralArea }