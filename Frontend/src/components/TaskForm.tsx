import { useState } from 'react'

import API from '../services/api'

import '../styles/TaskForm.css'


type Props = {
    fetchTasks: () => void
}


function TaskForm({
    fetchTasks
}: Props) {

    const [title, setTitle] =
        useState('')

    const [
        description,
        setDescription
    ] = useState('')


    const handleSubmit = async (
        e: React.FormEvent
    ) => {

        e.preventDefault()

        try {

            await API.post(
                'tasks/',
                {
                    title,
                    description,
                    completed: false
                }
            )

            setTitle('')
            setDescription('')

            fetchTasks()

        } catch (error) {

            console.log(error)

            alert('Failed to create task')
        }
    }


    return (

        <form
            className="task-form"
            onSubmit={handleSubmit}
        >

            <h2>
                Add New Task
            </h2>

            <input
                type="text"
                placeholder="Task title"
                value={title}
                onChange={(e) =>
                    setTitle(e.target.value)
                }
                required
            />

            <textarea
                placeholder="Task description"
                value={description}
                onChange={(e) =>
                    setDescription(
                        e.target.value
                    )
                }
                required
            />

            <button type="submit">
                Add Task
            </button>

        </form>
    )
}

export default TaskForm