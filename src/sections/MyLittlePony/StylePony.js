import React, { useState, useCallback, useMemo } from 'react'
import ColorButton from './ColorButton'
import StylePonySVG from './StylePonySVG'
import randomColor from 'randomcolor'

const StylePony = () => {
    const [titleColor, setTitleColor] = useState('orange')
    const [borderColor, setBorderColor] = useState('purple')
    const [hairColor, setHairColor] = useState('red')
    const [bodyColor, setBodyColor] = useState('green')
    const [bgColor, setBgColor] = useState('green')

    // Memoize this function so that the random colors stay the same during re-renders.
    // For the sake of the assignment lets pretend that this is a very expensive function.
    const colorGenerator = useMemo(() => {
        let randomColors = []
        for (let i = 0; i < 10; i++) {
            const color = randomColor()
            randomColors.push(color)
        }
        return randomColors
    }, [])

    const handleStyleChange = () => {
        const randomForTitle = Math.floor(Math.random() * colorGenerator.length)
        const randomForBorder = Math.floor(
            Math.random() * colorGenerator.length,
        )
        setTitleColor(colorGenerator[randomForTitle])
        setBorderColor(colorGenerator[randomForBorder])
    }

    // Memoize <ColorButton /> from continously being re-rendered when handleStyleChange is executed
    const handleHairColorChange = useCallback(
        (e) => {
            setHairColor(e.target.style.backgroundColor)
        },
        [setHairColor],
    )

    const handleBodyColorChange = useCallback(
        (e) => {
            setBodyColor(e.target.style.backgroundColor)
        },
        [setBodyColor],
    )

    const handleBgColorChange = useCallback(
        (e) => {
            setBgColor(e.target.style.backgroundColor)
        },
        [setBgColor],
    )

    const styles = {
        border: `5px solid ${borderColor}`,
        color: titleColor,
    }

    return (
        <div>
            <p>Style Pony</p>

            <div>
                <h3>Settings</h3>
                <div>
                    <button onClick={handleStyleChange}>click</button>
                </div>
                <div>
                    <h4>Hair</h4>
                    <ColorButton
                        onClickHandler={handleHairColorChange}
                        colors={colorGenerator}
                    />
                </div>
                <div>
                    <h4>Body</h4>
                    <ColorButton
                        onClickHandler={handleBodyColorChange}
                        colors={colorGenerator}
                    />
                </div>
                <div>
                    <h4>Background</h4>
                    <ColorButton
                        onClickHandler={handleBgColorChange}
                        colors={colorGenerator}
                    />
                </div>
            </div>
            <div style={styles}>
                <h1>My Pony</h1>
                <StylePonySVG
                    hairColor={hairColor}
                    bodyColor={bodyColor}
                    bgColor={bgColor}
                />
            </div>
        </div>
    )
}

export default StylePony
