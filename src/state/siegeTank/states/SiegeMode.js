import { TweenMax } from "gsap"

const SiegeMode = (tank, label) => {
    const damage = 20
    const labelMode = 'Siege'
    const color = '#F00'
    const radius = '10% 30% 50% 70%'
    label.innerHTML = ''

    const move = () => {
        label.innerHTML = `Cannot move`
    }

    const attack = () => {
        label.innerHTML = `Attacking for ${damage}`
        TweenMax.fromTo(label, .5,
            {
                scale: 1
            },
            {
                scale: 2,
                yoyo: true,
                repeat: 1
            }
        )
    }

    const toTankMode = (mode, setState) => {
        setState(mode(tank, label))
    }

    const toSiegeMode = () => {
        label.innerHTML = `Already in siege`
    }

    const toFlyMode = () => {
        label.innerHTML = `Cannot switch to fly`
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

export default SiegeMode