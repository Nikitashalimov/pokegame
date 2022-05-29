import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import PokemonCard from '../../components/PokemonCard/PokemonCard';

import database from "../../services/firebase";

import cn from 'classnames';
import s from "./GamePage.module.css"

const newPokemon = {
	"abilities": [
		"keen-eye",
		"tangled-feet",
		"big-pecks"
	],
	"base_experience": 122,
	"height": 11,
	"weight": 300,
	"id": 17,
	"img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/17.png",
	"name": "pidgeotto",
	"stats": {
		"hp": 63,
		"attack": 60,
		"defense": 55,
		"special-attack": 50,
		"special-defense": 50,
		"speed": 71
	},
	"type": "normal",
	"values": {
		"top": 7,
		"right": 5,
		"bottom": 1,
		"left": 2
	}
}

const GamePage = () => {
	const history = useHistory();

	const handleClickButton = () => {
		history.push('/');
	}

	const handleClickAddPokemon = async () => {
		database.ref('pokemons').push(newPokemon)
	}

	const [pokemons, setPokemons] = useState({});

	useEffect(() => {
		database.ref('pokemons').once('value', (snapshot) => {
			setPokemons(snapshot.val());
		});
	}, []);

	const cardFlip = id => {
		setPokemons(prevState => {
			return Object.entries(prevState).reduce((acc, item) => {
				const pokemon = { ...item[1] }
				if (pokemon.id === id) {
					pokemon.isActive = pokemon.isActive ? !pokemon.isActive : true
					database.ref('pokemons/' + item[0]).set(pokemon)
				}
				acc[item[0]] = pokemon
				return acc
			}, {})
		})
	}

	return (
		<div>
			<div>This is Game Page!!!</div>
			<div className={s.buttonbox}>
				<button
					className={s.button}
					onClick={handleClickButton}
				>
					Return main
				</button>
				<button
					className={cn(s.button, s.addCard)}
					onClick={handleClickAddPokemon}
				>
					Add new pokemon
				</button>
			</div>
			<div className={s.flex}>
				{
					Object.entries(pokemons).map(([key, { name, img, id, type, values, isActive }]) => (
						<PokemonCard
							key={key}
							name={name}
							img={img}
							type={type}
							id={id}
							values={values}
							isActive={isActive}
							changeStatus={cardFlip}
						/>
					))
				}
			</div>
		</div>
	)
}

export default GamePage;