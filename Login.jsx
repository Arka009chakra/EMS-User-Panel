import React, { useState } from 'react';

function Login() {
    const [cemail, setCemail] = useState("");
    const [psw, setPsw] = useState("");

    function test(e) {
        e.preventDefault();

        fetch('http://localhost:5485/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                cemail: cemail,
                psw: psw,
            })
        })
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            alert(data.message);
            localStorage.setItem("email", cemail);
        })
        .catch(function() {
            alert("Check Your Credentials!!");
        });
    }

    return (
        <div className="container-fluid">
            <div className="text-center">
                <h1>
                    <strong className="brand-name">ArkaTechnical</strong>
                </h1>
            </div>
            <div className="row">
                <div className="col-md-6 col-10 mx-auto">
                    <form onSubmit={test}>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Company Email address</label>
                            <input type="text" className="form-control" id="exampleInputEmail11" aria-describedby="emailHelp" onChange={(e) => setCemail(e.target.value)} />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword2" onChange={(e) => setPsw(e.target.value)} />
                        </div>
                        <button type="submit" className="btn btn-success">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
