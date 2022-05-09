import l from "./Layout.module.css";

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
		className={l.root} 
		style={layoutStyle} 
		id={id}
		>
			<div className={l.wrapper}>
				<article>
					<div className={l.title}>
						<h3>{title}</h3>
						<span className={l.separator}></span>
					</div>
					<div className={`${l.desc} ${l.full}`}>
						{children}
					</div>
				</article>
			</div>
		</section>
	);
}

export default Layout;