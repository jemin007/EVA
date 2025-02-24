// import {
//   FileSpreadsheet,
//   Brain,
//   BookOpen,
//   PenTool,
//   BarChart as ChartBar,
//   Clock,
// } from "lucide-react";

// const Tools = () => {
//   const tools = [
//     {
//       icon: FileSpreadsheet,
//       title: "Assignment Generator",
//       description: "Create custom assignments with AI assistance",
//       gradient: "from-blue-600 to-cyan-500",
//       action: "Create Assignment",
//     },
//     {
//       icon: Brain,
//       title: "Quiz Maker",
//       description: "Generate engaging quizzes in seconds",
//       gradient: "from-purple-600 to-pink-500",
//       action: "Create Quiz",
//     },
//     {
//       icon: BookOpen,
//       title: "Course Planner",
//       description: "Design comprehensive course outlines",
//       gradient: "from-green-500 to-teal-500",
//       action: "Plan Course",
//     },
//     {
//       icon: PenTool,
//       title: "Rubric Creator",
//       description: "Build detailed grading rubrics",
//       gradient: "from-orange-500 to-red-500",
//       action: "Create Rubric",
//     },
//     {
//       icon: ChartBar,
//       title: "Progress Tracker",
//       description: "Monitor student performance",
//       gradient: "from-indigo-600 to-purple-600",
//       action: "Track Progress",
//     },
//     {
//       icon: Clock,
//       title: "Lesson Timer",
//       description: "Manage class time effectively",
//       gradient: "from-pink-500 to-rose-500",
//       action: "Start Timer",
//     },
//   ];

//   return (
//     <div className="min-h-screen pt-20 pl-64">
//       <div className="max-w-6xl mx-auto p-8">
//         <div className="text-center mb-16">
//           <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
//             EVA Tools
//           </h1>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             A comprehensive suite of AI-powered tools designed to enhance your
//             teaching experience.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {tools.map((tool, index) => (
//             <div
//               key={index}
//               className="group relative bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
//             >
//               <div
//                 className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${tool.gradient} rounded-t-2xl`}
//               ></div>
//               <tool.icon
//                 className={`h-12 w-12 mb-4 bg-gradient-to-r ${tool.gradient} bg-clip-text text-transparent`}
//               />
//               <h3 className="text-xl font-semibold text-gray-800 mb-2">
//                 {tool.title}
//               </h3>
//               <p className="text-gray-600 mb-4">{tool.description}</p>
//               <button
//                 className={`w-full py-2 bg-gradient-to-r ${tool.gradient} text-white rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2`}
//               >
//                 {tool.action}
//               </button>
//               <div className="absolute bottom-0 left-0 w-full h-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 group-hover:h-full transition-all duration-300 rounded-2xl -z-10"></div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Tools;

import {
  FileSpreadsheet,
  Brain,
  BookOpen,
  PenTool,
  BarChart as ChartBar,
  Clock,
} from "lucide-react";

const Tools = () => {
  const tools = [
    {
      icon: FileSpreadsheet,
      title: "Assignment Generator",
      description: "Create custom assignments with AI assistance",
      gradient: "from-blue-500 to-cyan-400",
      action: "Create Assignment",
    },
    {
      icon: Brain,
      title: "Quiz Maker",
      description: "Generate engaging quizzes in seconds",
      gradient: "from-purple-500 to-pink-400",
      action: "Create Quiz",
    },
    {
      icon: BookOpen,
      title: "Course Planner",
      description: "Design comprehensive course outlines",
      gradient: "from-green-500 to-teal-400",
      action: "Plan Course",
    },
    {
      icon: PenTool,
      title: "Rubric Creator",
      description: "Build detailed grading rubrics",
      gradient: "from-orange-500 to-red-400",
      action: "Create Rubric",
    },
    {
      icon: ChartBar,
      title: "Progress Tracker",
      description: "Monitor student performance",
      gradient: "from-indigo-500 to-purple-400",
      action: "Track Progress",
    },
    {
      icon: Clock,
      title: "Lesson Timer",
      description: "Manage class time effectively",
      gradient: "from-pink-500 to-rose-400",
      action: "Start Timer",
    },
  ];

  return (
    <div className="flex">
      {/* Main Content with Proper Padding for Navbar & Footer */}
      <main className="flex-1 ml-64 px-6 py-20 bg-gray-900 text-white min-h-screen">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-extrabold mb-4 text-white drop-shadow-lg">
              EVA{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                Tools
              </span>
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              A suite of AI-powered tools designed to enhance your teaching
              experience.
            </p>
          </div>

          {/* Tools Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pb-20">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="relative group bg-white/5 border border-white/10 rounded-3xl shadow-lg p-8 backdrop-blur-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:scale-105 transform"
              >
                {/* Animated Background Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl bg-gradient-to-r from-white/10 to-white/5"></div>

                {/* Top Gradient Line */}
                <div
                  className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${tool.gradient} rounded-t-3xl`}
                ></div>

                {/* Icon with Gradient Effect */}
                <tool.icon
                  className={`h-14 w-14 mb-4 bg-gradient-to-r ${tool.gradient} bg-clip-text text-transparent drop-shadow-lg`}
                />

                {/* Title */}
                <h3 className="text-2xl font-semibold text-white mb-2">
                  {tool.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 mb-6">{tool.description}</p>

                {/* Button */}
                <button
                  className={`w-full py-3 text-lg font-medium bg-gradient-to-r ${tool.gradient} text-white rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2`}
                >
                  {tool.action}
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Tools;
