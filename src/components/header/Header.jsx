import { sendDataToServer } from '../../services/data-server/dataServer';
import { useDateToday, useRooms, useTheme } from '../../state/state';
import { ToggleTheme } from '../toggle-theme/ToggleTheme';

import style from './Header.module.scss'

const Header = () => {
	const { addNewRoom } = useRooms()
	const { today, setChecked, setDisabled } = useDateToday()
	const { setIsLight, setIsDark, theme } = useTheme()

	const handleChangeMode = () => {
		if (theme === 'dark') {
			setIsLight()
		} else {
			setIsDark()
		}
	}

	const sendData = async () => {
		await addNewRoom()

		useRooms.setState((state) => {
			console.log(state, state.array)
			sendDataToServer(state.array)
			return state
		})
	}



	return (
		<>
			<div className={style.wrapper}>
				<div className={style.nav}>

					<button onClick={() => sendData()}>new room</button>

					<div>
						<input
							type='checkbox'
							id='today'
							name='today'
							checked={today}
							onChange={() => (today ? setDisabled() : setChecked())}
						>
						</input>
						<label htmlFor="today">today</label>
					</div>

					<div>
						<input type='checkbox' id='kittens' name='kittens'></input>
						<label htmlFor="kittens">kittens</label>
					</div>

					<ToggleTheme />

					{/* 
					<div>
						<input
							type="checkbox"
							name="theme"
							id="theme"
							onChange={handleChangeMode}
							checked={theme === 'dark'}
						/>
						<label htmlFor="check">dark mode</label>
					</div> */}

				</div>

			</div>
		</>
	)
}

export { Header }