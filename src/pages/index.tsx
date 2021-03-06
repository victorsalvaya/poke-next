import Home from '../templates/Home/index';
import { GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps = async () => {
  const maxPokemons = 251
  const api = 'https://pokeapi.co/api/v2/pokemon/'

  const rest = await fetch(`${api}/?limit=${maxPokemons}`)
  const data = await rest.json()

  // add pokemon index

  data.results.forEach((item: any, index: number) => {
    item.id = index + 1
  })

  return {
    props: { pokemons: data.results },
  }
}

export default function HomePage({ pokemons }) {
  return (
    <>
      <Home pokemons={pokemons}></Home>
    </>
  )
}
