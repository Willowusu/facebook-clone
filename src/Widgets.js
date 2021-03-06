import React from 'react'
import "./Widgets.css"

function Widgets() {
    return (
        <div className="widgets">
            <iframe src="https://archive.org/details/Comedy_Films"
                        width='340' height='100%' style={{border: 'none', overflow:'hidden'}}
                        scrolling='yes'
                        frameBorder='0'
                        allowTransparency='true'
                        allow='encrypted-media'
                    ></iframe>
        </div>
    )
}

export default Widgets
