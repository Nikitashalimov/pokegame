import s from './Navbar.module.css';
import cn from 'classnames';

const Navbar = ({ status, onChangeStatus }) => {

	const handleClick = () => {
		console.log('####: <Navbar />');
		onChangeStatus && onChangeStatus();
	}

	return (
		<nav className={s.root}>
			<div className={s.navWrapper}>
				<p className={s.brand}>
					LOGO
				</p>
				<a className={cn(s.menuButton, s[status])} onClick={handleClick}>
					<span />
				</a>
			</div>
		</nav>
	);
}

export default Navbar;