window.onload = function(){
    const chart = new CanvasJS.Chart("chartContainer",{
        
        theme: "light2",
        exportEnabled: true,
        animationEnabled: true,
        title:{
            text: "Number of Employees Working in an XYZ Company"
        },

        data: [
            {
                type: "pie",
                startAngle: 25,
                toolTipContent: "<b>{label}</b>: {y}%",
                showInLegend: "true",
                legendText: "{label}",
                indexLabelFontSize: 16,
                indexLabel: "{label} - {y}%",

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
}