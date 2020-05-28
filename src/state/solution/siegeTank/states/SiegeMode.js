import { TweenMax } from "gsap"

function SiegeMode (tank, label) {
    const damage = 20
    const labelMode = 'Siege'
    const color = 'lightsalmon'
    const radius = '10% 30% 50% 70%'
    label.innerHTML = ''

    function move () {
        label.innerHTML = `Cannot move`
    }

    function attack () {
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

    function toTankMode (Mode, setState) {
        setState(new Mode(tank, label))
    }

    function toSiegeMode () {
        label.innerHTML = `Already in siege`
    }

    function toFlyMode () {
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