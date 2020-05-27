import React from 'react'
import Vehicle from './Vehicle'
import './viking.scss';

const Viking = props => {
  const {moveBehavior, coordinates} = props
  return (    
    <Vehicle moveBehavior={moveBehavior} coordinates={coordinates}>
      <div className="viking">
        <p>¯\_(ツ)_/¯</p>
      </div>
    </Vehicle>
  )
}


export default Viking