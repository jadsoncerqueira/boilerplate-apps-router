import { render, screen } from '@testing-library/react'

import NavBar from '.'

describe('<NavBar />', () => {
  it('verificando renderização', () => {
    render(<NavBar />)

    expect(screen.getByText('NavBar')).toBeInTheDocument()
  })
})
