import React from 'react'
import { ReactComponent as Logo } from "../imgs/logo.svg";
import './spinner.styles.scss'

function Spinner() {
    return (
        <div className="loading">
            <Logo />
        </div>
    )
}

export default Spinner
