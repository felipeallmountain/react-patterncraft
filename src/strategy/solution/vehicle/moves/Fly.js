import {TweenMax} from 'gsap'

function Fly () {
  function move (element, tweenVars) {
    TweenMax.to(element, 1, tweenVars)
  }

  return {
    move
  }
}

export default Fly