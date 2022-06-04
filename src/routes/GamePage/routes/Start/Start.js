import { useState, useEffect, useContext } from "react";
import PokemonCard from '../../../../components/PokemonCard/PokemonCard';

import s from "./Start.module.css";
import { FireBaseContext } from "../../../../context/firebaseContext";
import { PokemonContext } from "../../../../context/pokemonContext";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const StartPage = () => {
	const firebase = useContext(FireBaseContext);
	const pokemonsContext = useContext(PokemonContext);
	const history = useHistory();
	const [pokemons, setPokemons] = useState({});

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
		history.push('/game/board');
	}

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