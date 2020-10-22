import React, { useState } from 'react'

export function Accordion() {
    const [isToggled, setIsToggled] = useState(false)
    //1) first option const showMe = isToggled ? (<h3>Show Me</h3>) : null// this is working with the {showMe}

    return (
        <div>
            {/*1) {showMe} */}
            {/*2) second option */}
            {isToggled && <h3>Show Me</h3>}
            {/*3) third option
             {isToggled ?
                <h3>Show me!</h3>
                : null
            } */}
            <button
                onClick={() => setIsToggled(!isToggled)}
            >Toggle
            </button>
        </div>
    )
}
