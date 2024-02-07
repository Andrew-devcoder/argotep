import { useState, useEffect } from "react"
import { useRooms } from "../../../state/state"
import { CatName } from "../../cat/cat-name/CatName"
import { CatBreed } from "../../cat/cat-breed/CatBreed"
import { CatAge } from "../../cat/cat-age/CatAge"
import { CateDate } from "../../cat/cat-date/CatDate"
import { CatFact } from "../../cat/cat-fact/CatFact"
import { sendDataToServer } from "../../../services/data-server/dataServer"

import { RiDeleteBinLine } from "react-icons/ri";


import style from './NewRow.module.scss'

const NewRow = ({ row, index, newRowIndex }) => {
	const [name, setName] = useState(row.name)
	const [selectedDate, setSelectedDate] = useState(new Date())

	const { array, delRow } = useRooms()

	const handleNameChange = (newName) => {
		row.name = newName
		setName(newName);
	};

	const handleBlur = () => {
		sendDataToServer(array)
	};

	useEffect(() => {
		if (row.date) {
			setSelectedDate(row.date)
		} else {
			setSelectedDate(new Date())
			const date = selectedDate.toLocaleDateString()
			row.date = date
		}
	}, [])

	const handleChange = (date) => {
		row.date = date
		setSelectedDate(date);

		useRooms.setState((state) => {
			sendDataToServer(state.array)
			return state
		})
	};

	const updatedRow = { ...row, name };


	const [isHovered, setIsHovered] = useState(false);

	const handleMouseEnter = () => {
		setIsHovered(true)
	}

	const handleMouseLeave = () => {
		setIsHovered(false)
	}

	const rowClassNames = `${style.iconRemoveRow} ${style.iconOpacity}`;

	return (
		<>
			<div className={style.wrapper} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>

				<a
					className={isHovered ? rowClassNames : style.iconRemoveRow}
					onClick={() => {
						delRow(newRowIndex)
					}}
				>
					<RiDeleteBinLine />
				</a>

				<p>{index + 1}. </p>
				<CatName
					row={updatedRow}
					setName={handleNameChange}
					onBlur={handleBlur}
				/>
				<CatBreed
					row={row}
					onBlur={handleBlur}
				/>
				<CatAge
					row={row}
					onBlur={handleBlur}
				/>
				<CateDate
					selectedDate={selectedDate}
					setSelectedDate={setSelectedDate}
					handleChange={(date) => handleChange(date)}
				/>
				<CatFact
					row={row}
				/>
			</div>
		</>
	)
}

export { NewRow }