import { useState } from 'react';
import { Sidebar } from '../../assets/components/sidebar/Sidebar'
import { CentralArea } from '../../assets/components/central-area/CentralArea';

import style from './Home.module.scss'
import { CheckboxContextProvider } from '../../context/checkbox-context';

const Home = () => {

	const [sidebarOpen, setSidebarOpen] = useState(false);

	const toggleSidebarStyles = (isOpen) => {
		setSidebarOpen(isOpen);
		console.log('click')
	};
	return (
		<>
			<CheckboxContextProvider>
				<div className={`${style.layout} ${sidebarOpen ? style.sidebarOpen : ''}`}>
					<Sidebar onToggleSidebar={toggleSidebarStyles} />
					<CentralArea />
				</div>
			</CheckboxContextProvider>
		</>
	)
}
export { Home }