import { TweenMax, TimelineMax } from 'gsap'

const Walk = () => {
  const move = (element, tweenVars) => {
    TweenMax.to(element, 3, tweenVars)

    const tl = new TimelineMax()

    tl
      .to(element, 0.5, {rotation: -20})
      .to(element, 0.5, {rotation: 20})
      .to(element, 0.5, {rotation: -20})
      .to(element, 0.5, {rotation: 20})
      .to(element, 0.5, {rotation: -20})
      .to(element, 0.5, {rotation: 0})
  }

  return {
    move
  }
}

export default Walk
