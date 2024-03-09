import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function Apply() {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [date1, setDate1] = useState(10);
    const [cemail, setCemail] = useState('');
    const [reason, setReason] = useState('');

    const handleStartDateChange = (date) => {
        setStartDate(date);
    };

    const handleEndDateChange = (date) => {
        setEndDate(date);
    };

    const handleCurrentLeaveChange = (e) => {
        setDate1(e.target.value);
    };

    const handleEmailChange = (e) => {
        setCemail(e.target.value);
    };

    const handleReasonChange = (e) => {
        setReason(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5485/apply', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    cemail,
                    date1,
                    startDate,
                    endDate,
                    reason
                })
            });

            const data = await response.json();
            alert(data.message);
        } catch (error) {
            console.error('Error submitting application:', error);
            alert('Check Your Credentials!!');
        }
    };

    return (
        <div className="container-fluid">
            <div className="text-center">
                <h1>
                    <strong className="brand-name">ArkaTechnical</strong>
                </h1>
            </div>
            <div className="row">
                <div className="col-md-6 col-10 mx-auto">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Company Email address</label>
                            <input type="text" className="form-control" id="exampleInputEmail11" aria-describedby="emailHelp" onChange={handleEmailChange} />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputLeave" className="form-label">Current Leave</label>
                            <input type="text" className="form-control" id="exampleInputLeave" value={date1} onChange={handleCurrentLeaveChange} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">From</label><br />
                            <DatePicker selected={startDate} onChange={handleStartDateChange} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">To</label><br />
                            <DatePicker selected={endDate} onChange={handleEndDateChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputReason" className="form-label">Reason</label>
                            <input type="text" className="form-control" id="exampleInputReason" onChange={handleReasonChange} />
                        </div>
                        <button type="submit" className="btn btn-success">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Apply;
