'use client'

import Chart, { ChartItem } from "chart.js/auto";
import React, { useRef, useEffect } from "react";

export default function IndexPage() {
  const canvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const ctx = canvas.current ;

    let chartStatus = Chart.getChart("chart");
    if (chartStatus !== undefined) {
      chartStatus.destroy();
    }
    if(!ctx)
    {
        return;
    }
    new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: ["Save", "Wants","Invest"],
        datasets: [
          {
            label: "Finance Plan",
            
            data: [50, 30, 20],
            backgroundColor: [
              "rgba(255, 99, 132, 0.5)",
              "rgba(54, 162, 235, 0.5)",
              "rgba(255, 206, 86, 0.5)",
              
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              
            ],
            borderWidth: 0.5,
          }
        ]
      },
      options: {

        plugins: {
          legend: {
            position: "top"
          },
          title: {
            display: false,
            text: ""
          }
        }
      }
    });
  }, []);
    
    return (
        <div className='w-4/5 h-3/4 '>

            <canvas className="relative left-1/2 translate-x-[-50%]"  ref={canvas}></canvas>
            
        </div>
    )


}