import React, { useState, useEffect, useRef, useImperativeHandle, forwardRef } from 'react'
import PropTypes from 'prop-types';
import { TweenMax } from 'gsap';
import TankMode from './states/TankMode';
import SiegeMode from './states/SiegeMode';
import FlyMode from './states/FlyMode';

import './siege-tank.scss';

const SiegeTank = forwardRef((props, ref) => {
    const tankRef = useRef()
    const messageRef = useRef()

    const [vehicleState, setVehicleState] = useState({
        color: 'white',
        labelMode: ''
    })

    useEffect(() => {
        setVehicleState(new TankMode(tankRef.current, messageRef.current))
    }, [])

    useEffect(() => {
        TweenMax.to(tankRef.current, 2, {
            borderRadius: vehicleState.radius
        })

    }, [vehicleState])

    useImperativeHandle(ref, () => ({
        attack() {
            vehicleState.attack()
        },
        toTankMode() {
            vehicleState.toTankMode(TankMode, setVehicleState)
        },
        toSiegeMode() {
            vehicleState.toSiegeMode(SiegeMode, setVehicleState)
        },
        toFlyMode() {
            vehicleState.toFlyMode(FlyMode, setVehicleState)
        },
        move(coordinates) {
            TweenMax.killTweensOf(tankRef.current)
            vehicleState.move(coordinates)
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
                {vehicleState.labelMode}
            </p>
            <p 
                ref={messageRef}
                className="siege-tank__message"
            />
        </div>
    )
})

SiegeTank.propTypes = {
    mode: PropTypes.oneOf(['tank', 'siege', 'fly']),
    coordinates: PropTypes.shape({
        x: PropTypes.number,
        y: PropTypes.number
      })
}

SiegeTank.defaultProps = {
    mode: 'tank',
}

export default SiegeTank