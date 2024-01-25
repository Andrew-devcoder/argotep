import { useContext, useEffect, useState } from "react";
import { CheckboxContext } from "../../../../context/checkbox-context";
import { NewRow } from "../new-row/NewRow";

import style from './RowList.module.scss'

const RowList = ({ row }) => {

	return (
		<>
			<div className={style.wrapper}>
				{row.rowId}
			</div>
		</>
	)
}

export { RowList }