import { useEffect, useState } from "react"
import { useRooms, useTheme } from "../../../state/state"
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
	const { array, delRow } = useRooms()
	const [newColor, setNewColor] = useState('')
	const { theme } = useTheme()

	useEffect(() => {
		if (!row.bgColor) {
			row.bgColor = generationColor(theme)
		}
		setNewColor(row.bgColor)

		if (theme == 'dark') {
			const color = row.bgColor
			const colorForDark = color.slice(0, -2) + "0.6)";
			setNewColor(colorForDark)
			console.log('dark now ', colorForDark);
		} else {
			const colorForDark = row.bgColor.replace(/(\d+(\.\d+)?)\s*$/, "2");
			console.log('change theme to ligth', colorForDark)
		}

	}, [])

	const handleBlur = () => {
		sendDataToServer(array)
	};

	const [isHovered, setIsHovered] = useState(false);

	const handleMouseEnter = () => {
		setIsHovered(true)
	}

	const handleMouseLeave = () => {
		setIsHovered(false)
	}

	const rowClassNames = `${style.iconRemoveRow} ${style.iconOpacity}`;

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
				row={row}
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
				row={row}
				onBlur={handleBlur}
			/>
			<CatFact
				row={row}
			/>
		</div>
	)
}

export { NewRow }