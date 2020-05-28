import { TweenMax } from "gsap"

function FlyMode (tank, label) {
    const damage = 0
    const labelMode = 'Fly'
    const color = 'lightgreen'
    const radius = '25% 10%'
    label.innerHTML = ''

    function move (coordinates) {
        const {x, y} = coordinates
        TweenMax.to(tank, 0.25, {
            x,
            y,
            rotation: 360,
            onComplete: () => {
                TweenMax.set(tank, {rotation: 0})
            }
        })
    }

    function attack () {
        label.innerHTML = `Cannot attack`
    }

    function toTankMode (Mode, setState) {
        setState(new Mode(tank, label))
    }

    function toSiegeMode () {
        label.innerHTML = `Cannot switch to siege`
    }

    function toFlyMode () {
        label.innerHTML = `Already fly`
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

export default FlyMode