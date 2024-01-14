import { useContext, useEffect, useState } from "react";
import { CheckboxContext } from "../../../../context/checkbox-context";
import { NewRow } from "../new-row/NewRow";

import style from './RowList.module.scss'

const RowList = ({ count }) => {
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
				{blocks.map((row, index) => (
					<NewRow row={row} key={index} />
				))}
			</div>
		</>
	)
}

export { RowList }