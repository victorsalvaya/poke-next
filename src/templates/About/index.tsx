import Image from 'next/image';
import { Container, Title, Paragraph } from './styles';

export const About: React.FC = () => {
    return (
        <Container>
            <Title>Sobre o projeto</Title>
            <Paragraph>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </Paragraph>
            <Image src='/images/charizard.png' width='300' height='300' alt='Charizard' />
        </Container>
    )
}

export default About