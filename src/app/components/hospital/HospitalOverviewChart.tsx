import React from "react";
import { ChartData } from "../../types";

interface HospitalOverviewChartProps {
  chart: ChartData;
}

const HospitalOverviewChart: React.FC<HospitalOverviewChartProps> = ({ chart }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 h-64 flex items-center justify-center">
      <p className="text-gray-400">[Chart Placeholder: {chart.title}]</p>
    </div>
  );
};

export default HospitalOverviewChart;
