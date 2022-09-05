import React from 'react'

function BoxColor({r, g, b}) {
// Create a BoxColor component that displays a rectangle with a background color based on props.
    return (
        <div style={{background: `rgb(${r}, ${g}, ${b})`}}>Wazzaaaa</div>
    )
}

export default BoxColor