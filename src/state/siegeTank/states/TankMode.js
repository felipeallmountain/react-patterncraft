import { TweenMax } from "gsap"

const TankMode = (tank, label) => {
    const damage = 10
    const labelMode = 'Tank'
    const color = 'lightsteelblue'
    const radius = '20%'
    label.innerHTML = ''

    const move = (coordinates) => {
        const {x, y} = coordinates
        TweenMax.to(tank, 1, {x, y})
    }

    const attack = () => {
        const attackObj = {
            value: 0
        }
        TweenMax.to(attackObj, 3, {
            value: damage,
            onUpdate: () => {
                label.innerHTML = `Attacking for ${Math.round(attackObj.value)}`
            }
        })
    }

    const toTankMode = (mode, setState) => {
        label.innerHTML = `Already in tank`
    }

    function toSiegeMode (mode, setState) {
        setState(mode(tank, label))
    }

    const toFlyMode = (mode, setState) => {
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