import React, { useEffect, useRef, useState } from 'react'
import Viking from './vehicle/Viking'
import Fly from './vehicle/moves/Fly'
import Walk from './vehicle/moves/Walk'
import Swim from './vehicle/moves/Swim'
import Teleport from './vehicle/moves/Teleport'
import './viking-demo.scss';

function VikingDemo () {
  const moveBehavior = useRef(new Fly())
  const canvasRef = useRef()

  const [coordinates, setCoordinates] = useState({})
  const [behavior, setBehavior] = useState('Fly')

  function keyHandler (evt) {
    const {keyCode} = evt
    switch (keyCode) {
      case 49:
        moveBehavior.current = new Fly()
        setBehavior('Fly')
        break
      case 50:
        moveBehavior.current = new Walk()
        setBehavior('Walk')
        break
      case 51:
        moveBehavior.current = new Swim()
        setBehavior('Swim')
        break
      case 52:
        moveBehavior.current = new Teleport()
        setBehavior('Teleport')
        break
      default:
        console.log('press keys from 1 to 4 to change vehicle behavior')
    }
  }

  function mouseHandler (evt) {
      const { pageX, pageY } = evt
      setCoordinates({
        x: pageX, y: pageY
      })
    }

  useEffect(() => {
    const canvas = canvasRef.current
    
    window.addEventListener('keydown', keyHandler)
    canvas.addEventListener('mousedown', mouseHandler)

    setCoordinates({
      x: 300, y: 300
    })
    
    return () => {
      window.removeEventListener('keydown', keyHandler)
      canvas.removeEventListener('mousedown', mouseHandler)
    }
  }, [])

  return (
    <div className="viking-demo pattern-container" ref={canvasRef}>
      <div className="message">
        <h1>Behavior: {behavior}</h1>
        <h1>coordinates: x: {coordinates.x || 0} y: {coordinates.y || 0}</h1>
        <h2>Keys:</h2>
        <ol>
          <li>Fly</li>
          <li>Walk</li>
          <li>Swim</li>
          <li>Teleport</li>
        </ol>
      </div>
      <Viking
        moveBehavior={moveBehavior.current}
        coordinates={coordinates}
      />
    </div>
  )
}

export default VikingDemo