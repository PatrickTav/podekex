import React, { useEffect, useState } from "react";
import * as Wel from "./styled";
import { Text } from "react-native";

// Animation e image
import LottieView from "lottie-react-native";
import three from "./three.json";

// Request
import api from "../../services/api";

type PokemonType = {
  type: string;
};

type Pokemon = {
  name: string;
  id: number;
  url: string;
  types: PokemonType[];
};

type Request = {
  id: number;
  types: PokemonType[];
};

export default function WelcomePage() {
  const [dataPokemon, setDataPokemon] = useState<Pokemon[]>([])

  useEffect(() => {
    try {
      async function getPokemons() {
        const responde = await api.get("/pokemon");
        const { results } = responde.data;

        const payloadInfosPokemon = await Promise.all(
          results.map(async (pokemon: Pokemon) => {
            const { id, types } = await getMoreInfoPokemon(pokemon.url);

            return {
              name: pokemon.name,
              id,
              types,
            };
          })
        );
        setDataPokemon(payloadInfosPokemon)
      }
      getPokemons();
    } catch (error) {
      console.log("erro:" + error);
    }
  }, []);

  async function getMoreInfoPokemon(url: string): Promise <Request> {
    try {
      const response = await api.get(url);
      const { id, types } = response.data;
      return { id, types };
    } catch (error) {
      console.log("erro:" + error);
    }
  }


  console.log(dataPokemon)
  return (
    <Wel.Container>
      <Wel.Content>
        <LottieView source={three} autoPlay loop />
        <Wel.Title style={{ marginTop: 200 }}> Welcome to Pokedex</Wel.Title>
      </Wel.Content>
      <Wel.Footer>
        <Wel.SubTitle> Discovery all Pokemons </Wel.SubTitle>
        <Wel.Button onPress={() => alert("clicou")}>
          <Wel.TextButton>Discovery</Wel.TextButton>
        </Wel.Button>
      </Wel.Footer>
    </Wel.Container>
  );
}
