import React from 'react'
import './Settings.css'

const Settings = (props) => {
    return (
        <div className="Settings">
            <input
                name="isUppercase"
                type="checkbox"
                checked={props.isUppercase}
                onChange={props.onCapsChange}
            />
            Upper case
        </div>
    )
}

export default Settings
