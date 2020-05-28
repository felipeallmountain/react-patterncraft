import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types';

import {TweenMax} from 'gsap'

function Vehicle (props) {
  const vehicleRef = useRef()

  const {
    children, moveBehavior, coordinates
  } = props

  useEffect(() => {
    if(!!coordinates) {
      const {current} = vehicleRef
      TweenMax.killTweensOf(current)
      moveBehavior.move(current, coordinates)
    }
  }, [coordinates])

  return (
    <div ref={vehicleRef} style={{
      maxWidth: 100
    }}>
      {children}
    </div>
  )  
}

Vehicle.propTypes = {
  children: PropTypes.element.isRequired,
  moveBehavior: PropTypes.shape({
    move: PropTypes.func
  }).isRequired,
  coordinates: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number
  })
}

export default Vehicle