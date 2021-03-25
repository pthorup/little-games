import React from 'react'
import './Settings.css'

const Settings = (props) => {
    return (
        <div className="Settings">
            <input
                name="isAllCaps"
                type="checkbox"
                checked={props.isAllCaps}
                onChange={props.onCapsChange}
            />{' '}
            All Caps
        </div>
    )
}

export default Settings
