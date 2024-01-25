import { useContext, useEffect, useState } from 'react'
import { CheckboxContext } from '../../../context/checkbox-context';
import { useTables } from '../../../state/store';

import style from './Header.module.scss'

const Header = () => {

	const { today, setToday } = useContext(CheckboxContext)

	useEffect(() => {
		if (today) {
			console.log(new Date().toLocaleDateString())
		} else {
			console.log('checkbox today:', today)
		}

	}, [today])

	const handleChangeCheckboxToday = () => {
		setToday(!today)
	}

	// test for use new table 
	const { addTable } = useTables()

	return (
		<>
			<div className={style.wrapper}>
				<div className={style.nav}>

					<button onClick={addTable}>add new table</button>

					<div>
						<input
							type='checkbox'
							id='today'
							name='today'
							checked={today}
							onChange={handleChangeCheckboxToday}
						>
						</input>
						<label htmlFor="today">today</label>
					</div>

					<div>
						<input type='checkbox' id='kittens' name='kittens'></input>
						<label htmlFor="kittens">kittens</label>
					</div>
				</div>

			</div>
		</>
	)
}

export { Header }