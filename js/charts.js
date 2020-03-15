let ctx = document.getElementById('myChart').getContext('2d');
let chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            datasets: [{
                label: 'Number Of Pushups',
                data: [20, 30, 25, 36, 45, 40, 50],
                backgroundColor: [
                    'rgb(99, 89, 230)',
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 206, 86)',
                    'rgb(75, 192, 192)',
                    'rgb(153, 102, 255)',
                    'rgb(255, 159, 64)'
                ],
                borderColor: [
                    'rgb(255,255,255)',
                    'rgb(255,255,255)',
                    'rgb(255,255,255)',
                    'rgb(255,255,255)',
                    'rgb(255,255,255)',
                    'rgb(255,255,255)',
                    'rgb(255,255,255)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
            aspectRatio: 1.5
        }
});

function changeChart(type) {
    document.querySelector('.canvas').innerHTML = '<canvas id="myChart"></canvas>';
    ctx = document.getElementById('myChart').getContext('2d');
    chart = new Chart(ctx, {
        type,
        data: {
            labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            datasets: [{
                label: 'Number Of Pushups',
                data: [20, 30, 25, 36, 45, 40, 50],
                backgroundColor: [
                    'rgb(99, 89, 230)',
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 206, 86)',
                    'rgb(75, 192, 192)',
                    'rgb(153, 102, 255)',
                    'rgb(255, 159, 64)'
                ],
                borderColor: [
                    'rgb(255,255,255)',
                    'rgb(255,255,255)',
                    'rgb(255,255,255)',
                    'rgb(255,255,255)',
                    'rgb(255,255,255)',
                    'rgb(255,255,255)',
                    'rgb(255,255,255)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                xAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }],
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
            aspectRatio: 1.5
        }
    });
}

function changeChartLine() {
    document.querySelector('.canvas').innerHTML = '<canvas id="myChart"></canvas>';
    ctx = document.getElementById('myChart').getContext('2d');
    chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            datasets: [{ 
                data: [20, 30, 25, 36, 45, 40, 50],
                label: "Number Of Pushups",
                borderColor: "#6359E6",
                fill: false
            }]
        },
        options: {
            aspectRatio: 1.5
        }
        });
}

function changeChartRadar() {
    document.querySelector('.canvas').innerHTML = '<canvas id="myChart"></canvas>';
    ctx = document.getElementById('myChart').getContext('2d');
    chart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        datasets: [
            {
            fill: true,        
            label: "Number Of Pushups",
            backgroundColor: "#6359E6",
            borderColor: "#6359E6",
            pointBorderColor: "#fff",
            pointBackgroundColor: "#6359E6",
            data: [20, 30, 25, 36, 45, 40, 50]
            }
        ]
        },
        options: {
            aspectRatio: 1.5
        }
    });
}

document.querySelectorAll('.type').forEach(li => {
    li.addEventListener('click', (e) => {
        document.querySelector('li.type.active').classList.remove('active');
        li.classList.add('active');
        if(li.textContent === 'Line Chart') {
            changeChartLine()
        } else if(li.textContent === 'Radar Chart') {
            changeChartRadar()
        } else if(li.textContent === 'Horizantal Bar Chart') {
            changeChart('horizontalBar');
        } else if(li.textContent === 'Bar Chart') {
            changeChart('bar');
        }
    })
})