import type { ReactNode } from "react";

export interface KPI {
  title: string;
  value: string | number;
  change: string;
  icon: ReactNode;
  status: 'up' | 'down';
}

export interface ChartData {
  title: string;
  dateRange: string;
  dataPoints: number[];
}

export interface Report {
  hospital: string;
  patients: number;
  duration: string;
}

export interface Feedback {
  hospital: string;
  date: string;
  completion: number;
}
