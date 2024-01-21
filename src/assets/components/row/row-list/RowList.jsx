import { useContext, useEffect, useState } from "react";
import { CheckboxContext } from "../../../../context/checkbox-context";
import { NewRow } from "../new-row/NewRow";

import style from './RowList.module.scss'

const RowList = ({ addNewRow, sendGrandProps, creatRow, newRow }) => {
	// const [rows, setRows] = useState([]);

	// useEffect(() => {
	// 	if (addNewRow) {
	// 		setRows((prevRows) => [
	// 			...prevRows,
	// 			{ rows: addNewRow },
	// 		]);

	// 		// upDateArray(rows)
	// 		// updateArray()
	// 		// testTest()
	// 	}

	// }, [addNewRow]);

	// useEffect(() => {
	// 	console.log(rows)
	// }, [rows])

	// const testParentGetProps = (item) => {
	// 	console.log("this item: ", item)
	// 	sendGrandProps(item)
	// }

	// useEffect(() => {
	// 	const getPropsArrayDate = (array) => {
	// 		// setRows(array)
	// 		console.log('array rows: ', array)
	// 	}
	// 	getPropsArrayDate()

	// }, [addNewRow])

	useEffect(() => {
		if (creatRow) {
			newRow('new row take')
		}
	}, [creatRow])

	return (
		<>
			<div className={style.wrapper}>
				{/* {rows.map((row, index) => (
					<NewRow row={row} key={index} testForPropsParent={testParentGetProps} sendDataRowsArray={getPropsArrayDate} />
				))} */}
			</div>
		</>
	)
}

export { RowList }