import { useState, useEffect, useContext } from "react";
import PokemonCard from '../../../../components/PokemonCard/PokemonCard';

import s from "./Start.module.css";
import { FireBaseContext } from "../../../../context/firebaseContext";
import { PokemonContext } from "../../../../context/pokemonContext";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Player1PokemonsContext } from '../../../../context/player1PokemonsContext';

const StartPage = () => {
	const firebase = useContext(FireBaseContext);
	const pokemonsContext = useContext(PokemonContext);
	const history = useHistory();
	const [pokemons, setPokemons] = useState({});
	const [player1Pokemons, setPlayer1Pokemons] = useContext(Player1PokemonsContext);

	useEffect(() => {
		firebase.getPokemonSoket((pokemons) => {
			setPokemons(pokemons);
		});

		return () => firebase.offPokemonSoket();
	}, []);

	const handleChangeSelected = (key) => {
		const pokemon = { ...pokemons[key] };
		pokemonsContext.onSelectedPokemons(key, pokemon);

		setPokemons(prevState => ({
			...prevState,
			[key]: {
				...prevState[key],
				selected: !prevState[key].selected,
			}
		}))
	}

	const handleStartGameClick = () => {
		setPlayer1Pokemons(Object.entries(pokemons));
		history.push('/game/board');
	}

	console.log(Object.entries(pokemons));

	return (
		<div>
			<button
				className={s.button}
				onClick={handleStartGameClick}
				disabled={Object.keys(pokemonsContext.pokemons).length < 5}
			>
				Start Game
			</button>
			<div className={s.flex}>
				{
					Object.entries(pokemons).map(([key, { name, img, id, type, values, selected }]) => (
						<PokemonCard
							className={s.card}
							key={key}
							name={name}
							img={img}
							type={type}
							id={id}
							values={values}
							isActive={true}
							isSelected={selected}
							changeStatus={() => {
								if (Object.keys(pokemonsContext.pokemons).length < 5 || selected) {
									handleChangeSelected(key)
								}
							}}
						/>
					))
				}
			</div>
		</div>
	)
}

export default StartPage;