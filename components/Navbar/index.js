import Link from "next/link";
import Image from 'next/image';
import { Container, Logo, Title, UnorderedList, ListItem, LinkStyle } from "./styles";

export default function Navbar() {
    return (
        <Container>
            <Logo>
                <Image src='/images/pokeball.png' width='30' height='30' alt="PokeNext" />
                <Title>PokeNext</Title>
            </Logo>
            <UnorderedList>
                <ListItem>
                    <Link href='/' passHref><LinkStyle>Home</LinkStyle></Link>
                </ListItem>
                <ListItem>
                    <Link href='/about' passHref><LinkStyle>Sobre</LinkStyle></Link>
                </ListItem>
            </UnorderedList>
        </Container>
    )
}