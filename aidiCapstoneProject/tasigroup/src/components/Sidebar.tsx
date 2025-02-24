// import {
//   Settings,
//   Share2,
//   Info,
//   GraduationCap,
//   ChevronRight,
// } from "lucide-react";
// import { Link } from "react-router-dom";

// const Sidebar = () => {
//   return (
//     <div className="fixed left-0 top-20 h-[calc(100vh-5rem)] w-64 bg-white/80 backdrop-blur-md p-6 border-r border-gray-200 shadow-lg">
//       <div className="space-y-4">
//         <Link
//           to="/tools"
//           className="flex items-center justify-between p-3 hover:bg-blue-50 rounded-xl transition-all duration-300 group"
//         >
//           <div className="flex items-center space-x-3">
//             <Settings className="h-5 w-5 text-blue-600" />
//             <span className="font-medium text-gray-700">EVA TOOLS</span>
//           </div>
//           <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-blue-600 transform group-hover:translate-x-1 transition-transform" />
//         </Link>

//         <Link
//           to="/share"
//           className="flex items-center justify-between p-3 hover:bg-green-50 rounded-xl transition-all duration-300 group"
//         >
//           <div className="flex items-center space-x-3">
//             <Share2 className="h-5 w-5 text-green-600" />
//             <span className="font-medium text-gray-700">SHARE THE EVA</span>
//           </div>
//           <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-green-600 transform group-hover:translate-x-1 transition-transform" />
//         </Link>

//         <Link
//           to="/intro"
//           className="flex items-center justify-between p-3 hover:bg-purple-50 rounded-xl transition-all duration-300 group"
//         >
//           <div className="flex items-center space-x-3">
//             <Info className="h-5 w-5 text-purple-600" />
//             <span className="font-medium text-gray-700">EVA INTRO</span>
//           </div>
//           <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-purple-600 transform group-hover:translate-x-1 transition-transform" />
//         </Link>

//         <Link
//           to="/upgrade"
//           className="flex items-center justify-between p-3 mt-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
//         >
//           <div className="flex items-center space-x-3">
//             <GraduationCap className="h-5 w-5" />
//             <span className="font-medium">UPGRADE</span>
//           </div>
//           <ChevronRight className="h-4 w-4" />
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;
import {
  Settings,
  Share2,
  Info,
  GraduationCap,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="fixed left-0 top-0 h-screen w-64 bg-gradient-to-b from-gray-900 to-gray-800 border-r border-gray-700 shadow-2xl backdrop-blur-lg p-6 rounded-r-xl transition-all duration-500">
      {/* Logo / Title */}
      <h1 className="text-3xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent text-center mb-8 tracking-widest">
        EVA Tools
      </h1>

      <div className="space-y-6">
        {/* Sidebar Item Component */}
        <SidebarItem
          to="/tools"
          icon={
            <Settings className="h-6 w-6 text-blue-400 group-hover:text-white transition-all" />
          }
          title="EVA TOOLS"
          color="from-blue-600 to-cyan-500"
        />

        <SidebarItem
          to="/share"
          icon={
            <Share2 className="h-6 w-6 text-green-400 group-hover:text-white transition-all" />
          }
          title="SHARE THE EVA"
          color="from-green-600 to-teal-500"
        />

        <SidebarItem
          to="/intro"
          icon={
            <Info className="h-6 w-6 text-purple-400 group-hover:text-white transition-all" />
          }
          title="EVA INTRO"
          color="from-purple-600 to-pink-500"
        />

        {/* Upgrade Button */}
        <Link
          to="/upgrade"
          className="flex items-center justify-between p-4 mt-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 transform hover:scale-105"
        >
          <div className="flex items-center space-x-3">
            <GraduationCap className="h-6 w-6" />
            <span className="font-semibold tracking-wide">UPGRADE</span>
          </div>
          <ChevronRight className="h-5 w-5" />
        </Link>
      </div>
    </div>
  );
};

/* Sidebar Item Component */
const SidebarItem = ({ to, icon, title, color }) => {
  return (
    <Link
      to={to}
      className={`group flex items-center justify-between p-4 rounded-xl transition-all duration-300 
      bg-gray-800/30 hover:bg-gradient-to-r ${color} shadow-md hover:shadow-lg`}
    >
      <div className="flex items-center space-x-4">
        {icon}
        <span className="font-medium text-gray-300 group-hover:text-white tracking-wide">
          {title}
        </span>
      </div>
      <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-white transition-all" />
    </Link>
  );
};

export default Sidebar;
