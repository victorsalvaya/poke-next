import Image from 'next/image'
import Loading from '../../components/Loading/index'
import { Container, Title, DivElement, TitleSection, Paragraph, ContainerTypes, ContainerData, DataWeight, DataHeight, TitleAttributes, SpanResults } from './styles'

import { useRouter } from 'next/router'

export default function Pokemon(props) {
    const pokemon = props.pokemon
    const router = useRouter()

    if (router.isFallback) {
        return <Loading />
    }

    return (
        <Container>
            <Title>{pokemon.name}</Title>
            <Image
                src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`}
                width='200'
                height='200'
                alt={pokemon.name}
            />
            <DivElement>
                <TitleSection>Número:</TitleSection>
                <Paragraph>#{pokemon.id}</Paragraph>
            </DivElement>
            <DivElement>
                <TitleSection>Tipo:</TitleSection>
                <ContainerTypes>
                    {pokemon.types.map((item, index) => (
                        <SpanResults key={index} className={`type_${item.type.name}`}>{item.type.name}</SpanResults>
                    ))}
                </ContainerTypes>
            </DivElement>
            <ContainerData>
                <DataHeight>
                    <TitleAttributes>Altura:</TitleAttributes>
                    <Paragraph>{pokemon.height * 10} cm</Paragraph>
                </DataHeight>
                <DataWeight>
                    <TitleAttributes>Peso:</TitleAttributes>
                    <Paragraph>{pokemon.weight / 10} kg</Paragraph>
                </DataWeight>
            </ContainerData>
        </Container>
    )
}