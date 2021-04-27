import React, { useState, useCallback, useMemo } from 'react'
import ColorButton from './ColorButton'
import StylePonySVG from './StylePonySVG'
import randomColor from 'randomcolor'
import styled from 'styled-components'

// const Settings = styled.div``

const StyledPony = styled.div`
    display: flex;
    align-items: flex-start;
`
const Title = styled.h2`
    text-align: center;
`

const Settings = styled.div`
    border: 1px dotted #ffe400;
    flex: 1.2;
    text-align: center;
    width: 100%;
    padding: 16px;
`
const ThemeButton = styled.button`
    width: 100px;
    height: 100px;
    font-size: 16px;
    font-weight: 900;
    color: #500585;
    border: none;
    background-color: #ebae34;
    &:hover {
        transform: scale(1.1, 1.1);
    }
    margin-top: 24px;
`
const DisplayPony = styled.div`
    flex: 2.5;
    border: 20px solid ${(props) => props.borderColor};
    color: ${(props) => props.titleColor};
    background-color: ${(props) => (props.bgColor ? props.bgColor : '#FFF')};
    margin-left: 24px;
    text-align: center;
    font-size: 24px;
    font-family: 'Encode Sans', sans-serif;
    font-weight: 900;
`

const StylePony = () => {
    const [titleColor, setTitleColor] = useState('orange')
    const [borderColor, setBorderColor] = useState('purple')
    const [hairColor, setHairColor] = useState('red')
    const [bodyColor, setBodyColor] = useState('green')
    const [bgColor, setBgColor] = useState('white')

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
            Math.random() * colorGenerator.length
        )
        setTitleColor(colorGenerator[randomForTitle])
        setBorderColor(colorGenerator[randomForBorder])
    }

    // Memoize <ColorButton /> from continously being re-rendered when handleStyleChange is executed
    const handleHairColorChange = useCallback(
        (e) => {
            setHairColor(e.target.attributes.color.value)
        },
        [setHairColor]
    )

    const handleBodyColorChange = useCallback(
        (e) => {
            setBodyColor(e.target.attributes.color.value)
        },
        [setBodyColor]
    )

    const handleBgColorChange = useCallback(
        (e) => {
            setBgColor(e.target.attributes.color.value)
        },
        [setBgColor]
    )

    return (
        <div>
            <Title data-testid='title'>Style Your Pony</Title>
            <StyledPony>
                <Settings>
                    <h3>Settings</h3>
                    <div>
                        <h4>Body</h4>
                        <ColorButton
                            onClickHandler={handleBodyColorChange}
                            colors={colorGenerator}
                        />
                    </div>

                    <div>
                        <h4>Hair</h4>
                        <ColorButton
                            onClickHandler={handleHairColorChange}
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
                    <div>
                        <ThemeButton onClick={handleStyleChange}>
                            Pick A Theme
                        </ThemeButton>
                    </div>
                </Settings>
                <DisplayPony
                    borderColor={borderColor}
                    titleColor={titleColor}
                    bgColor={bgColor}
                >
                    <h2>My Pony</h2>
                    <StylePonySVG hairColor={hairColor} bodyColor={bodyColor} />
                </DisplayPony>
            </StyledPony>
        </div>
    )
}

export default StylePony
