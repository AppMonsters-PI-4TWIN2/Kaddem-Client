import { useEffect } from "react"
import { useProjectsContext } from "../hooks/useProjectsContext"
import ProjectDetails from "../components/ProjectDetails";

const ProjectDetails = () => {
    const { projects, dispatch } = useProjectsContext()

    useEffect(() => {
        const fetchProjects = async () => {
            const response = await fetch('/api/Projects')
            const json = await response.json()

            if (response.ok) {
                dispatch({type: 'SET_PROJECTS', payload: json})
            }
        }

        fetchProjects()
    }, [dispatch])

    return (
        <div className="home">
            <div className="projects">
                {projects && projects.map(project => (
                    <ProjectDetails project={project} key={project._id} />
                ))}
            </div>

        </div>
    )
}

export default ProjectDetails