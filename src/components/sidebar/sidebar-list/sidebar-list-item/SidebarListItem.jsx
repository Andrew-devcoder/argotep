import { CiStar } from 'react-icons/ci'
import style from './SidebarListItem.module.scss'

const SidebarListItem = (props) => {
	return (
		<>
			<div className={style.wrapper}>
				<CiStar size={'30px'} />
				{props.label}
			</div>
		</>
	)
}

export { SidebarListItem }