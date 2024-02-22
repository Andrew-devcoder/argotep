import { useEffect, useState } from 'react';
import style from './NameRoom.module.scss'

export const NameRoom = ({ room, onBlur }) => {
	const [name, setName] = useState('')

	useEffect(() => {
		if (room.nameRoom) {
			setName(room.nameRoom)
		} else {
			setName('')
		}
	}, [])

	const handleChange = (e) => {
		const inputValue = e.target.value;
		setName(inputValue);
		room.nameRoom = inputValue
	};

	return (
		<>
			<input
				className={style.inputName}
				type="text"
				placeholder="Name room"
				onBlur={onBlur}
				value={name}
				onChange={handleChange}
			/>
		</>
	)
}