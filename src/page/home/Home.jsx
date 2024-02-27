import { useState } from 'react';
import { Sidebar } from '../../components/sidebar/Sidebar';
import { CentralArea } from '../../components/central-area/CentralArea';

import style from './Home.module.scss'

const Home = () => {
	const [sidebarOpen, setSidebarOpen] = useState(false);

	const toggleSidebarStyles = (isOpen) => {
		setSidebarOpen(isOpen);
		// console.log('click')
	};

	// edit sidebar 

	return (
		<div className={`${style.layout} ${sidebarOpen ? style.sidebarOpen : ''}`}>
			<Sidebar onToggleSidebar={toggleSidebarStyles} />
			<CentralArea />
		</div>
	)
}
export { Home }