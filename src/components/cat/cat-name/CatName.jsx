import { useEffect, useState } from 'react';
import { useTheme } from '../../../state/state';
import style from './CatName.module.scss'

const CatName = ({ row, onBlur }) => {
	const [name, setName] = useState(row.name)
	const { theme } = useTheme()

	useEffect(() => {
		if (row.name) {
			setName(row.name)
		} else {
			setName('')
		}
	}, [])

	const handleChange = (e) => {
		const inputValue = e.target.value;
		setName(inputValue);
		row.name = inputValue
	};

	return (
		<>
			<input
				data-theme={theme}
				className={style.inputName}
				placeholder="Name"
				onBlur={onBlur}
				value={name}
				onChange={handleChange}
			/>
		</>
	)
}
export { CatName }