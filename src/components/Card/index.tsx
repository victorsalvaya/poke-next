import Image from 'next/image'
import Link from 'next/link'
import { Container, TitleCard, IdCard, BtnCard } from './styles'

export default function Card({ pokemon }) {
    return (
        <Container>
            <Image
                data-testid="img-card"
                src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`}
                width='120'
                height='120'
                alt={pokemon.name}
                priority={true}
            />
            <IdCard data-testid="id-card">#{pokemon.id}</IdCard>
            <TitleCard data-testid="title-card">{pokemon.name}</TitleCard>
            <Link href={`/pokemon/${pokemon.id}`} passHref><BtnCard data-testid="link-card">Detalhes</BtnCard></Link>
        </Container>
    )
}
