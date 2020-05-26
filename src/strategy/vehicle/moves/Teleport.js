import { TimelineMax } from 'gsap'

const Teleport = () => {
  const move = (element, tweenVars) => {
    const tl = new TimelineMax()
    tl
      .to(element, 0.5, {autoAlpha: 0})
      .set(element, tweenVars)
      .to(element, 0.5, {autoAlpha: 1})

  }

  return {
    move
  }
}

export default Teleport