"use client";

import { ProjectCard } from "@/components/Projects/ProjectCard";
import { Title } from "@/components/Title";

const webProjects = [
  {
    title: 'PongYo',
    description: 'Web Site That Has Profile, Chat And Online Ping Pong Game',
    topics: ["/React", "/NextJs", "/NestJs", "/Sockets"],
    img: '/PongYo.jpeg',
    link:'https://github.com/smazouz42/PongYo'
  },
  {
    title: 'Coinflip',
    description: 'A landing page for a crypto coin website built with NextJs using modern techniques',
    topics: ["/React", "/NextJs", "/NestJs", "/Sockets"],
    img: '/CoinFlip.png',
    link:"https://coinflip-website-delta.vercel.app/"
  },
  {
    title: 'Portfolio',
    description: 'A comprehensive portfolio showcasing various projects and skills',
    topics: ["/Next.js", "/Tailwind CSS"],
    img: '/Portfolio.png',
    link:"https://portfolio-ten-zeta-49.vercel.app/"
  },
];

const otherProjects = [
  {
    title: 'Minishell',
    description: 'A simple UNIX shell implementation, focusing on command execution and piping.',
    topics: ["/C", "/Shell Scripting"],
    img: '',
    link:'https://github.com/smazouz42/minishell'
  },
  {
    title: 'Inception',
    description: 'A project designed to create a multi-container architecture with Docker, showcasing service management.',
    topics: ["/Docker", "/DevOps"],
    img: '',
    link:''
    
  },
  {
    title: 'IRC',
    description: 'A C++ implementation of an Internet Relay Chat (IRC) server with user authentication and channel management.',
    topics: ["/C++", "/Networking"],
    img: '',
    link:'https://github.com/smazouz42/ft_irc-Internet-Relay-Chat-'
  },
];

const Projects = () => {
  return (
    <div className="container mx-auto flex flex-col">
      <div className="flex flex-col py-5 gap-2">
        <div className="~text-lg/3xl text-white items-center">
          <Title
            width={60}
            title="about-me"
          ></Title>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">

          {webProjects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              topics={project.topics}
              img={project.img}
              link={project.link}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col py-5 gap-2">
        <div className="~text-lg/3xl text-white items-center">
          <Title
            width={60}
            title="about-me"
          ></Title>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">

          {otherProjects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              topics={project.topics}
              img={project.img}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
