import { useTheme } from '../../state/state'
import style from './ToggleTheme.module.scss'

const ToggleTheme = () => {
	const { container, input } = style

	const { setIsLight, setIsDark, theme } = useTheme()

	const handleChangeMode = () => {
		if (theme === 'dark') {
			setIsLight()
		} else {
			setIsDark()
		}
	}


	return (
		<>
			<div className={container}>
				<input
					className={input}
					type="checkbox"
					name="theme"
					id="theme"
					onChange={handleChangeMode}
					checked={theme === 'dark'}
				/>
				<label htmlFor="check">dark mode</label>
			</div>
		</>
	)
}


export { ToggleTheme }


