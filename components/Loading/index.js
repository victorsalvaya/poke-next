import Image from 'next/image'
import { Container, TitleLoading, SpanLoading } from './styles'

export default function Loading() {
    return (

        <Container>
            <Image src="/images/pikachu.gif" width='290' height='200' alt='Pikachu Gif' />
            <TitleLoading><SpanLoading>Load</SpanLoading>ing...</TitleLoading>
        </Container>
    )
} 