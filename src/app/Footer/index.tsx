import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <section className="container mx-auto ">
      <div className="flex flex-col md:flex-row items-center justify-between px-4 text-gray-400">
        <p className="text-center md:text-left mb-2 md:mb-0">
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
        <div className="flex space-x-4">
        <h1>Media</h1>

          <a
            href="https://twitter.com/your-twitter"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white flex items-center"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
          <a
            href="https://linkedin.com/in/your-linkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white flex items-center"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/your-github"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white flex items-center"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </section>
  );
};

export { Footer };
