import Image from 'next/image'
import Link from 'next/link'
import { Container, TitleCard, IdCard, BtnCard } from './styles'

export default function Card({ pokemon }) {
    return (
        <Container>
            <Image
                src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`}
                width='120'
                height='120'
                alt={pokemon.name}
            />
            <IdCard>#{pokemon.id}</IdCard>
            <TitleCard>{pokemon.name}</TitleCard>
            <Link href={`/pokemon/${pokemon.id}`} passHref><BtnCard>Detalhes</BtnCard></Link>
        </Container>
    )
}
