import React, { useRef, useEffect } from 'react'
import gsap from 'gsap';
import { SVG } from './style';

const Circle = () => {
  const refLine1 = useRef<SVGPathElement>(null);
  const refSVG = useRef<SVGSVGElement>(null);

  useEffect(() => {
    gsap.timeline().fromTo(
      refLine1.current,
      {
        drawSVG: false,
      },
      {
        drawSVG: true,
        ease: `linear`,
        duration: 1.5,
      },
    )

  }, [])

  return (
    <SVG ref={refSVG} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="224.766" height="73.594" viewBox="0 0 224.766 73.594">
      <g id="encercle">
        <path ref={refLine1} id="Tracé_2" stroke="#00f9df" strokeWidth="1px" data-name="Tracé 2" d="M195.568,62.252c5.807-1.681,13.3-4.156,19.734-8.394a22.7,22.7,0,0,0,7.656-7.807c3.339-6,2.01-11.913-3.65-16.236a39.913,39.913,0,0,0-9.59-5.478c-7.326-2.848-14.155-5.152-20.875-7.043A160.17,160.17,0,0,0,143.9,10.8l-.135,0c-.223,0-.451-.007-.683-.014a4.71,4.71,0,0,0-1.6.1,2.632,2.632,0,0,0-1.256,1.177,2.722,2.722,0,0,0,1.036.785,7.528,7.528,0,0,0,2.16.253c.261.009.519.016.774.029a198.79,198.79,0,0,1,28.73,3.134,182.226,182.226,0,0,1,33.11,9.431,52.97,52.97,0,0,1,10.391,5.482c5.592,3.893,6.713,9.372,3,14.656a21.96,21.96,0,0,1-5.849,5.68,62.356,62.356,0,0,1-10.121,5.2c-8.221,3.4-17.057,5.364-24.615,6.836-23.021,4.479-48.951,6.931-79.267,7.495H98.467c-22.313,0-38.524-1.123-54.205-3.755C36.745,66.022,27,64.013,18.32,59.645A52,52,0,0,1,8.3,53.22C2.3,48.207,1.5,42.042,6.029,35.857a33.232,33.232,0,0,1,4.994-5.308A69.63,69.63,0,0,1,27.849,20.075,161.683,161.683,0,0,1,65.52,8.175a303.241,303.241,0,0,1,74.142-5.133,349.829,349.829,0,0,1,41.882,4.351c10.976,1.888,23.4,4.024,34.754,8.235a3.141,3.141,0,0,0,1.892.23.661.661,0,0,0,.411-.383c.245-.553.351-1.143-1.238-1.748h0l-1.1-.42c-1.762-.676-3.581-1.374-5.4-1.936-15.37-4.746-32.521-7.861-53.971-9.8C145.41.527,134.181,0,123.516,0,112.98,0,102.934.486,92.805,1.486,74.131,3.331,58.215,6.4,44.15,10.874,30.2,15.313,19.768,20.309,11.332,26.6c-4.2,3.128-7.025,6.03-8.9,9.132C-1.335,41.962-.724,47.912,4.251,53.413c2.786,3.083,6.594,5.735,11.981,8.342a92.029,92.029,0,0,0,22.9,7.269c17.675,3.416,37.323,4.853,61.873,4.525a510.228,510.228,0,0,0,52-3.343c17.431-2.024,30.557-4.477,42.561-7.954" transform="translate(0 0)" fill="transparent" />
      </g>
    </SVG>
  )
}

export default Circle