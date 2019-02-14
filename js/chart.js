var ctx = document.getElementById('skillchart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'horizontalBar',

    // The data for our dataset
    data: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
            {
                backgroundColor: '#C49B66',
                data: [15, 25, 35, 45, 55, 65, 75],
                datalabels: {
                    align: 'top',
					anchor: 'end'
                }
                
            },
        ]
        
        
    },

    // Configuration options go here
    options:  {
        scales: {
            xAxes: [{
                display: false,
                gridLines: {
                    display: false
                }
            }],
            yAxes: [{
                display: true,
                gridLines: {
                    display: false
                },
                barThickness: 4,
                borderSkipped:'right',
                ticks: {
                    fontFamily: "'Tahoma', sans-serif",
                    fontSize: 12
                }
            }]
        },
        tooltips: {
            enabled: false
        },
        legend: {
            display: false
        }
        
    }
});