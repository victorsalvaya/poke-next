import { render, screen, waitFor } from '@testing-library/react';
import Card from '../../components/Card';
import Image from 'next/image'

describe('Page About', () => {

    it('Render Card Title ', () => {
        const pokemon = { id: 1, name: 'Charmander' }
        render(<Card pokemon={pokemon} />)
        const elementCard = screen.getByTestId("title-card")
        expect(elementCard).toBeInTheDocument()
        expect(elementCard).toHaveTextContent('Charmander')
    })

    it('Render Card Id', () => {
        const pokemon = { id: 1, name: 'Charmander' }
        render(<Card pokemon={pokemon} />)
        const elementCard = screen.getByTestId("id-card")
        expect(elementCard).toBeInTheDocument()
        expect(elementCard).toHaveTextContent('1')
    })

    it('Render Card Link', () => {
        const pokemon = { id: 1, name: 'Charmander' }
        render(<Card pokemon={pokemon} />)
        const elementCard = screen.getByTestId("link-card")
        expect(elementCard).toBeInTheDocument()
        expect(elementCard).toHaveTextContent("Detalhes")
        expect(elementCard).toHaveAttribute("href", "/pokemon/1")
    })

    it('Render Card Image', async () => {
        const pokemon = { id: 1, name: 'Charmander' }
        render(<Card pokemon={pokemon} />)
        const elementCard = screen.getByTestId("img-card")
        expect(elementCard).toBeInTheDocument()
        // expect(elementCard).toHaveAttribute("src", "https://cdn.traction.one/pokedex/pokemon/1.png")
    })

})