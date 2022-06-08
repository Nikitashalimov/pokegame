import { useContext } from 'react';
import { Player1PokemonsContext } from "../../../../context/player1PokemonsContext";
import { Player2PokemonsContext } from "../../../../context/player2PokemonsContext";


const FinishPage = () => {
	const [player1Pokemons, setPlayer1Pokemons] = useContext(Player1PokemonsContext);
	const [player2Pokemons, setPlayer2Pokemons] = useContext(Player2PokemonsContext);
	console.log('111#', player1Pokemons);
	console.log('111#', player2Pokemons);

	return (
		<div>
			This is Finish Page
		</div>
	);
};

export default FinishPage;