import { useState } from 'react'
import { SidebarList } from './sidebar-list/SidebarList'
import { useTheme } from '../../state/state'

import style from './Sidebar.module.scss'

const Sidebar = ({ onToggleSidebar }) => {
	const [toggleSideBar, setToggleSideBar] = useState(false)
	const { theme } = useTheme()

	const handleButtonClick = () => {
		setToggleSideBar(!toggleSideBar)
		onToggleSidebar(!toggleSideBar);
	}

	return (
		<>
			<div className={style.layout} data-theme={theme}>
				<div className={style.wrapper}>

					<button className={`${style.toggleButtonOpen} ${toggleSideBar ? style.sidebarOpen : ''}`} onClick={handleButtonClick} />

					<SidebarList toggleSideBar={toggleSideBar} />
				</div>
			</div>
		</>
	)
}

export { Sidebar }