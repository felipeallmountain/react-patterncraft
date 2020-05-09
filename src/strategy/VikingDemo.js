import React, { useEffect, useRef, useState } from 'react'
import Viking from './vehicle/Viking'
import Fly from './vehicle/moves/Fly'
import Walk from './vehicle/moves/Walk'
import Swim from './vehicle/moves/Swim'
import Teleport from './vehicle/moves/Teleport'
import './viking-demo.scss';

const VikingDemo = () => {
  const moveBehavior = useRef(Fly())
  const canvasRef = useRef()

  const [coordinates, setCoordinates] = useState()

  const keyHandler = evt => {
    const {keyCode} = evt
    switch (keyCode) {
      case 49:
        moveBehavior.current = Fly()
        break
      case 50:
        moveBehavior.current = Walk()
        break
      case 51:
        moveBehavior.current = Swim()
        break
      case 52:
        moveBehavior.current = Teleport()
        break
      default:
        console.log('press keys from 1 to 4 to change vehicle behavior')
    }
  }

  const mouseHandler = evt => {
      const { pageX, pageY } = evt
      setCoordinates({
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
    <div className="viking-demo" ref={canvasRef}>
      <Viking
        moveBehavior={moveBehavior.current}
        coordinates={coordinates}
      />
    </div>
  )
}

export default VikingDemo