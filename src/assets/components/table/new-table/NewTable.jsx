import { useContext, useEffect, useState } from "react"
import { TableRows } from "../table-rows/TableRows"

import style from './NewTable.module.scss'
import { CheckboxContext } from "../../../../context/checkbox-context"

const NewTable = ({ list }) => {

	const [count, setCount] = useState(null)

	return (
		<>
			<header className={style.header}>
				<h2>hi mom {list.id} </h2>
				<button onClick={() => setCount(count + 1)}>+</button>
			</header>

			<TableRows count={count} />
		</>
	)
}

export { NewTable }