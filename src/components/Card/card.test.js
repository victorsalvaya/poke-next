import { render, screen } from '@testing-library/react';
import About from '../../templates/About';

describe('Page About', () => {
    it('Render Title Page', () => {
        render(<About />)

        const counterTitle = screen.getByText("Sobre o projeto")
        expect(counterTitle).toBeInTheDocument()

    })
})