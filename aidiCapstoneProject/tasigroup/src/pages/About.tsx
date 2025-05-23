import { GraduationCap, Heart, Shield, Zap } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: GraduationCap,
      title: "Education First",
      description: "We believe in the power of education to transform lives.",
      gradient: "from-blue-600 to-cyan-500",
    },
    {
      icon: Heart,
      title: "Passionate About Teaching",
      description: "Our team consists of educators who understand your needs.",
      gradient: "from-purple-600 to-pink-500",
    },
    {
      icon: Shield,
      title: "Trusted Platform",
      description: "Security and privacy are at the core of everything we do.",
      gradient: "from-green-500 to-teal-500",
    },
    {
      icon: Zap,
      title: "Innovative Solutions",
      description:
        "Constantly evolving to provide cutting-edge educational tools.",
      gradient: "from-orange-500 to-red-500",
    },
  ];

  return (
    <div className="min-h-screen pt-20 pl-64">
      <div className="max-w-6xl mx-auto p-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            About EVA
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering educators with AI-driven tools to create exceptional
            learning experiences.
          </p>
        </div>

        <div className="relative mb-20">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-3xl transform -skew-y-2"></div>
          <div className="relative bg-white/80 backdrop-blur-md p-12 rounded-3xl shadow-xl">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              At EVA, we're dedicated to revolutionizing education through
              innovative AI technology. Our platform empowers educators to
              create engaging, personalized learning experiences while saving
              valuable time. We believe that by combining the expertise of
              teachers with the power of AI, we can enhance education for
              everyone.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="group relative bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${value.gradient} rounded-t-2xl`}
              ></div>
              <value.icon
                className={`h-12 w-12 mb-4 bg-gradient-to-r ${value.gradient} bg-clip-text text-transparent`}
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {value.title}
              </h3>
              <p className="text-gray-600">{value.description}</p>
              <div className="absolute bottom-0 left-0 w-full h-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 group-hover:h-full transition-all duration-300 rounded-2xl -z-10"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
