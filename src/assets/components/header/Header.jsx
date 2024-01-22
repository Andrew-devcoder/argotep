import { useContext, useEffect, useState } from 'react'
import { CheckboxContext } from '../../../context/checkbox-context';

import style from './Header.module.scss'
import { useStore, useTables } from '../../../state/store';

const Header = ({ handleAddNewTable }) => {

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


	// for test store 
	const { count, increment, decrement } = useStore()


	// test for use new table 
	const { addTable } = useTables()

	return (
		<>
			<div className={style.wrapper}>
				<div className={style.nav}>

					{/* for test store */}
					<div>
						<p>Count: {count}</p>
						<button onClick={increment}>Increment</button>
						<button onClick={decrement}>Decrement</button>
					</div>
					{/* for test store */}

					{/* test for use add new table */}
					<button onClick={addTable}>add new table</button>
					{/* test for use add new table */}

					<button onClick={() => handleAddNewTable(count => count + 1)}>new block</button>

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