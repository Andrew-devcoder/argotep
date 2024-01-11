import { useEffect, useState } from 'react'
import { TableList } from '../table/table-list/TableList'

import style from './Header.module.scss'

const Header = ({ setCount }) => {

	return (
		<>
			<div className={style.wrapper}>
				<div className={style.nav}>

					<button onClick={() => setCount(count => count + 1)}>new block</button>

					<div>
						<input type='checkbox' id='today' name='today' ></input>
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