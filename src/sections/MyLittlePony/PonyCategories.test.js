import React from 'react'
import PonyCategories from './PonyCategories'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { BrowserRouter as Router } from 'react-router-dom'

test('PonyCategories renders with correct title', () => {
    const component = render(
        <Router>
            <PonyCategories />
        </Router>
    )
    const titleElement = component.getByTestId('title')

    expect(titleElement.textContent).toBe('Types of Ponies')
})

test('Pony category names are rendered', () => {
    const component = render(
        <Router>
            <PonyCategories />
        </Router>
    )
    const categoryElement = component.getAllByTestId('pony-cat')
    expect(categoryElement[0].textContent).toBe('Alicorn')
    expect(categoryElement[1].textContent).toBe('Unicorn')
    expect(categoryElement[2].textContent).toBe('Earth')
    expect(categoryElement[3].textContent).toBe('Pegasus')
    expect(categoryElement[4].textContent).toBe('Dragon')
})
