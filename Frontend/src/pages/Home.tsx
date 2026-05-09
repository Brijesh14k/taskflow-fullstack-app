import Navbar from '../components/Navbar'

import TaskForm from '../components/TaskForm'

import TaskCard from '../components/TaskCard'

import '../styles/Home.css'

import { useEffect, useState } from 'react'

import API from '../services/api'


function Home() {

    const [tasks, setTasks] =
        useState<any[]>([])


    const fetchTasks = async () => {

        try {

            const response =
                await API.get('tasks/')

            setTasks(response.data)

        } catch {

            alert('Failed to load tasks')
        }
    }


    useEffect(() => {

        fetchTasks()

    }, [])


    return (

        <div>

            <Navbar />

            <div className="home-container">

                <div className="dashboard-header">

                    <h1>
                        My Tasks
                    </h1>

                    <p>
                        Manage your daily work efficiently
                    </p>

                </div>

                <TaskForm
                    fetchTasks={fetchTasks}
                />

                <div className="stats-grid">

                    <div className="stat-card">

                        <h2>
                            {tasks.length}
                        </h2>

                        <p>
                            Total Tasks
                        </p>

                    </div>

                    <div className="stat-card">

                        <h2>

                            {
                                tasks.filter(
                                    (task: any) =>
                                        task.completed
                                ).length
                            }

                        </h2>

                        <p>
                            Completed
                        </p>

                    </div>

                </div>

                {

                    tasks.length === 0 ? (

                        <div className="empty-state">

                            <h2>
                                No Tasks Yet
                            </h2>

                            <p>
                                Start by creating your first task
                            </p>

                        </div>

                    ) : (

                        <div className="task-grid">

                            {

                                tasks.map((task: any) => (

                                    <TaskCard
                                        key={task.id}
                                        task={task}
                                        fetchTasks={fetchTasks}
                                    />

                                ))

                            }

                        </div>

                    )

                }

            </div>

        </div>

    )
}

export default Home