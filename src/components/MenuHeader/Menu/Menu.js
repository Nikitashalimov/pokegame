import s from './Menu.module.css';
import cn from 'classnames';

const MENU = [
	{
		title: 'HOME',
		to: '#welcome',
	},
	{
		title: 'GAME',
		to: '#game',
	},
	{
		title: 'ABOUT',
		to: '#about',
	},
	{
		title: 'CONTACT',
		to: '#contact',
	},
]

const Menu = ({ status }) => {

	return (
		<div className={cn(s.menuContainer, {
			[s.active]: status === true,
			[s.deactive]: status === false
		})}>
			<div className={s.overlay} />
			<div className={s.menuItems}>
				<ul>
					{
						MENU.map(({ title, to }, index) => (
							<li key={index}>
								<a href={to}>
									{title}
								</a>
							</li>
						))
					}
				</ul>
			</div>
		</div>
	);
}

export default Menu;