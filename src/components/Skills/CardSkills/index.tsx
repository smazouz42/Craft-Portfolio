import React from 'react';
interface SkillCardProps {
  title: string;
  skills: string[];
}

const SkillCard = ({ title, skills}: SkillCardProps) => {
  return (
    <div className={"p-3 w-fit h-fit border border-gray-400"}>
      <h3 className="text-xl text-white">{title}</h3>
      <ul className="flex flex-col gap-2 border-t border-gray-400 w-full">
        {skills.map((skill, index) => (
          <li key={index} className="text-gray-400 text-lg">
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillCard;
