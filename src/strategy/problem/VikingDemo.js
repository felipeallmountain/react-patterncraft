import React, { useState, useRef, useEffect } from 'react'
import { TweenMax, TimelineMax } from 'gsap'

import './viking-demo.scss'

const VikingDemo = () => {
    const [isFlying, setIsFlying] = useState(false)

    const canvasRef = useRef()
    const vikingRef = useRef()

    const keyHandler = evt => {
        const {keyCode} = evt

        switch(keyCode) {
            case 49: // 1
                setIsFlying(true)
                break
            case 50: // 2
                setIsFlying(false)
        }
    }

    const mouseHandler = evt => {
        const { pageX, pageY } = evt
        const { current } = vikingRef
        TweenMax.killTweensOf(current)          

        if (isFlying) {
            TweenMax.to(current, 1, {
                x: pageX, y: pageY
            })
        } else {
            TweenMax.to(current, 3, {
                x: pageX, y: pageY
            })
            const tl = new TimelineMax()

            tl
            .to(current, 0.5, {rotation: -20})
            .to(current, 0.5, {rotation: 20})
            .to(current, 0.5, {rotation: -20})
            .to(current, 0.5, {rotation: 20})
            .to(current, 0.5, {rotation: -20})
            .to(current, 0.5, {rotation: 0})

        }
    }

    useEffect(() => {
        const canvas = canvasRef.current
    
        window.addEventListener('keydown', keyHandler)
        canvas.addEventListener('mousedown', mouseHandler)
        
        return () => {
            window.removeEventListener('keydown', keyHandler)
            canvas.removeEventListener('mousedown', mouseHandler)
        }
    })

    return (
        <div 
            ref={canvasRef}
            className="viking-demo pattern-container">
            <div className="message">
                <h1>Viking demo</h1>
                <h1>Behavior: {isFlying ? 'Flying' : 'walking'}</h1>
                <h2>Keys:</h2>
                <ol>
                <li>Fly</li>
                <li>Walk</li>
                <li>Swim</li>
                <li>Teleport</li>
                </ol>
            </div>
            <div
                ref={vikingRef}
                className="viking-vehicle">
                    <div className="viking">
                        <p>¯\_(ツ)_/¯</p>
                    </div>                
            </div>
        </div>
    )
}

export default VikingDemo