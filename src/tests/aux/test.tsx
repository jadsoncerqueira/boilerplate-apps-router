import { render, screen } from '@testing-library/react'

import Main from '.'

describe('Texte exemplo', () => {
  it('verificando renderização', () => {
    render(<Main />)
    expect(
      screen.getByRole('heading', { name: /react avançado/i })
    ).toBeInTheDocument()
  })
})
