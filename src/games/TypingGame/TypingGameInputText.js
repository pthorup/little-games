import React from 'react'
import './TypingGameInputText.css'

const TypingGameInputText = (props) => {
    return (
        <div className="TypingGameInputText">
            <input
                className={`TypingGameInputText-inputText ${
                    props.isWrong ? 'textColor--green' : 'textColor--red'
                }`}
                onChange={props.onTextChange}
                value={props.value}
                disabled={props.onGameOver}
            />
        </div>
    )
}

export default TypingGameInputText
