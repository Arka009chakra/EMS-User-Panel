import React, { useState, useEffect } from 'react';
import p1 from './p1.png'; // Assuming p1.png is the correct path to your image
function Dashboard() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const userEmail = localStorage.getItem("email"); // Get the logged-in user's email from localStorage

        fetch('http://localhost:5485/get', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: userEmail }) // Pass the email to the backend
        })
        .then(response => response.json())
        .then(data => setData(data))
        .catch(err => console.log(err));
    }, []);

    return (
        <>
            <div className="container-fluid nav-bg">
                <div className="row">
                    <div className="col-10 mx-auto pt-5">
                        <div className="row">
                            <div className="col-lg-6 my-6 d-flex justify-content-center flex-column order-1">
                               
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Name</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Role</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map(data => (
                                            <tr key={data._id}>
                                                <td>{data.name}</td>
                                                <td>{data.cemail}</td>
                                                <td>{data.role}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div className="col-lg-6">
                                <img src={p1} className="img-fluid animated-image with-margin-top" alt="home-img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Dashboard;
