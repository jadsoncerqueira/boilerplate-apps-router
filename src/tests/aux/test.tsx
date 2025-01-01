import { render, screen } from '@testing-library/react'

import Home from '../../../src/app/page'

describe('Texte exemplo', () => {
  it('verificando renderização', () => {
    render(<Home />)

    expect(
      screen.getByRole('heading', { name: /react avançado/i })
    ).toBeInTheDocument()
  })
})
