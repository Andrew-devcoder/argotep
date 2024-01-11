import { useEffect, useState } from "react"
import { NewTable } from "../new-table/NewTable"

import style from './TableList.module.scss'

const TableList = ({ count }) => {
	const [blocks, setBlocks] = useState([]);

	useEffect(() => {
		if (count) {
			setBlocks((prevBlocks) => {
				const newBlock = { id: prevBlocks.length + 1 };
				return [...prevBlocks, newBlock];
			});
		}
	}, [count])

	return (
		<>
			<div className={style.wrapper}>
				{blocks.map((list, index) => (
					<div key={index}>
						<NewTable list={list} />
					</div>
				))}
			</div>
		</>
	)
}

export { TableList }