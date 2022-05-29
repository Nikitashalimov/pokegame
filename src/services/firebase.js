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

export const fire = firebase;
export const database = firebase.database();

export default database;