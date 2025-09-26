"use client";
import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface RecoveryGraphProps {
  days: string[];
  recoveredPatients: number[];
}

const RecoveryGraph: React.FC<RecoveryGraphProps> = ({ days, recoveredPatients }) => {
  const data = {
    labels: days,
    datasets: [
      {
        label: "Recovered Patients",
        data: recoveredPatients,
        fill: true,
        backgroundColor: "rgba(56, 178, 172, 0.2)", // tealish
        borderColor: "rgba(14, 165, 233, 1)", // sky blue
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Patient Recovery Over Days",
        color: "#0ea5e9",
        font: {
          size: 20,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: { stepSize: 5 },
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default RecoveryGraph;
