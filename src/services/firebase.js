import firebase from "firebase/app";
import 'firebase/database';

const firebaseConfig = {
	apiKey: "AIzaSyCqAzNrRb8jR8ESUXisUfd6-tlrC8AfvLg",
	authDomain: "pokemon-game-feb4c.firebaseapp.com",
	databaseURL: "https://pokemon-game-feb4c-default-rtdb.firebaseio.com",
	projectId: "pokemon-game-feb4c",
	storageBucket: "pokemon-game-feb4c.appspot.com",
	messagingSenderId: "932130210670",
	appId: "1:932130210670:web:8954c2ba49f8523dfd377f"
};

firebase.initializeApp(firebaseConfig);

class Firebase {
	constructor() {
		this.fire = firebase;
		this.database = this.fire.database();
	}

	getPokemonSoket = (cb) => {
		this.database.ref('pokemons').on('value', (snapshot) => {
			cb(snapshot.val())
		})
	}

	offPokemonSoket = (cb) => {
		this.database.ref('pokemons').off()
	}

	getPokemonsOnce = async () => {
		return await this.database.ref('pokemons').once('value').then(snapshot => snapshot.val());
	}

	postPokemon = (key, pokemon) => {
		this.database.ref(`pokemons/${key}`).set(pokemon);
	}

	addPokemon = (data, cb) => {
		const newKey = this.database.ref().child('pokemons').push().key;
		this.database.ref('pokemons/' + newKey).set(data).then(() => cb());
	}
}

export default Firebase;