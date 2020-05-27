import React, { useRef, useEffect } from 'react'
import SiegeTank from './siegeTank/SiegeTank'

const SiegeTankDemo = () => {
    const siegeTankRef = useRef()
    const canvasRef = useRef()

    const keyHandler = evt => {
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
            case 51: // 3
                siegeTankRef.current.toFlyMode()
                break
            default:
                console.log('press keys from 1 to 3 or spacebar to change vehicle behavior')
        }
      }

      const mouseHandler = evt => {
        const { pageX, pageY } = evt
        siegeTankRef.current.move({x: pageX, y: pageY})
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
        <div className="siege-tank-demo pattern-container" ref={canvasRef}>
            <div className="message">
                <h2>Keys:</h2>
                <p>Space bar. Attack</p>
                <ol>
                    <li>Tank</li>
                    <li>Siege</li>
                    <li>Fly</li>
                </ol>                
            </div>
            <SiegeTank ref={siegeTankRef}/>
        </div>
    )
}

export default SiegeTankDemo