import { Button } from '@/components/ui/button'
import Image from 'next/image'
interface ProjectCardProps {
  topics: string[]
  title: string
  description: string
  img: string
}
const ProjectCard = ({topics, title, description, img} : ProjectCardProps) => {
  return (
    <div className="max-w-xs sm:max-w-md border flex flex-col text-gray-400 ">
      <div className="w-full h-1/2">
        <Image
          src={img}
          width={500}
          height={500}
          alt="Picture of the author"
          className='w-full h-full object-cover'
        />
      </div>
      <div className="flex text-gray-400 ~text-sm/lg gap-2 px-2 py-1 border-y">
        {topics.map((topic, index) => (
          <span
            key={index}
          >
            {topic}
          </span>
        ))}
      </div>
      <div className='flex px-3 flex-col py-2 ~gap-2/4'>
        <h1 className='~text-lg/3xl text-white'>{title}</h1>
        <p className='~text-sm/lg line-clamp-3'>{description}</p>
          <Button
            className="rounded-none border border-purple-400 hover:bg-purple-400 w-fit ~px-2/5 ~text-xs/lg "
            variant="ghost"
          >
            Live &lt; ~~ &gt;
          </Button>
      </div>
    </div>
  )
}

export { ProjectCard }
