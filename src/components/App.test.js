import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'

test('renders game links', () => {
    render(
        <Router>
            <App />
        </Router>,
    )

    expect(screen.getByText(/typing/i)).toBeInTheDocument()
    expect(screen.getByText(/pony/i)).toBeInTheDocument()
})
