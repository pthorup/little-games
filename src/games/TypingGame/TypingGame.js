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
    const [isUppercase, setIsUppercase] = useState(false)
    const [isGameOver, setIsGameOver] = useState(false)
    const [userInputText, setUserInputText] = useState('')
    const [isInputTextCorrect, setIsInputTextCorrect] = useState()
    const award = useRef('🏆')

    const handleUppercaseChange = () => {
        setIsUppercase(!isUppercase)
        setUserInputText('')
    }

    const handleTextChange = (e) => {
        const userInputValue = e.target.value
        let trackIfCorrect = true

        for (let i = 0; i < userInputValue.length; i++) {
            if (isUppercase) {
                if (userInputValue[i] !== gameTitle[i].toUpperCase()) {
                    trackIfCorrect = false
                }
            } else {
                if (userInputValue[i] !== gameTitle[i]) {
                    trackIfCorrect = false
                }
            }
        }

        if (trackIfCorrect) {
            setIsInputTextCorrect(true)
            if (userInputValue === gameTitle) {
                setIsGameOver(true)
            } else if (
                isUppercase &&
                userInputValue === gameTitle.toUpperCase()
            ) {
                setIsGameOver(true)
            }
        } else {
            setIsInputTextCorrect(false)
            setIsGameOver(false)
        }
        setUserInputText(userInputValue)
    }

    const handleGameResetClick = () => {
        setUserInputText('')
        setIsGameOver(false)
        setGameTitle('')
    }

    useEffect(() => {
        // Get a random image with respective text from JSON file
        const randomNum = Math.floor(
            Math.random() * Math.floor(GameData.length),
        )
        const { image, description } = GameData[randomNum]
        setGameImage(image)
        setGameTitle(description)
    }, [gameTitle])

    return (
        <div className="TypingGame">
            <h1 className="TypingGame-title">
                Little Typing <br />
                Game
            </h1>
            <div className="TypingGame-settingContainer">
                <Settings
                    isUppercase={isUppercase}
                    onCapsChange={handleUppercaseChange}
                />
            </div>

            <div className="TypingGame-instructionContainer">
                {isUppercase ? (
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
