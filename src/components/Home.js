import axios from 'axios';
import React, { Component } from 'react'

export class Home extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         activeTab: "applicant",
         firstName: "",
         lastName: "",
         mobile: null,
         email: "",
         borrowerId: null,
         loanAmount: null,
         loanTenure: null,
         purpose: null,
         interest: null,
         businessName: null,
         gstNo: null,
         address: null,
         pincode: null
      }
    }

    changeTab(tab) {
        this.setState({
          activeTab: tab
        });
    }

    handleChange = (event, type) => {
        this.setState({[type]: event.target.value});
    }

    saveApplicant = () => {
        let payload = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            mobile: this.state.mobile,
            email: this.state.email
        }
        axios
          .post("./api/borrower", payload)
          .then((res) =>{
            this.setState({ activeTab: "loan", borrowerId: res.data.insertedId })
          }
          )
          .catch(console.log);
    }

    saveLoan = () => {
        let payload = {
            loanAmount: this.state.loanAmount,
            loanTenure: this.state.loanTenure,
            purpose: this.state.purpose,
            interest: this.state.interest,
            borrowerId: this.state.borrowerId
        }
        axios
          .post("./api/loan", payload)
          .then((res) =>
            this.setState({ activeTab: "business" })
          )
          .catch(console.log);
    }

    saveBusiness = () => {
        let payload = {
            businessName: this.state.businessName,
            gstNo: this.state.gstNo,
            address: this.state.address,
            pincode: this.state.interest,
            borrowerId: this.state.borrowerId
        }
        axios
          .post("./api/business", payload)
          .then((res) =>
            this.setState({ activeTab: "business" })
          )
          .catch(console.log);
    }

    showForm() {
        switch (this.state.activeTab) {
            case 'applicant':
                return (
                    <div className="row">
                        <div className="col-md-6">
                            <div class="mt-4">
                                <label for="exampleFormControlInput1" class="form-label">First Name</label>
                                <input type="text" class="form-control" value={this.state.firstName} onChange={(e) => this.handleChange(e, 'firstName')} placeholder="John"></input>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div class="mt-4">
                                <label for="exampleFormControlInput1" class="form-label">Last Name</label>
                                <input type="text" class="form-control"  value={this.state.lastName} onChange={(e) => this.handleChange(e, 'lastName')}  placeholder="Doe"></input>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div class="mt-4">
                                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                <input type="email" class="form-control"  value={this.state.email} onChange={(e) => this.handleChange(e, 'email')}  placeholder="name@example.com"></input>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div class="mt-4">
                                <label for="exampleFormControlInput1" class="form-label">Mobile Number</label>
                                <input type="tel" class="form-control"  value={this.state.mobile} onChange={(e) => this.handleChange(e, 'mobile')}  placeholder="942xxxxxxx"></input>
                            </div>
                        </div>
                        <div class="col-auto mt-4">
                            <button type="submit" class="btn btn-primary mb-3" onClick={this.saveApplicant}>Save Details</button>
                        </div>
                    </div>
                )
                break;
            
            case 'loan' :
                return (
                    <div className="row">
                        <div className="col-md-6">
                            <div class="mt-4">
                                <label for="exampleFormControlInput1" class="form-label">Loan Amount</label>
                                <input type="number" class="form-control" value={this.state.loanAmount} onChange={(e) => this.handleChange(e, 'loanAmount')}></input>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div class="mt-4">
                                <label for="exampleFormControlInput1" class="form-label">Loan Tenure(in year)</label>
                                <input type="number" class="form-control" value={this.state.loanTenure} onChange={(e) => this.handleChange(e, 'loanTenure')}></input>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div class="mt-4">
                                <label for="exampleFormControlInput1" class="form-label">Intereset Rate</label>
                                <input type="number" class="form-control" value={this.state.interest} onChange={(e) => this.handleChange(e, 'interest')}></input>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div class="mt-4">
                                <label for="exampleFormControlInput1" class="form-label">Purpose Of Loan</label>
                                <input type="text" class="form-control" value={this.state.purpose} onChange={(e) => this.handleChange(e, 'purpose')}></input>
                            </div>
                        </div>
                        <div class="col-auto mt-4">
                            <button type="submit" class="btn btn-primary mb-3" onClick={this.saveLoan}>Save Details</button>
                        </div>
                    </div>
                )

            case 'business' :
                return (
                    <div className="row">
                        <div className="col-md-6">
                            <div class="mt-4">
                                <label for="exampleFormControlInput1" class="form-label">Business Name</label>
                                <input type="text" class="form-control" value={this.state.businessName} onChange={(e) => this.handleChange(e, 'businessName')}></input>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div class="mt-4">
                                <label for="exampleFormControlInput1" class="form-label">GST no.</label>
                                <input type="number" class="form-control" value={this.state.gstNo} onChange={(e) => this.handleChange(e, 'gstNo')}></input>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div class="mt-4">
                                <label for="exampleFormControlInput1" class="form-label">Address</label>
                                <input type="text" class="form-control" value={this.state.address} onChange={(e) => this.handleChange(e, 'address')}></input>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div class="mt-4">
                                <label for="exampleFormControlInput1" class="form-label">PIN Code</label>
                                <input type="number" class="form-control" value={this.state.pincode} onChange={(e) => this.handleChange(e, 'pincode')}></input>
                            </div>
                        </div>
                        <div class="col-auto mt-4">
                            <button type="submit" class="btn btn-primary mb-3" onClick={this.saveBusiness}>Save Details</button>
                        </div>
                    </div>
                )
            default:
                break;
        }
    }
  render() {
    return (
        <div>
            <nav class="navbar navbar-light bg-info">
                <div class="container-fluid justify-content-start text-white">
                    <i class="fa fa-star me-4"></i>
                    <span class="navbar-brand text-white">
                        <b>Dygnify</b>
                    </span>
                </div>
            </nav>
            <div className="row d-flex justify-content-center mt-5">
                <div className="col-md-8">
                    <ul class="nav nav-tabs bg-light">
                        <li class="nav-item">
                            <span class={`nav-link ${this.state.activeTab === 'applicant'?'active':''}`} aria-current="page" onClick={() => this.changeTab('applicant')}>Applicant</span>
                        </li>
                        <li class="nav-item">
                            <span class={`nav-link ${this.state.activeTab === 'loan'?'active':''}`} aria-current="page" onClick={() => this.changeTab('loan')}>Loan Details</span>
                        </li>
                        <li class="nav-item">
                            <span class={`nav-link ${this.state.activeTab === 'business'?'active':''}`} aria-current="page" onClick={() => this.changeTab('business')}>Business Details</span>
                        </li>
                    </ul>
                    {this.showForm()}
                </div>
            </div>
        </div>
    )
  }
}

export default Home