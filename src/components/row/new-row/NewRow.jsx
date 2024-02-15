import { useEffect, useState } from "react"
import { useRooms } from "../../../state/state"
import { CatName } from "../../cat/cat-name/CatName"
import { CatBreed } from "../../cat/cat-breed/CatBreed"
import { CatAge } from "../../cat/cat-age/CatAge"
import { CateDate } from "../../cat/cat-date/CatDate"
import { CatFact } from "../../cat/cat-fact/CatFact"
import { sendDataToServer } from "../../../services/data-server/dataServer"

import { RiDeleteBinLine } from "react-icons/ri";

import style from './NewRow.module.scss'
import { generationColor } from "../../../services/generation-color/GenerationColor"

const NewRow = ({ row, index, newRowIndex }) => {
	const [name, setName] = useState(row.name)
	const { array, delRow } = useRooms()

	const handleNameChange = (newName) => {
		row.name = newName
		setName(newName);
	};

	const handleBlur = () => {
		sendDataToServer(array)
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

	const [newColor, setNewColor] = useState('')

	const handleGenNewColor = () => {
		const genNewColor = generationColor(theme)
		setNewColor(genNewColor)
	}

	useEffect(() => {
		handleGenNewColor(theme)
	}, [])

	return (
		<div
			style={{ backgroundColor: newColor }}
			className={style.wrapper}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>

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
				onBlur={handleBlur}
				row={row}
			/>
			<CatFact
				row={row}
			/>
		</div>
	)
}

export { NewRow }