import s from "./Layout.module.css";
import cn from 'classnames';

const Layout = ({id, title, urlBg, colorBg, children}) => {
	const layoutStyle = {};

	if (urlBg) {
		layoutStyle.backgroundImage = `url(${urlBg})`;
	}

	if (colorBg) {
		layoutStyle.background = colorBg;
	}

	return (
		<section 
		className={s.root} 
		style={layoutStyle} 
		id={id}
		>
			<div className={s.wrapper}>
				<article>
					<div className={s.title}>
						<h3>{title}</h3>
						<span className={s.separator}></span>
					</div>
					<div className={cn(s.desc, s.full)}>
						{children}
					</div>
				</article>
			</div>
		</section>
	);
}

export default Layout;