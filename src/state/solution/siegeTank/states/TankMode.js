import { TweenMax } from "gsap"

function TankMode (tank, label) {
    const damage = 10
    const labelMode = 'Tank'
    const color = 'lightsteelblue'
    const radius = '20%'
    label.innerHTML = ''

    function move (coordinates) {
        const {x, y} = coordinates
        TweenMax.to(tank, 3, {x, y})
    }

    function attack () {
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

    function toTankMode (Mode, setState) {
        label.innerHTML = `Already in tank`
    }

    function toSiegeMode (Mode, setState) {
        setState(new Mode(tank, label))
    }

    function toFlyMode (Mode, setState) {
        setState(new Mode(tank, label))
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