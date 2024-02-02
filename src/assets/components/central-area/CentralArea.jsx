import { useState } from "react";
import { Header } from "../header/Header"
import { TableList } from "../table/table-list/TableList"

const CentralArea = () => {


	// useEffect for array
	// set useTable

	return (
		<>
			<div>
				<Header />
				<TableList />
			</div>
		</>
	)
}

export { CentralArea }