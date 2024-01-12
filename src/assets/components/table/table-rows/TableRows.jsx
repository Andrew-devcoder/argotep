import { useContext, useEffect, useState } from "react";
import { CheckboxContext } from "../../../../context/checkbox-context";
import { NewRow } from "../new-row/NewRow";

import style from './TableRows.module.scss'

const TableRows = ({ count }) => {
	const [blocks, setBlocks] = useState([]);

	useEffect(() => {
		if (count) {
			setBlocks((prevBlocks) => {
				const newBlock = { id: prevBlocks.length + 1 };
				return [...prevBlocks, newBlock];
			});
		}
	}, [count])

	const clearRow = {
		name: '',
		select: '',
		age: '',
	}

	const [row, setRow] = useState(clearRow)

	const createRow = (e) => {
		e.preventDefault()

		setRowList(prev => [{ id: prev.length + 1, ...row, }, ...prev,])

		setRow(clearRow)
	}


	return (
		<>
			<div className={style.wrapper}>
				{blocks.map((rows, index) => (
					<NewRow rows={rows} key={index} />
				))}
			</div>
		</>
	)
}

export { TableRows }