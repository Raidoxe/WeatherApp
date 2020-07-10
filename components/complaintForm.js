import React from 'react';
import axios from 'axios';
import Link from 'next/link';

class complaintForm extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
                name: "",
                email: "",
                complaint: "",
                setIsThankYou: true
        }
    }


    handleNameChange = (event) => {
        this.setState({
                name: event.target.value
        })
    }

    handleEmailChange = (event) => {
        this.setState({
                email: event.target.value
        })
    }

    handleComplaintChange = (event) => {
        this.setState({
                complaint: event.target.value
        })
    }

    postComplaint = () => {
        const complaintData = {
            name: this.state.name,
            email: this.state.email,
            complaint: this.state.complaint
        }

        axios.post('http://localhost:3000/api/complaint', complaintData).then(response => {
            console.log(response);
        }).catch(reject => console.error(reject));
        this.setState({
            setIsThankYou: false
        })
    }
    
    
    render() {

            return (
                <div className="form-container">
                    {this.state.setIsThankYou ? <div><h4 className="complaints">Make a complaint</h4>
                    <form className="contact-form">
                    <label>Your Name</label><br></br>
                    <input type="text" id="fname" name="fname" onChange={this.handleNameChange}></input><br></br>
                    <label>Email</label><br></br>
                    <input type="email" id="fname" name="fname" onChange={this.handleEmailChange}></input><br></br>
                    <label>Complaint</label><br></br>
                    <input type="text" className="complaint-text" id="fname" name="fname" onChange={this.handleComplaintChange}></input><br></br><br></br>
                    <button className="submit-btn" onClick={this.postComplaint}>Submit</button>
                    </form></div> : <div>
                        <div className="thanks">
                        <h2>Thanks for submitting</h2>
                        <p>We’ve received your complaint, unfortunately we have no control of the weather we merely report on it.
                            As such your complaint has been sent straight to our junk mail folder along with the weekly Wish and 
                            ASOS newsletters that we receive.</p>
                            <p>Does anyone know how to unsubscribe from those? Seriously, you hit unsubscribe and they just keep on coming!
                            </p>
                            </div>
                                    <div className="home-link">
                                    <Link href="/"><a className="home-btn">Home</a></Link>
                                    </div></div>
                    }
                </div>
        );
    }
}

export default complaintForm;