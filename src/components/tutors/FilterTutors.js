import React, { Component } from "react";
import { connect } from 'react-redux'
import { updateFilterCriteria, updateFilteredTutors } from '../../actions/tutorAction'
import { filterTutors } from '../../actions/helper'
export class FilterTutors extends Component {
  state = {
    age: "",
    experience: "",
    gender: "",
    subject: "",
    rate: "",
    state: "",
    city: "",
  };
  
  handleSubmit = (e) => {
    e.preventDefault();

    const { age, experience, gender, subject, rate, state, city } = this.state;

    const newCriteria = {
      age: parseInt(age),
      experience: parseInt(experience),
      gender,
      subject,
      rate: `$${rate}.00`,
      state,
      city,
    };

    this.props.updateFilterCriteria(newCriteria)

    const tutors = this.props.tutors

    const filteredTutors = filterTutors(tutors, newCriteria)
    
    this.props.updateFilteredTutors(filteredTutors)
  
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    const { age, experience, gender, subject, rate, state, city } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="filter-tutors">
          <div className="field is-grouped">
            <div className="control is-expanded">
              <label htmlFor="age" className="label">
                Age
              </label>
              <input
                name="age"
                type="number"
                className="input"
                placeholder="Enter age"
                value={age}
                onChange={this.handleChange}
              />
            </div>
            <div className="control is-expanded">
              <label htmlFor="gender" className="label">
                Gender
              </label>
              <div className="select">
                <select
                  name="gender"
                  value={gender}
                  onChange={this.handleChange}
                >
                  <option value=""></option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
            </div>

            <div className="control is-expanded">
              <label htmlFor="experience" className="label">
                Experience
              </label>
              <input
                name="experience"
                type="number"
                className="input"
                placeholder="Enter experience"
                value={experience}
                onChange={this.handleChange}
              />
            </div>

            <div className="control is-expanded">
              <label htmlFor="subject" className="label">
                Subject
              </label>
              <input
                name="subject"
                type="text"
                className="input"
                placeholder="Enter subject"
                value={subject}
                onChange={this.handleChange}
              />
            </div>

            <div className="control is-expanded">
              <label htmlFor="rate" className="label">
                Rate
              </label>
              <input
                name="rate"
                type="number"
                className="input"
                placeholder="Enter rate"
                value={rate}
                onChange={this.handleChange}
              />
            </div>

            <div className="control is-expanded">
              <label htmlFor="state" className="label">
                State
              </label>
              <input
                name="state"
                type="text"
                className="input"
                placeholder="Enter state"
                value={state}
                onChange={this.handleChange}
              />
            </div>

            <div className="control is-expanded">
              <label htmlFor="state" className="label">
                City
              </label>
              <input
                name="city"
                type="text"
                className="input"
                placeholder="Enter city"
                value={city}
                onChange={this.handleChange}
              />
            </div>
            <div class="control">
              <label htmlFor="submit" className="label">
                &nbsp;
              </label>
              <button type="submit" className="button is-info">
                Filter
              </button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  tutors: state.tutor.tutors,
  filterCriteria: state.tutor.filterCriteria
})

export default connect(mapStateToProps, { updateFilterCriteria, updateFilteredTutors })(FilterTutors);
