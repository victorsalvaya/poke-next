import Home from '../templates/Home'

export async function getStaticProps() {

  const maxPokemons = 251
  const api = 'https://pokeapi.co/api/v2/pokemon/'

  const rest = await fetch(`${api}/?limit=${maxPokemons}`)
  const data = await rest.json()

  // add pokemon index

  data.results.forEach((item, index) => {
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
