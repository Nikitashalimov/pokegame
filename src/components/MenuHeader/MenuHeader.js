import { useState } from "react";
import Menu from "./Menu/Menu";
import Navbar from "./Navbar/Navbar";

const MenuHeader = ({ bgActive }) => {

	const [mainStatus, setStatus] = useState(false);
	console.log(mainStatus)

	const handleChangeStatus = () => {
		setStatus(prevState => !prevState);
	}

	return (
		<>
			<Menu
				status={mainStatus}
				onChangeStatus={handleChangeStatus}
			/>
			<Navbar
				status={mainStatus}
				bgActive={bgActive}
				onChangeStatus={handleChangeStatus}
			/>
		</>
	);
}

export default MenuHeader;