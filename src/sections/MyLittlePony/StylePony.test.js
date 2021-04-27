import React from 'react'
import StylePony from './StylePony'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

test('StylePony renders with correct title', () => {
    const component = render(<StylePony />)
    const titleElement = component.getByTestId('title')

    expect(titleElement.textContent).toBe('Style Your Pony')
})

test('Color buttons render with color attributes', () => {
    const component = render(<StylePony />)
    const colorElement = component.getAllByTestId('color-btn')
    expect(colorElement[0]).toHaveAttribute('color')
})
