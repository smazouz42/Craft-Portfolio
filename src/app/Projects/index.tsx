import { ProjectCard } from "./ProjectCard"
import { Title } from "./Title"

const Projects = () => {
    return (
        <div className="container mx-auto flex flex-col gap-20">
            <Title width={700} title="Projects"></Title>
            <ProjectCard />


        </div>
    )
}

export { Projects }