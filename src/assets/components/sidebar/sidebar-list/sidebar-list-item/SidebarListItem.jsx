import style from './SidebarListItem.module.scss'

const SidebarListItem = (props) => {
	return (
		<>
			<div className={style.wrapper}>
				{props.icon}
				{props.label}
			</div>
		</>
	)
}

export { SidebarListItem }