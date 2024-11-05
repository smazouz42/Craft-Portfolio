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
          img='/PongYo.jpeg' />
        <ProjectCard
          title='Coinflip'
          description='A landing page for a crypto coin website build with NextJs using modern techniques'
          topics={["/React", "/NextJs", "/NestJs", "/Sockets"]}
          img='/CoinFlip.png' />
        <ProjectCard
          title='IRC'
          description='An IRC (Internet Relay Chat) network is a real-time, text-based communication platform'
          topics={["/C++", "/C", "/Sockets"]}
          img='/IRC.jpg' />
      </div>
    </div>
  )
}

export { Projects }
