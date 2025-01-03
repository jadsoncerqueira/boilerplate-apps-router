import { render, screen } from '@testing-library/react'

import Home from '../../src/app/page'

describe('Texte exemplo', () => {
  it('verificando renderização', () => {
    render(<Home />)

    expect(screen.getByText('Boilerplate Next.js')).toBeInTheDocument()
  })
})
