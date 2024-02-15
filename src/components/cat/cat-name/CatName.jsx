import { useTheme } from '../../../state/state';
import style from './CatName.module.scss'

const CatName = ({ row, setName, onBlur }) => {
	const { theme } = useTheme()

	const handleChange = (e) => {
		const inputValue = e.target.value;
		setName(inputValue);
	};

	return (
		<>
			<input
				data-theme={theme}
				className={style.inputName}
				placeholder="Name"
				onBlur={onBlur}
				onChange={(e) => {
					handleChange(e, 'name')
				}}
				value={row.name || ''}
			/>
		</>
	)
}
export { CatName }