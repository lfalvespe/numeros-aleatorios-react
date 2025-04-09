import React from 'react'

const Display = ({ numbers, error, message }) => {
    return (
        <div className="display">
            <h2>Resultado:</h2>

            {
                error
                    ? <p className='message blink'>{message}</p>
                    : <span id="result">
                        {numbers.length != 0 && '[ '}
                        {numbers.map((n, i) => (
                            <span
                                key={i}>
                                {i < numbers.length - 1
                                    ? n + ', '
                                    : n
                                }
                            </span>
                        ))
                        }
                        {numbers.length != 0 && ' ]'}
                    </span>
            }
            <span></span>


        </div>
    )
}

export default Display