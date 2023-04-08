import { useProjectsContext } from '../hooks/useProjectsContext'

// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const ProjectDetails = ({ project }) => {
    const { dispatch } = useProjectsContext()

    const handleClick = async () => {
        const response = await fetch('/api/projects/' + project._id, {
            method: 'DELETE'
        })
        const json = await response.json()

        if (response.ok) {
            dispatch({type: 'DELETE_PROJECT', payload: json})
        }
    }

    return (
        <div className="project-details">
            <h4>{project.BrandName}</h4>
            <p><strong>High Level Concept: </strong>{project.concept}</p>
            <p><strong>Number of reps: </strong>{workout.reps}</p>
            <p>{formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}</p>
            <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
        </div>
    )
}

export default ProjectDetails