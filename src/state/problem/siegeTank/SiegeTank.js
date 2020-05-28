import React, { useRef, useState, forwardRef, useImperativeHandle, useEffect } from 'react'
import { TweenMax } from 'gsap'

import './siege-tank.scss'

const tankMode = {
    label: 'Tank',
    color: 'lightsteelblue',
    radius: '20%',
    damage: 10,
    canMove: true
}

const siegeMode = {
    label: 'Siege',
    color: 'lightsalmon',
    radius: '10% 30% 50% 70%',
    damage: 20,
    canMove: false
}

const SiegeTank = forwardRef((props, ref) => {
    const tankRef = useRef()
    const messageRef = useRef()

    const [vehicleState, setVehicleState] = useState(tankMode)

    function setMessage (msg) {
        messageRef.current.innerHTML = msg
    }
    
    useEffect(() => {
        TweenMax.to(tankRef.current, 2, {
            borderRadius: vehicleState.radius
        })
    }, [vehicleState])

    useImperativeHandle(ref, () => ({
        attack() {
            setMessage(`Attacking for ${vehicleState.damage}`)
        },
        move(coordinates) {
            if (vehicleState.canMove) {
                const {x, y} = coordinates
                TweenMax.to(tankRef.current, 3, {x, y})
            } else {
                setMessage(`Cannot Move!!!`)
            } 
        },
        toTankMode() {
            setVehicleState(tankMode)
        },
        toSiegeMode() {
            setVehicleState(siegeMode)
        }
    }))

    return (
        <div
            ref={tankRef}
            className="siege-tank"                
            style={{
                backgroundColor: vehicleState.color,
                width: 100,
                height: 100,
                position: 'absolute'
            }}
        >
            <p className="siege-tank__label">
                {vehicleState.label}
            </p>
            <p 
                ref={messageRef}
                className="siege-tank__message"
            />
        </div>
    )
})

export default SiegeTank