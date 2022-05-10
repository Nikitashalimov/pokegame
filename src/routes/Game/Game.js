import s from "./Game.module.css"

const GamePage = ({ onChangePage }) => {
	const handleClickButton = () => {
		console.log('####: <GamePage />');
		onChangePage && onChangePage('app');
	}

	return (
		<div>
			<div>This is Game Page!!!</div>
			<button className={s.button} onClick={handleClickButton}>
				Return main
			</button>
		</div>
	)
}

export default GamePage;