import { NavLink } from 'react-router-dom';

import style from './list.module.scss';

const List = props => {
	const { items } = props;

	const renderItems = items.map(el => {
		return (
			<li key={el.id}>
				<NavLink className={style.item} to={`/crafts/${el.id}`}>
					{el.title}
				</NavLink>
			</li>
		);
	});
	console.log(renderItems);

	return (
		<nav className={style.navigation}>
			<ul className={style.craftLIst}>{renderItems}</ul>
		</nav>
	);
};

export default List;
