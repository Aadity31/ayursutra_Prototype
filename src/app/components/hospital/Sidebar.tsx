import Link from "next/link";
import {
  FiHome,
  FiUsers,
  FiBarChart2,
  FiSettings,
  FiHelpCircle,
} from "react-icons/fi";

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-white border-r h-screen sticky top-0 p-6 flex flex-col justify-between">
      <div>
        <div className="text-2xl font-bold text-indigo-600 mb-8">AyurSutra</div>
        <nav className="space-y-4">
          {/* Dashboard link */}
          <Link
            href="/hospital/dashboard"
            className="flex items-center gap-3 text-gray-700 hover:text-indigo-600"
          >
            <FiHome /> Dashboard
          </Link>

          {/* Hospital page */}
          <Link
            href="/hospital/dashboard/manage"
            className="flex items-center gap-3 text-gray-700 hover:text-indigo-600"
          >
            <FiUsers /> Hospital
          </Link>

          {/* Analytics page */}
          <Link
            href="/hospital/dashboard/analytics"
            className="flex items-center gap-3 text-gray-700 hover:text-indigo-600"
          >
            <FiBarChart2 /> Analytics
          </Link>

          {/* Settings */}
          <Link
            href="/settings"
            className="flex items-center gap-3 text-gray-700 hover:text-indigo-600"
          >
            <FiSettings /> Settings
          </Link>
        </nav>
      </div>
      <div className="bg-gray-100 p-4 rounded-lg flex items-center gap-3 text-gray-700">
        <FiHelpCircle /> Need Help?
      </div>
    </aside>
  );
};

export default Sidebar;
