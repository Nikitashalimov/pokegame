import { useState } from "react";
import Menu from "./Menu/Menu";
import Navbar from "./Navbar/Navbar";

const MenuHeader = () => {

	const [mainStatus, setStatus] = useState('active');

	const handleChangeStatus = () => {
		console.log('дошло');
		if (mainStatus == 'deactive') {
			setStatus('active');
		} else {
			setStatus('deactive');
		}
	}

	return (
		<div>
			<Menu status={mainStatus} />
			<Navbar status={mainStatus} onChangeStatus={handleChangeStatus} />
		</div>
	);
}

export default MenuHeader;