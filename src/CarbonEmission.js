import React from 'react';
import { Pie, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import styles from './CarbonEmission.module.css';
ChartJS.register(ArcElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const CarbonEmission = () => {
 
  const pieData = {
    labels: ['Excavation', 'Transportation', 'Equipment Usage'],
    datasets: [
      {
        data: [30, 50, 100],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  const barData = {
    labels: ['Mine A', 'Mine B', 'Mine C'], // Replace with actual mine names
    datasets: [
      {
        label: 'Carbon Emissions (tons)',
        backgroundColor: 'rgba(75,192,192,0.6)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(75,192,192,0.8)',
        hoverBorderColor: 'rgba(75,192,192,1)',
        data: [650, 590, 800], // Replace with actual emission data
      },
    ],
  };

  const pieOptions = {
    plugins: {
      legend: {
        labels: {
          color: 'white', // Set the legend text color to white
        },
      },
    },
  };

  const barOptions = {
    plugins: {
      legend: {
        labels: {
          color: 'white', // Set the legend text color to white
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: 'white', // Set the x-axis labels color to white
        },
      },
      y: {
        ticks: {
          color: 'white', // Set the y-axis labels color to white
        },
      },
    },
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Carbon Emission Analysis</h2>
      <div className={styles.chartContainer}>
        <div className={styles.piechart}>
          <h3>Activity-wise Emission Distribution</h3>
          <Pie data={pieData} options={pieOptions} />
        </div>
        <div className={styles.bargraph}>
          <h3>Mine-wise Emission Comparison</h3>
          <Bar data={barData} options={barOptions} />
        </div>
      </div>
      <button className={styles.afforestation}>Neutralize</button>
    </div>
  );
};

export default CarbonEmission;
