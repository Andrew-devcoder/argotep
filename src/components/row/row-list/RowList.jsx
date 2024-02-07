import { useEffect, useState } from "react";
import { NewRow } from "../new-row/NewRow";
import { useRooms } from "../../../state/state";
import { sendDataToServer } from "../../../services/data-server/dataServer"

import style from './RowList.module.scss'

const RowList = ({ rows, roomIndex }) => {
	const { array } = useRooms()

	useEffect(() => {
		sendDataToServer(array);
	}, [])

	const reload = () => {
		useRooms.setState((state) => {
			console.log('ось цей стан масиву ми передаємо до серверу :', state.array);
			sendDataToServer(state.array);
			return state;
		});
	}

	// чи є сенс змінити newRowIndex без додавання `${rowIndex}${roomIndex}`
	// тому що ми все ж таки об'єднуємо рядки, а не додаємо числа... 

	return (
		<>
			<div className={style.wrapper}  >
				{rows?.map((row, index) => {
					const rowIndex = index.toString()
					const newRowIndex = rowIndex + roomIndex;
					// const newRowIndex = `${rowIndex}${roomIndex}`;
					return (
						<div key={`row-${Math.floor(Math.random() * 10000)}`} >

							<NewRow row={row} index={index} newRowIndex={newRowIndex} upDateRowsList={() => reload()} />

						</div>
					)
				})}
			</div >
		</>
	)
}

export { RowList }