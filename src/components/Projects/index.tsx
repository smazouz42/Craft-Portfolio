import { ProjectCard } from './ProjectCard'
import { Title } from '../Title'
import Link from 'next/link'

const Projects = () => {
  return (

    <div className="container mx-auto flex flex-col ~gap-4/14 font-fira items-center" id="works">
      <div className="flex justify-between w-full ~text-lg/3xl text-white items-center">
        <Title
          width={70}
          title="Projects"
        ></Title>
        <Link href="/projects">
          <span className="text-white ~text-sm/lg cursor-pointer"> View all ~~&gt;</span>
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        <ProjectCard
          title='PongYo'
          description='Web Site That Has Profile, Chat And Onlone Ping Pong Game'
          topics={["/React", "/NextJs", "/NestJs", "/Sockets"]}
          img='/PongYo.jpeg'
          link='https://github.com/smazouz42/PongYo'
          />
        <ProjectCard
          title='Coinflip'
          description='A landing page for a crypto coin website build with NextJs using modern techniques'
          topics={["/React", "/NextJs", "/NestJs", "/Sockets"]}
          img='/CoinFlip.png'
          link="https://coinflip-website-delta.vercel.app/"/>
        <ProjectCard
          title='Portfolio'
          description='A comprehensive portfolio showcasing various projects and skills'
          topics={["/Next.js", "/Tailwind CSS"]}
          img='/Portfolio.png'
          link="https://portfolio-ten-zeta-49.vercel.app/" />
      </div>
    </div>
  )
}

export { Projects }
