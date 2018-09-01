import React from 'react';
import moment from 'moment'
export default class SubmitForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            selectedOption: 'any',
            ageFrom: '18',
            ageTo: '35'
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    resetForm = () => {
        this.setState({
            ageFrom: "",
            ageTo: "",
            radio: ""
        });
    }

    handleChange(event) {
        this.setState({
            value: event.target.value,
            selectedOption: event.target.value,
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        console.log('I am going to generate members from: ' + this.state.ageFrom);
        console.log('I am going to generate members to: ' + this.state.ageTo);
        console.log('You have selected:', this.state.selectedOption);

        event.preventDefault();
        const users = this.props.users;
        console.log("submitted array", users)


        console.log("selected option", this.state.selectedOption)

        const gendered = user => {
            const age = user.dob.age;
            console.log("Ager of user", age)
            return user.gender === this.state.selectedOption && age >= this.state.ageFrom && age <= this.state.ageTo
        };

        const ageCheck = user => {
            const age = user.dob.age;
            console.log("Ager of user", age)
            return age >= this.state.ageFrom && age <= this.state.ageTo
        };


        const filteredArray = this.state.selectedOption === "any" ? users.filter(ageCheck) : users.filter(gendered)

        this.props.onSubmit(filteredArray)



    }

    render() {
        const { ageFrom, ageTo, male, female, any } = this.state;

        return (
            <div id="userPreferences">
                <h2>Search Criteria</h2>

                <form onSubmit={this.handleSubmit}>
                    <label>
                        Age:
          <input type="text" name="ageFrom" value={this.state.ageFrom} onChange={this.handleChange} />
                    </label>
                    <label>
                        to:
          <input type="text" name="ageTo" value={this.state.ageTo} onChange={this.handleChange} />
                    </label>
                    <label className="radio">
                        Select Gender:
                    <div className="radioSelect">
                            <label>
                                <input type="radio" value="male" checked={this.state.selectedOption === 'male'} onChange={this.handleChange} />
                                Male
          </label>
                        </div>
                        <div className="radioSelect">
                            <label>
                                <input type="radio" value="female" checked={this.state.selectedOption === 'female'} onChange={this.handleChange} />
                                Female
          </label>
                        </div>
                        <div className="radioSelect">
                            <label>
                                <input type="radio" value="any" checked={this.state.selectedOption === 'any'} onChange={this.handleChange} />
                                Any
          </label>
                        </div>
                    </label>
                    <button className="btn btn-default" type="submit" name="resetForm" value="cancel" onClick={this.resetForm}>Reset</button>
                    <button className="btn btn-success" type="submit">Submit</button>
                </form>
            </div>
        );
    }
}