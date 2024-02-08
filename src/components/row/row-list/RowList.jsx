import { useEffect, useState } from "react";
import { NewRow } from "../new-row/NewRow";
import { useDateToday, useRooms } from "../../../state/state";
import { sendDataToServer } from "../../../services/data-server/dataServer"

import style from './RowList.module.scss'

const RowList = ({ rows, roomIndex }) => {
	const { array } = useRooms()
	const { today } = useDateToday()

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

	const formatDate = (date) => {
		const year = date.getFullYear();
		const month = (date.getMonth() + 1).toString().padStart(2, '0');
		const day = date.getDate().toString().padStart(2, '0');
		return `${year}-${month}-${day}`;
	};

	// чи є сенс змінити newRowIndex без додавання `${rowIndex}${roomIndex}`
	// тому що ми все ж таки об'єднуємо рядки, а не додаємо числа... 

	return (
		<>
			<div className={style.wrapper}  >
				{rows?.filter((row) => {
					if (today) {
						const prevDate = row.date;
						const dateNow = formatDate(new Date())
						// console.log(prevDate)
						// console.log(dateNow)
						// console.log(row.date)

						if (prevDate == dateNow) {
							console.log(true)
							return true
						} else {
							console.log(false)
							return false
						}

					}
					//  проблема в тому що коли today checked то при додаванні ного row він не відображаться але додається 




					return true;
				}).map((row, index) => {
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