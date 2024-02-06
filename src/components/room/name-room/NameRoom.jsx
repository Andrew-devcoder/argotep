import style from './NameRoom.module.scss'

export const NameRoom = ({ room, setName, onBlur }) => {

	const handleChange = (e) => {
		const inputValue = e.target.value;
		setName(inputValue);
	};

	return (
		<>
			<input
				className={style.inputName}
				type="text"
				placeholder="Name room"
				onBlur={onBlur}
				onChange={(e) => {
					handleChange(e, 'name')
				}}
				value={room.nameRoom || ''}
			/>
		</>
	)
}