import { TweenMax } from "gsap"

const FlyMode = (tank, label) => {
    const damage = 0
    const labelMode = 'Fly'
    const color = 'lightgreen'
    const radius = '25% 10%'
    label.innerHTML = ''

    const move = (coordinates) => {
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

    const attack = () => {
        label.innerHTML = `Cannot attack`
    }

    const toTankMode = (mode, setState) => {
        setState(mode(tank, label))
    }

    const toSiegeMode = () => {
        label.innerHTML = `Cannot switch to siege`
    }

    const toFlyMode = () => {
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