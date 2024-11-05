import { Title } from '../Title'

const Skills = () => {
  const skillsData = [
    { title: 'Languages', skills: ['Python', 'C++', 'JavaScript / TypeScript'] },
    { title: 'Frontend', skills: ['HTML / CSS', 'Next.js', 'React'] },
    { title: 'Other Skills', skills: ['Problem Solving', 'Algorithms'] },
    { title: 'Backend', skills: ['NestJS / Node.js'] },
    { title: 'Databases', skills: ['SQL'] },
    { title: 'Tools', skills: ['Git / GitHub', 'Docker'] },
  ]
  return (
    <div className="container mx-auto flex flex-col ~gap-4/14 font-fira items-center ~py-2/10">
      <div className="flex w-full ~text-lg/3xl text-white items-center">
        <Title
          width={30}
          title="Skills"
        ></Title>
      </div>
      <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-4 px-4">
        {skillsData.map((skillCategory, index) => (
          <div
            key={index}
            className="px-4 py-2 border border-gray-400  hover:shadow-xl flex flex-col gap-2"
          >
            <h3 className="~text-lg/xl  text-white">{skillCategory.title}</h3>
            <ul className="">
              {skillCategory.skills.map((skill, idx) => (
                <li key={idx} className="text-gray-400 ~text-sm/lg">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
export { Skills }
