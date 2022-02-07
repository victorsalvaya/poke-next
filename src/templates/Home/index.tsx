import Image from 'next/image';

import { Container, Title, ColorSpan, PokeContainer } from './styles'

import Card from '../../../components/Card/index'

export interface IHomeProps {
    pokemons: any
}

export default function Home(props:IHomeProps) {
    const pokemons = props.pokemons
    
    return (
        <>
            <Container>
                <Title>Poke<ColorSpan>Next</ColorSpan></Title>
                <Image src='/images/pokeball.png' width="50" height="50" alt="Pokenext" />
            </Container>
            <PokeContainer>
                {pokemons.map((pokemon) => (
                    <Card key={pokemon.id} pokemon={pokemon} />
                ))}
            </PokeContainer>
        </>
    )
}
