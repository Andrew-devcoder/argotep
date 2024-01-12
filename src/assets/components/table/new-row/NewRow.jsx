import { CatAge } from "../../room/cat-age/CatAge"
import { CatBreed } from "../../room/cat-breed/CatBreed"
import { CatFact } from "../../room/cat-fact/CatFact"
import { CatName } from "../../room/cat-name/CatName"

import style from './NewRow.module.scss'

const NewRow = ({ rows }) => {
	return (
		<>
			<div className={style.wrapper}>
				<p>{rows.id}. </p>
				<CatName />
				<CatBreed />
				<CatAge />
				<CatFact rows={rows} />
			</div>
		</>
	)
}

export { NewRow }