export const lineChartData = {
    labels: [
      'January', 'February', 'March', 'April', 'May',
      'June', 'July', 'August', 'September', 'October',
      'November', 'December'
    ],
    datasets: [
      {
        label: 'Motorcycles Sold',
        data: [15, 20, 25, 18, 22, 30, 28, 24, 26, 29, 31, 35],
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        tension: 0.1
      }
    ]
  };

  

export const barChartData = {
    labels: ['New', 'Used', 'Refurbished'],
    datasets: [
      {
        label: 'Number of Motorcycles',
        data: [50, 120, 30],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)'
        ],
        borderWidth: 1
      }
    ]
  };
  