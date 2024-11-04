import Image from 'next/image'
import { Title } from '../../components/Title'
import SkillCard from './CardSkills';

const Skills = () => {
  const skillsData = [
    { title: 'Languages', skills: ['Python', 'C++', 'JavaScript / TypeScript'] },
    { title: 'Frontend', skills: ['HTML / CSS', 'Next.js', 'React'] },
    { title: 'Backend', skills: ['NestJS / Node.js'] },
    { title: 'Other Skills', skills: ['Problem Solving', 'Algorithms'] },
    { title: 'Databases', skills: ['SQL'] },
    { title: 'Tools', skills: ['Git / GitHub', 'Docker'] },
  ]
  return (
    <div className="container mx-auto flex flex-col ~gap-4/14 font-fira items-center py-20">
      <div className="flex w-full ~text-lg/3xl text-white items-center">
        <Title
          width={30}
          title="Skills"
        ></Title>
      </div>
      <div className="flex justify-between w-full gap-4 ">
        <div>
        <Image
          src="/Skills.png"
          width={549}
          height={265}
          alt="Picture of the author"
          className='sm:block hidden'
        />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-4 ">
          {skillsData.map((item, index) => (
            <SkillCard key={index} title={item.title} skills={item.skills} />
          ))}
        </div>
      </div>
    </div>
  )
}
export { Skills }
