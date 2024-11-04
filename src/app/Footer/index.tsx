import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <section className="container mx-auto p-10 border-t font-fira">
      <div className="flex flex-col md:flex-row items-center justify-between px-4 text-gray-400">
        <p className="text-center md:text-left mb-2 md:mb-0">
          © {new Date().getFullYear()} Made by Said Mazouz . All rights reserved
        </p>
        <div className='flex flex-col ~gap-2/4 items-center'>
          <h1 className='text-white text-lg'>Media</h1>
          <div className="flex gap-4">
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white flex"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white flex"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white flex"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Footer };
