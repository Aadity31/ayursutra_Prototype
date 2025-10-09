import Link from "next/link";
import Image from "next/image";
import { FiHelpCircle, FiMail } from "react-icons/fi";
import { MdDashboard } from "react-icons/md";
import { FaHospitalAlt } from "react-icons/fa";
import { RiBarChartFill } from "react-icons/ri";

const Sidebar: React.FC = () => {
  return (
    <aside
      className="w-64 border-r h-screen sticky top-0 flex flex-col justify-between"
      style={{ backgroundColor: "#FFFCF0" }}
    >
      <div className="px-6 py-6">
        <Link href='/hospital/dashboard'>
          <div className="flex items-center gap-3 mb-10 cursor-pointer">
            <div className="flex justify-center items-center space-x-3">
                           <div className="relative w-12 h-12 transform hover:scale-105 transition-transform duration-200">
                               <Image
                                   src="/logo-no-name.svg"
                                   alt="AyurSutra Logo"
                                   width={48}
                                   height={48}
                                   className="rounded-lg object-contain"
                                   priority
                               />
                           </div>
                           <div>
                               <span className="text-2xl font-bold bg-gradient-to-r from-green-700 to-orange-600  bg-clip-text text-transparent">
                                   AyurSutra
                               </span>
                           </div>
                       </div>
          </div>
        </Link>

        <div className="text-xs uppercase text-gray-500 font-semibold mb-3">
          Main Menu
        </div>
        <nav className="space-y-2">
          <Link
            href="/hospital/dashboard"
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-green-700 hover:bg-green-100 hover:text-green-900 font-medium transition"
          >
            <MdDashboard size={20} /> Dashboard
          </Link>

          <Link
            href="/hospital/dashboard/manage"
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-orange-700 hover:bg-orange-100 hover:text-orange-900 font-medium transition"
          >
            <FaHospitalAlt size={20} /> Hospital
          </Link>

          <Link
            href="/hospital/dashboard/analytics"
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-emerald-700 hover:bg-emerald-100 hover:text-emerald-900 font-medium transition"
          >
            <RiBarChartFill size={20} /> Analytics
          </Link>
        </nav>
      </div>

      <div className="px-6 py-6">
        <div className="text-xs uppercase text-gray-500 font-semibold mb-3">
          Support
        </div>
        <div className="bg-gray-100 px-4 py-3 rounded-lg flex flex-col gap-2 text-gray-700 font-medium hover:bg-gray-200 transition">
          <div className="flex items-center gap-3">
            <FiHelpCircle /> Need Help?
          </div>
          <div className="flex items-center gap-2 text-sm text-blue-700 ">
            <a
              href="mailto:shwetanshubhatt@gmail.com"
              className="flex items-center gap-2 text-sm text-blue-700 hover:underline cursor-pointer"
            >
              <FiMail />
              <span>Contact Us</span>
            </a>
          </div>
        <Link href='/'>
          <button
            className="px-5 py-2 rounded-lg bg-red-400 text-white font-semibold 
                      hover:bg-red-600 active:bg-red-600 transition-colors duration-400 
                      shadow-md hover:shadow-lg focus:outline-none focus:ring-2 
                      focus:ring-red-400 focus:ring-offset-1 cursor-pointer"
          >
            Log Out
          </button>
        </Link>
      </div>
      </div>
    </aside>
  );
};

export default Sidebar;
