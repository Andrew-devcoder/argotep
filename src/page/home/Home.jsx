import { Sidebar } from '../../components/sidebar/Sidebar';
import { CentralArea } from '../../components/central-area/CentralArea';

import style from './Home.module.scss'

const Home = () => {
	return (
		<div className={style.layout}>
			<Sidebar />
			<CentralArea />
		</div>
	)
}
export { Home }