import { CiStar } from "react-icons/ci";
import { SidebarListItem } from "./sidebar-list-item/SidebarListItem";

import style from './SidebarList.module.scss'

// remove to state {toggleSideBar} -> zustand

// я згадав чому спочатку вирішив додати іконки в масив з об'єктами 
// тому що в меню вони можуть бути різними  

const arrayList = [
	{ label: 'text1' },
	{ label: 'text1' },
	{ label: 'text1' },
]

const SidebarList = ({ toggleSideBar }) => {
	//  edit 
	return (
		<div className={style.wrapper}>
			{arrayList.map((item, index) => (
				<SidebarListItem key={index} label={!toggleSideBar && item.label} />
			))}
		</div>
	)
}

export { SidebarList }