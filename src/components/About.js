import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaJava,
  FaPython,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiEjs,
  SiPostman,
} from "react-icons/si";

export default function About() {
  const skills = [
    {
      name: "HTML",
      icon: <FaHtml5 />,
      level: "Advanced",
      percent: 90,
      barColor: "bg-orange-500",
    },
    {
      name: "CSS",
      icon: <FaCss3Alt />,
      level: "Advanced",
      percent: 85,
      barColor: "bg-blue-500",
    },
    {
      name: "JavaScript",
      icon: <FaJsSquare />,
      level: "Intermediate",
      percent: 75,
      barColor: "bg-yellow-400",
    },
    {
      name: "React",
      icon: <FaReact />,
      level: "Intermediate",
      percent: 70,
      barColor: "bg-cyan-400",
    },
    {
      name: "Node.js",
      icon: <FaNodeJs />,
      level: "Intermediate",
      percent: 70,
      barColor: "bg-green-600",
    },
    {
      name: "Express",
      icon: <SiExpress />,
      level: "Intermediate",
      percent: 65,
      barColor: "bg-gray-800",
    },
    {
      name: "MongoDB",
      icon: <SiMongodb />,
      level: "Intermediate",
      percent: 70,
      barColor: "bg-green-700",
    },
    {
      name: "Tailwind",
      icon: <SiTailwindcss />,
      level: "Intermediate",
      percent: 80,
      barColor: "bg-teal-400",
    },
    {
      name: "EJS",
      icon: <SiEjs />,
      level: "Beginner",
      percent: 50,
      barColor: "bg-purple-600",
    },
    {
      name: "Git & GitHub",
      icon: <FaGitAlt />,
      level: "Intermediate",
      percent: 75,
      barColor: "bg-red-500",
    },
    {
      name: "Postman",
      icon: <SiPostman />,
      level: "Intermediate",
      percent: 60,
      barColor: "bg-orange-500",
    },
    {
      name: "Python",
      icon: <FaPython />,
      level: "Intermediate",
      percent: 65,
      barColor: "bg-yellow-600",
    },
    {
      name: "Java",
      icon: <FaJava />,
      level: "Beginner",
      percent: 40,
      barColor: "bg-blue-700",
    },
  ];

  return (
    <section
      id="about"
      className="bg-gradient-to-br from-indigo-100 via-purple-100 to-teal-100 pt-16 pb-0 px-6"
    >
      <div className="max-w-6xl mx-auto space-y-16">
        {/* About Me */}
        <div className="bg-white/80 backdrop-blur-md shadow-xl rounded-3xl p-8">
          <div className="flex justify-center mb-4">
            <img
              src="ganesh linked.jpg" // image path
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover border-4 border-indigo-500 shadow-lg"
            />
          </div>
          <h2 className="text-4xl font-bold text-indigo-700 mb-4 text-center">
            About Me
          </h2>
          <p className="text-gray-800 text-lg text-center">
            I'm{" "}
            <span className="text-purple-600 font-semibold">
              Ganesh Kulakarni
            </span>
            , a passionate developer who loves solving problems using full-stack
            technologies.
          </p>
        </div>

        {/* Journey */}
        <div className="bg-white/80 backdrop-blur-md shadow-xl rounded-3xl p-8">
          <h2 className="text-4xl font-bold text-teal-700 mb-4 text-center">
            My Professional Journey
          </h2>
          <p className="text-gray-800 text-lg text-center">
            Starting with basics like HTML/CSS/JS, I advanced to the MERN stack
            and have developed real-world projects like the Smart Bank Queue
            System.
          </p>
        </div>

        {/* Skills */}
        <div
          id="skills"
          className="bg-white/80 backdrop-blur-md shadow-xl rounded-3xl p-8"
        >
          <h2 className="text-4xl font-bold text-purple-700 mb-6 text-center">
            My Skills
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md border border-gray-200"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{skill.icon}</span>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {skill.name}
                  </h3>
                </div>
                <p className="text-sm text-gray-500 mb-2">
                  {skill.level} level
                </p>
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div
                    className={`h-full ${skill.barColor}`}
                    style={{ width: `${skill.percent}%` }}
                  ></div>
                </div>
                <p className="text-right text-sm text-gray-600 mt-1">
                  {skill.percent}%
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Projects */}
        <div
          id="projects"
          className="bg-white/80 backdrop-blur-md shadow-xl rounded-3xl p-8"
        >
          <h2 className="text-4xl font-bold text-indigo-700 mb-6 text-center">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Project Cards */}
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Smart Bank Queue System
              </h3>
              <p className="text-sm text-gray-600 mb-2">
                A MERN stack project that reduces wait times and improves
                customer experience in rural banks using an online slot booking
                system.
              </p>
              <p className="text-sm text-gray-500">
                <span className="font-semibold">Tech Used:</span> MongoDB,
                Express, React, Node.js
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Contact Manager
              </h3>
              <p className="text-sm text-gray-600 mb-2">
                A CRUD web app to manage contacts with form handling. Add, edit,
                delete, and search contacts.
              </p>
              <p className="text-sm text-gray-500">
                <span className="font-semibold">Tech Used:</span> HTML, CSS,
                Node.js, Express, MongoDB
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Simple To-Do List
              </h3>
              <p className="text-sm text-gray-600 mb-2">
                A clean React-based to-do list app that lets users manage tasks
                easily.
              </p>
              <p className="text-sm text-gray-500">
                <span className="font-semibold">Tech Used:</span> React
              </p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div
          id="contacts"
          className="bg-white/80 backdrop-blur-md shadow-xl rounded-3xl p-8"
        >
          <h2 className="text-4xl font-bold text-indigo-700 mb-8 text-center">
            Contact Me
          </h2>
          <form className="space-y-6 max-w-2xl mx-auto">
            <div>
              <label className="block font-medium mb-1">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Message</label>
              <textarea
                rows="4"
                placeholder="Write your message..."
                className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-xl transition"
            >
              Send Message
            </button>
          </form>

          {/* Social Icons */}
          <div className="flex justify-center gap-6 mt-10 text-2xl">
            <a
              href="https://github.com/GaneshKulakarni"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/ganesh-kulakarni"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/ganeshkulakarni"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
