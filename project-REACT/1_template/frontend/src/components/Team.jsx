import React, { useEffect } from 'react';
import "./Team.css";
import * as CanvasJS from "@canvasjs/charts";

const Team = () => {

    useEffect(() => {
        const chart = new CanvasJS.Chart("chartContainer",{
        
            theme: "light2",
            exportEnabled: true,
            animationEnabled: true,
            title:{
                text: "Number of Employees at Aman Tech Solutions."
            },
    
            data: [
                {
                    type: "pie",
                    startAngle: 25,
                    toolTipContent: "<b>{label}</b>: {y} (employees)",
                    showInLegend: "true",
                    legendText: "{label}",
                    indexLabelFontSize: 16,
                    indexLabel: "{label} - {y}",
    
                    dataPoints: [
                        { y: 5, label: "Management" },
                        { y: 7, label: "Accounting" },
                        { y: 9, label: "UI/UX" },
                        { y: 11, label: "Graphic Designer" },
                        { y: 15, label: "Full-Stack Developer" },
                        { y: 5, label: "Marketing " },
                    ]
    
                }
            ]
    
        });
        chart.render();
    }, []);

  return (
    <>
        <section id="team" className='team-section my-5'>
            <div className='container team-container'>
                <div className='row team-row'>
                    <div className='col-md-12 team-col'>
{/* -----team chart start here----- */}
                        <div id="chartContainer" className="chartContainer mt-5"></div>
{/* -----team chart end here----- */}
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Team