import React, { useRef, useEffect } from 'react'
import SiegeTank from './siegeTank/SiegeTank'


function SiegeTankDemo () {
    const canvasRef = useRef()
    const siegeTankRef = useRef()

    function keyHandler (evt) {
        const {keyCode} = evt
        switch (keyCode) {
            case 32: // space bar
                siegeTankRef.current.attack()
                break        
            case 49: // 1
                siegeTankRef.current.toTankMode()
                break
            case 50: // 2
                siegeTankRef.current.toSiegeMode()
                break
            default:
                console.log('press keys from 1 to 3 or spacebar to change vehicle behavior')
        }
    }

    function mouseHandler (evt) {
        const { pageX, pageY } = evt
        siegeTankRef.current.move({
            x: pageX, y: pageY
        })
    }

    useEffect(() => {
        const canvas = canvasRef.current

        window.addEventListener('keydown', keyHandler)
        canvas.addEventListener('mousedown', mouseHandler)
        
        return () => {
            window.removeEventListener('keydown', keyHandler)
            canvas.removeEventListener('mousedown', mouseHandler)
        }
    }, [])

    return (
        <div
            ref={canvasRef} 
            className='siege-tank-demo pattern-container'>
            <div className="message">
                <h1>Siege tank demo</h1>
                <h2>Keys:</h2>
                <p>Space bar. Attack</p>
                <ol>
                    <li>Tank</li>
                    <li>Siege</li>
                </ol>     
            </div>

            <SiegeTank ref={siegeTankRef}/>
        </div>
    )
}

export default SiegeTankDemo
