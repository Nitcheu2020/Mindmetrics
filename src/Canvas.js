
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
     
      var myChart = new Chart(context, {
          type: 'line',
          data: {
              labels: props.labels,
              datasets: [{
                  label: 'Ranking',
                  data: props.data,
              }]
          },
          options: {
            scales: {
                xAxes: [{
                    ticks: {
                        // Include a dollar sign in the ticks
                        callback: function(value, index, values) {
                           // return '$' + value;
                           return value;
                        },
                        beginAtZero:true,
                        fontColor: 'red',
                        fontStyle: "bold",
                    }
                }],
                yAxes: [{
                  ticks: {
                      // Include a dollar sign in the ticks
                      callback: function(value, index, values) {
                         // return '$' + value;
                         return value;
                      },
                      beginAtZero:true,
                      fontColor: 'blue',
                      fontStyle: "bold",
                  }
              }]
            },
        }
      });
      }

    render()
    
  }, [])
  return (<canvas ref={canvasRef} {...props}/>);
}

export default Canvas