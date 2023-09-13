import React from  "react"

function Header({mode, onDarkModeClick}){

    return (
        <header>
        <h2>Shopster</h2>
        <button onClick={onDarkModeClick}>
          {mode ? "Dark" : "Light"} Mode
        </button>
      </header>
    )
}

export default Header;