import { Play, BookOpen, Users, Zap } from "lucide-react";

const Intro = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Smart Content Creation",
      description:
        "Generate assignments, quizzes, and course materials with AI assistance.",
      gradient: "from-blue-600 to-cyan-500",
    },
    {
      icon: Users,
      title: "Personalized Learning",
      description:
        "Adapt content to different learning styles and student needs.",
      gradient: "from-purple-600 to-pink-500",
    },
    {
      icon: Zap,
      title: "Time-Saving Tools",
      description:
        "Streamline your workflow with automated grading and feedback.",
      gradient: "from-green-500 to-teal-500",
    },
  ];

  return (
    <div className="min-h-screen pt-20 pl-64">
      <div className="max-w-6xl mx-auto p-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Welcome to EVA
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your AI-powered teaching assistant that makes education more
            effective and engaging.
          </p>
        </div>

        <div className="relative mb-16">
          <div className="aspect-video bg-gray-900 rounded-3xl overflow-hidden shadow-xl">
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="p-6 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-300 group">
                <Play className="h-12 w-12 text-white transform group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${feature.gradient} rounded-t-2xl`}
              ></div>
              <feature.icon
                className={`h-12 w-12 mb-4 bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`}
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
              <div className="absolute bottom-0 left-0 w-full h-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 group-hover:h-full transition-all duration-300 rounded-2xl -z-10"></div>
            </div>
          ))}
        </div>

        <div className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-xl">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Getting Started
          </h2>
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold">
                1
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Create Your Account
                </h3>
                <p className="text-gray-600">
                  Sign up and set up your educator profile to get started.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold">
                2
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Explore Tools
                </h3>
                <p className="text-gray-600">
                  Discover our suite of AI-powered teaching tools.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold">
                3
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Create Content
                </h3>
                <p className="text-gray-600">
                  Start generating assignments, quizzes, and course materials.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
