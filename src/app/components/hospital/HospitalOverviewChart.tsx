import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface HospitalOverviewChartProps {
  chart: { title: string };
}

const HospitalOverviewChart: React.FC<HospitalOverviewChartProps> = ({ chart }) => {
  const data = [
    { month: "Jan", patients: 40, appointments: 24, surgeries: 10 },
    { month: "Feb", patients: 30, appointments: 13, surgeries: 7 },
    { month: "Mar", patients: 20, appointments: 98, surgeries: 14 },
    { month: "Apr", patients: 27, appointments: 39, surgeries: 20 },
    { month: "May", patients: 18, appointments: 48, surgeries: 15 },
    { month: "Jun", patients: 23, appointments: 38, surgeries: 22 },
    { month: "Jul", patients: 34, appointments: 43, surgeries: 25 },
    { month: "Aug", patients: 44, appointments: 59, surgeries: 30 },
  ];

  return (
    <div className="bg-white shadow-md rounded-xl p-4 h-80">
      <h3 className="text-gray-800 font-semibold mb-4">{chart.title}</h3>
      <ResponsiveContainer width="100%" height="85%">
        <AreaChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="patientsColor" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="appointmentsColor" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#10b981" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="surgeriesColor" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#f59e0b" stopOpacity={0} />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend verticalAlign="top" height={36} />

          <Area
            type="monotone"
            dataKey="patients"
            stroke="#3b82f6"
            fillOpacity={1}
            fill="url(#patientsColor)"
            name="Patients"
          />
          <Area
            type="monotone"
            dataKey="appointments"
            stroke="#10b981"
            fillOpacity={1}
            fill="url(#appointmentsColor)"
            name="Appointments"
          />
          <Area
            type="monotone"
            dataKey="surgeries"
            stroke="#f59e0b"
            fillOpacity={1}
            fill="url(#surgeriesColor)"
            name="Surgeries"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default HospitalOverviewChart;
