import s from './Navbar.module.css';
import cn from 'classnames';

const Navbar = ({ status, bgActive = false, onChangeStatus }) => {

	return (
		<nav id={s.navbar} className={cn({ [s.bgActive]: bgActive })}>
			<div className={s.navWrapper}>
				<p className={s.brand}>
					LOGO
				</p>
				<a className={cn(s.menuButton, { [s.active]: status })} onClick={onChangeStatus}>
					<span />
				</a>
			</div>
		</nav>
	);
}

export default Navbar;