import React, { useState } from 'react';
import p1 from './p1.png';
import p2 from './p2.png';
import { useNavigate } from 'react-router';
function Card() {
    const navigate = useNavigate();
    const [date,setDate]= useState(10);
    return (
        <div className="container">
            <div className="row">
                {/* Image to the left */}
                <div className="col-lg-6">
                    <img src={p1} className="img-fluid animated-image with-margin-top" alt="home-img" />
                </div>
                {/* Card to the right */}
                <div className="col-lg-6 d-flex justify-content-center align-items-center">
                    <div className="col-lg-6 my-6 d-flex justify-content-center flex-column">
                        <div className="card" style={{ height: '150px', width: '200px' }}>
                            <img src={p2} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Total Leave :  {date}</h5>
                            </div>
                            <button type="button" className="btn btn-success mt-5" onClick={() => navigate('/apply')}>Apply Leave</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
