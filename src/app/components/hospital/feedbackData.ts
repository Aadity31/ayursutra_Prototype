import { Feedback } from "../../types";
import {
  FiActivity,
  FiCheck,
  FiTrendingUp,
  FiUsers,
  FiCalendar,
  FiStar,
} from "react-icons/fi";

export const feedbackData: Feedback[] = [
  {
    hospital: "Doon Hospital",
    date: "22 DEC 7:20 PM",
    completion: 50,
    icon: FiCalendar,
    color: "#0EA5E9", // blue
  },
  {
    hospital: "Doon Hospital",
    date: "21 DEC 11:21 PM",
    completion: 10,
    icon: FiUsers,
    color: "#F43F5E", // red
  },
  {
    hospital: "Doon Hospital",
    date: "21 DEC 9:26 PM",
    completion: 100,
    icon: FiActivity,
    color: "#10B981", // green
  },
  {
    hospital: "Doon Hospital",
    date: "20 DEC 3:52 PM",
    completion: 100,
    icon: FiTrendingUp,
    color: "#10B981",
  },
  {
    hospital: "Doon Hospital",
    date: "19 DEC 10:53 PM",
    completion: 25,
    icon: FiStar,
    color: "#FACC15", // yellow
  },
  {
    hospital: "Doon Hospital",
    date: "18 DEC 6:41 PM",
    completion: 60,
    icon: FiCheck,
    color: "#8B5CF6", // purple
  },
];
