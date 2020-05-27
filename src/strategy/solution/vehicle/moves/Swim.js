import {TweenMax, TimelineMax} from 'gsap'

const Swim = () => {
  const move = (element, tweenVars) => {
    TweenMax.to(element, 4, tweenVars)

    const tl = new TimelineMax()
    tl
      .to(element, 0.5, {
        scale: 1.8
      })
      .to(element, 0.5, {
        scale: 0.5
      })
      .to(element, 0.5, {
        scale: 1.5
      })
      .to(element, 0.5, {
        scale: 0.3
      })
      .to(element, 0.5, {
        scale: 1.3
      })
      .to(element, 0.5, {
        scale: 0.2
      })
      .to(element, 0.5, {
        scale: 2
      })
      .to(element, 0.5, {
        scale: 1
      })    
  }

  return {
    move
  }
}

export default Swim