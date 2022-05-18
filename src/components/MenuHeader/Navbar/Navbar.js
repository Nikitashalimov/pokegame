import s from './Navbar.module.css';
import cn from 'classnames';

const Navbar = ({ status, bgActive = false, onChangeStatus }) => {

	return (
		<nav className={cn(s.root, {
			[s.bgActive]: bgActive
		})}>
			<div className={s.navWrapper}>
				<p className={s.brand}>
					LOGO
				</p>
				<div className={cn(s.menuButton, {
					[s.active]: status
				})}
					onClick={onChangeStatus}>
					<span />
				</div>
			</div>
		</nav>
	);
}

export default Navbar;