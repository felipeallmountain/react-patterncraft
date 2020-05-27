import { TweenMax } from "gsap"

function TankMode (tank, label) {
    const damage = 10
    const labelMode = 'Tank'
    const color = '#00F'
    const radius = '20%'
    label.innerHTML = ''

    function move (coordinates) {
        const {x, y} = coordinates
        TweenMax.to(tank, 1, {x, y})
    }

    function attack () {
        const attackObj = {
            value: 0
        }
        TweenMax.to(attackObj, 1, {
            value: damage,
            onUpdate: () => {
                label.innerHTML = `Attacking for ${Math.round(attackObj.value)}`
            }
        })
    }

    function toTankMode (mode, setState) {
        label.innerHTML = `Already in tank`
    }

    function toSiegeMode (mode, setState) {
        setState(mode(tank, label))
    }

    function toFlyMode (mode, setState) {
        setState(mode(tank, label))
    }

    return {
        damage,
        labelMode,
        color,
        radius,
        move,
        attack,
        toTankMode,
        toSiegeMode,
        toFlyMode
    }    
}

export default TankMode