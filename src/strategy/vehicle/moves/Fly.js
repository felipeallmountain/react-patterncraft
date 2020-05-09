import {TweenMax} from 'gsap'

const Fly = () => {
  const move = (element, tweenVars) => {
    TweenMax.to(element, 1, tweenVars)
  }

  return {
    move
  }
}

export default Fly