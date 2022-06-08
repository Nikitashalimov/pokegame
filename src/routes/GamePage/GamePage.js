import { useRouteMatch, Switch, Route } from 'react-router-dom';
import StartPage from './routes/Start/Start';
import BoardPage from './routes/Board/Board';
import FinishPage from './routes/Finish/Finish';
import { PokemonContext } from '../../context/pokemonContext';
import { Player1PokemonsContext } from '../../context/player1PokemonsContext';
import { Player2PokemonsContext } from '../../context/player2PokemonsContext';
import { useState } from 'react';

const GamePage = () => {
    const [selectedPokemons, setSelectedPokemons] = useState({});
    const [player1Pokemons, setPlayer1Pokemons] = useState();
    const [player2Pokemons, setPlayer2Pokemons] = useState();

    const match = useRouteMatch();

    const handleSelectedPokemons = (key, pokemon) => {
        setSelectedPokemons(prevState => {
            if (prevState[key]) {
                const copyState = { ...prevState };
                delete copyState[key];

                return copyState;
            }
            return {
                ...prevState,
                [key]: pokemon,
            }
        })
    }

    return (
        <PokemonContext.Provider value={{
            pokemons: selectedPokemons,
            onSelectedPokemons: handleSelectedPokemons,
        }}>
            <Player1PokemonsContext.Provider value={[player1Pokemons, setPlayer1Pokemons]}>
                <Player2PokemonsContext.Provider value={[player2Pokemons, setPlayer2Pokemons]}>
                    <Switch>
                        <Route path={`${match.path}/`} exact component={StartPage} />
                        <Route path={`${match.path}/board`} component={BoardPage} />
                        <Route path={`${match.path}/finish`} component={FinishPage} />
                    </Switch>
                </Player2PokemonsContext.Provider >
            </Player1PokemonsContext.Provider>
        </PokemonContext.Provider >
    );
};

export default GamePage;