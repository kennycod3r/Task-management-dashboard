import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const EventChart = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: "",
        data: [100,  200, 250, 300, 350, 400, 450, 500, 550, 600, 650],
        backgroundColor: '#8576FF', // Primary color for bars
        borderRadius: {
          topLeft: 1,
          topRight: 0,
          bottomLeft: 0,
          bottomRight: 0,
        },
        barThickness: 25.66, // Thickness of the bars
        borderSkipped: false, // Ensure no border is skipped for rounded corners
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // Remove grid lines for x-axis
        },
        barPercentage: 0.9,  // Adjust bar width within the available space
        categoryPercentage: 0.8, // Adjust space between bars, lowering this increases spacing
      },
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(200, 200, 200, 0.2)',
        },
      },
    },
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      },
    },
  };

  return (
    <div className="event-chart">
      
      <Bar data={data} options={options} />
    </div>
  );
};

export default EventChart;
