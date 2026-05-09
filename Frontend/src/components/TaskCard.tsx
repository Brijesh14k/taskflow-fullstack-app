import API from '../services/api'

import '../styles/TaskCard.css'


type Props = {

    task: any

    fetchTasks: () => void
}


function TaskCard({
    task,
    fetchTasks
}: Props) {


    const deleteTask = async () => {

        try {

            await API.delete(
                `tasks/${task.id}/`
            )

            fetchTasks()

        } catch {

            alert('Delete failed')
        }
    }


    const toggleComplete = async () => {

        try {

            await API.put(

                `tasks/${task.id}/`,

                {
                    title: task.title,
                    description:
                        task.description,

                    completed:
                        !task.completed
                }
            )

            fetchTasks()

        } catch {

            alert('Update failed')
        }
    }


    return (

        <div className="task-card">

            <h3>

                {task.title}

            </h3>

            <p>

                {task.description}

            </p>

            <p>

                Status:

                {
                    task.completed
                        ? ' Completed'
                        : ' Pending'
                }

            </p>

            <div className="task-buttons">

                <button
                    className="edit-btn"
                    onClick={toggleComplete}
                >

                    {
                        task.completed
                            ? 'Undo'
                            : 'Complete'
                    }

                </button>

                <button
                    className="delete-btn"
                    onClick={deleteTask}
                >

                    Delete

                </button>

            </div>

        </div>
    )
}

export default TaskCard