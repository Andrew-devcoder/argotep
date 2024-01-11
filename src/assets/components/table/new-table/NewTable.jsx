import { useEffect, useState } from "react"
import { TableRows } from "../table-rows/TableRows"

import style from './NewTable.module.scss'

const NewTable = ({ list }) => {
	const [newRows, setNewRows] = useState([])
	const [count, setCount] = useState(0)

	useEffect(() => {
		const newRow = { id: newRows.length + 1 };
		setNewRows(prevRows => [...prevRows, newRow])
		console.log(count)
	}, [count])

	return (
		<>
			<header className={style.header}>
				<h2>hi mom {list.id} </h2>
				<button onClick={() => setCount(count + 1)}>+</button>
			</header>

			{newRows.map((item) => (
				<TableRows item={item} key={item.id} />
			))}
		</>
	)
}

export { NewTable }