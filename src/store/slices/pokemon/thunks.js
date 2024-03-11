import { pokemonApi } from './pokemonApi';
import { setPokemons, startLoadingPokemons } from './pokemonSlice';

export const getPokemons = (page = 0) => {
	return async (dispatch, getState) => {
		dispatch(startLoadingPokemons());

		//TODO realizar peticion http

		// const respt = await fetch(
		// 	`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`
		// );

		// const data = await respt.json();

		// console.log(data);

		// const resp = await pokemonApi.get(`/pokemon?limit=10&offset=${page * 10}`);

		// console.log(resp);

		const { data } = await pokemonApi.get(
			`/pokemon?limit=10&offset=${page * 10}`
		);

		dispatch(setPokemons({ pokemons: data.results, page: page + 1 }));
	};
};
