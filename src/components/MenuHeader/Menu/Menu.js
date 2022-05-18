import cn from 'classnames';
import { Link } from 'react-router-dom';

import s from './Menu.module.css';

const MENU = [
	{
		title: 'HOME',
		to: '/',
	},
	{
		title: 'GAME',
		to: '/game',
	},
	{
		title: 'ABOUT',
		to: '/about',
	},
	{
		title: 'CONTACT',
		to: '/contact',
	},
]

const Menu = ({ status, onChangeStatus }) => {

	return (
		<div className={cn(s.menuContainer, {
			[s.active]: status === true,
			[s.deactive]: status === false
		})}
		>
			<div className={s.overlay} />
			<div className={s.menuItems}>
				<ul>
					{
						MENU.map(({ title, to }, index) => (
							<li key={index}>
								<Link to={to} onClick={onChangeStatus}>
									{title}
								</Link>
							</li>
						))
					}
				</ul>
			</div>
		</div>
	);
}

export default Menu;