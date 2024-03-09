import React, { useState, useEffect } from 'react';
import p1 from './p1.png'; // Assuming p1.png is the correct path to your image

function Task() {
    const [tasks, setTasks] = useState(null); // Initialize tasks state to null

    useEffect(() => {
        const userEmail = localStorage.getItem("email");

        fetch('http://localhost:5485/gettask', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: userEmail })
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setTasks(data))
            .catch(err => console.error('Error fetching tasks:', err));
    }, []);

    return (
        <div className="container-fluid nav-bg">
            <div className="row">
                <div className="col-10 mx-auto pt-5">
                    <div className="row">
                        <div className="col-lg-6 my-6 d-flex justify-content-center flex-column order-1">
                            {tasks !== null ? (
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Name</th>
                                            <th scope="col">Task</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {tasks.map(task => (
                                            <tr key={task._id}>
                                                <td>{task.cemail}</td>

                                                <td>{task.task}</td>

                                                <td>
                                                    <button type="submit" className="btn btn-success" style={{ width: '100px', height: '40px' }}>
                                                        Complete
                                                    </button>

                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            ) : (
                                <p>Loading...</p>
                            )}
                        </div>
                        <div className="col-lg-6">
                            <img src={p1} className="img-fluid animated-image with-margin-top" alt="home-img" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Task;
