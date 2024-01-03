import { CiStar } from "react-icons/ci";
import { SidebarListItem } from "./sidebar-list-item/SidebarListItem";

import style from './SidebarList.module.scss'

const SidebarList = ({ toggleSideBar }) => {


	const arrayList = [
		{ icon: <CiStar size={'30px'} />, label: 'text1' },
		{ icon: <CiStar size={'30px'} />, label: 'text1' },
		{ icon: <CiStar size={'30px'} />, label: 'text1' },
	]


	return (
		<>
			<div className={style.wrapper}>
				{arrayList.map((item, index) => (
					<SidebarListItem key={index} icon={item.icon} label={!toggleSideBar && item.label} />
				))}
			</div>

		</>
	)
}

export { SidebarList }