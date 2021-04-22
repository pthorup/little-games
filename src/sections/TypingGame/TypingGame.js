import React, { useEffect, useState, useRef } from 'react'
import GameEnd from '../../components/GameEnd'
import GameImage from '../../components/GameImage'
import Settings from '../../components/Settings'
import GameInstruction from '../../components/GameInstruction'
import TypingGameInputText from './TypingGameInputText'
import GameData from './type-game.json'
import './TypingGame.css'

const TypingGame = () => {
    const [gameImage, setGameImage] = useState('')
    const [gameTitle, setGameTitle] = useState('')
    const [isUpperCase, setIsUpperCase] = useState(false)
    const [isGameOver, setIsGameOver] = useState(false)
    const [userInputText, setUserInputText] = useState('')
    const [isInputTextCorrect, setIsInputTextCorrect] = useState()
    const award = useRef('🏆')

    const handleUpperCaseChange = () => {
        setIsUpperCase(!isUpperCase)
        // reset user's input as they answer will be wrong upon caps change
        setUserInputText('')
    }

    const handleTextChange = (e) => {
        const userInputValue = e.target.value
        let trackIfCorrect = true

        // Go through all the characters in user input and compare to the title text.
        // Additional checks if upper case setting is enabled
        for (let i = 0; i < userInputValue.length; i++) {
            if (isUpperCase) {
                // check if gameTitle[i] is still valid as user can type sentence longer then title length by mistake.
                if (
                    gameTitle[i] !== undefined &&
                    userInputValue[i] !== gameTitle[i].toUpperCase()
                ) {
                    trackIfCorrect = false
                }
            } else {
                if (userInputValue[i] !== gameTitle[i]) {
                    trackIfCorrect = false
                }
            }
        }

        // if all is correct, user’s input text is purple. But if user makes one mistake. Text turns red.
        // isInputTextCorrect is use to add css class to the input box text
        if (trackIfCorrect) {
            setIsInputTextCorrect(true)
            if (userInputValue === gameTitle) {
                // New game button appears on screen.
                setIsGameOver(true)
            } else if (
                isUpperCase &&
                userInputValue === gameTitle.toUpperCase()
            ) {
                setIsGameOver(true)
            }
        } else {
            // responsible for setting text red
            setIsInputTextCorrect(false)
        }
        // saving user input on state to convert component into a controlled component
        setUserInputText(userInputValue)
    }

    const handleGameResetClick = () => {
        // reset input value
        setUserInputText('')
        // reset to false as new game has started
        setIsGameOver(false)
        // reset title hence triggering useEffect hook so new title/image is choosen
        setGameTitle('')
    }

    useEffect(() => {
        // Get a random image with respective text from JSON file
        const randomNum = Math.floor(
            Math.random() * Math.floor(GameData.length),
        )
        const { image, description } = GameData[randomNum]
        // Set on state to trigger re-render
        setGameImage(image)
        setGameTitle(description)
    }, [gameTitle])

    return (
        <div className="TypingGame">
            <div className="TypingGame-settingContainer">
                <Settings
                    isUpperCase={isUpperCase}
                    onCapsChange={handleUpperCaseChange}
                />
            </div>

            <div className="TypingGame-instructionContainer">
                {isUpperCase ? (
                    <GameInstruction text={gameTitle.toUpperCase()} />
                ) : (
                    <GameInstruction text={gameTitle} />
                )}
            </div>

            <div className="TypingGame-imgContainer">
                <GameImage image={gameImage} text={gameTitle} />
            </div>

            <div className="TypingGame-inputTextContainer">
                <TypingGameInputText
                    isWrong={isInputTextCorrect}
                    onTextChange={handleTextChange}
                    value={userInputText}
                    onGameOver={isGameOver}
                />
            </div>

            <div className="TypingGame-gameEndContainer">
                {isGameOver ? (
                    <GameEnd
                        onGameReset={handleGameResetClick}
                        award={award.current}
                    />
                ) : (
                    ''
                )}
            </div>
        </div>
    )
}

export default TypingGame
