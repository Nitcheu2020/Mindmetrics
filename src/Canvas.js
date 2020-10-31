
import React, { useRef, useEffect } from 'react'
import Chart from 'chart.js';

const Canvas = props => {
  
  const canvasRef = useRef(null)
  
  const draw = (ctx, frameCount) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    ctx.fillStyle = '#000000'
    ctx.beginPath()
    ctx.arc(50, 100, 20*Math.sin(frameCount*0.05)**2, 0, 2*Math.PI)
    ctx.fill()
  }
  
  useEffect(() => {
    
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    let frameCount = 0
    let animationFrameId
    
    //Our draw came here
    const render = () => {
      frameCount++
      draw(context, frameCount)
      //animationFrameId = window.requestAnimationFrame(render)
      let data = [20000, 14000, 12000, 15000, 18000, 19000, 22000];
      let labels =  ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
      var myChart = new Chart(context, {
          type: 'line',
          data: {
              labels: labels,
              datasets: [{
                  label: 'Ranking',
                  data: data,
              }]
          },
      });
      }

    render()
    
  }, [])
  return (<canvas ref={canvasRef} {...props}/>);
}

export default Canvas