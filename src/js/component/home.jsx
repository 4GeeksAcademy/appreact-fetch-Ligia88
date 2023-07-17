import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const pokeApi = 'https://pokeapi.co/api/v2/';

	//fetch(urlAPI).then(promesa).then(resultado).catch(mesaje de error)
	fetch(pokeApi).then((result) => {
		console.log (result)
		return result.json()
		}).then((data)=> {
		return console.log(data)
		}).catch()
	return (
		<div className="text-center">	
		</div>
	);
};

export default Home;
