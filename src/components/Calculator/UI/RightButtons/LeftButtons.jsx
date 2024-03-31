import React from 'react'

function LeftButtons() {
  return (
    <div className='leftcontrol'>
      <div className='Basicsoperations'>
        <button>×</button>
        <button>+</button>
        <button>÷</button>
        <button>−</button>
      </div>
      <div className='specialsbuttons'>
        <button className='clear circle'>CLEAR</button>
        <button className='equalbutton'>=</button>
        <button className='delete circle'>DELETE</button>
      </div>
    </div>
  )
}

export default LeftButtons