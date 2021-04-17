import React from 'react'
import './TypingGameInputText.css'

const TypingGameInputText = (props) => {
    return (
        <div className="TypingGameInputText">
            <input
                className={`TypingGameInputText-inputText ${
                    props.isWrong ? 'textColor--purple' : 'textColor--red'
                }`}
                onChange={props.onTextChange}
                value={props.value}
                size="35"
                disabled={props.onGameOver}
                placeholder="Type the letters that are in the title"
            />
        </div>
    )
}

export default TypingGameInputText
