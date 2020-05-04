import React, { Component } from "react";
import { connect } from "react-redux";
import { toggleModal, addTutor, refreshFilteredTutors, updateFilteredTutors } from "../../actions/tutorAction";
import { filterTutors } from '../../actions/helper'
import { v4 as uuid} from 'uuid'

export class AddTutor extends Component {
  state = {
    id: "",
    name: "",
    email: "",
    phone: "",
    gender: "",
    age: 0,
    subject: "",
    experience: 0,
    rate: "",
    is_recommended: false,
    street: "",
    city: "",
    stateUS: "",
  };

  handleChange = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    // console.log(e.target);
    this.setState({
      [name]: value,
    });
  };

  handleCancel = () => {
    this.props.toggleModal();
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const {
      id,
      name,
      email,
      phone,
      gender,
      age,
      experience,
      subject,
      rate,
      is_recommended,
      street,
      city,
      stateUS,
    } = this.state;

    // make new updated tutor object
    const newTutor = {
      _id: uuid(),
      name,
      email,
      phone,
      gender,
      age: parseInt(age),
      experience: parseInt(experience),
      subject,
      rate: `$${rate}.00`,
      is_recommended,
      address: {
        street,
        city,
        state: stateUS,
      },
    };

    // add tutor
    this.props.addTutor(newTutor);

    // if newly updated tutor turns out matching filter criteria
    if (filterTutors([newTutor], this.props.filterCriteria) !== []){
      // then add to filteredTutors array
      this.props.updateFilteredTutors([newTutor, ...this.props.filteredTutors])
      this.props.refreshFilteredTutors()
    }

    // clean state
    this.setState({
      id: "",
      name: "",
      email: "",
      phone: "",
      gender: "",
      age: 0,
      subject: "",
      experience: 0,
      rate: "",
      is_recommended: false,
      street: "",
      city: "",
      stateUS: "",
    });

    this.props.toggleModal();
  };

  render() {
    const {
      name,
      email,
      phone,
      gender,
      age,
      experience,
      subject,
      rate,
      is_recommended,
      street,
      city,
      stateUS,
    } = this.state;


    return (
      <div className="modal is-active">
        <div className="modal-background"></div>
        <div className="modal-card">
          <form onSubmit={this.handleSubmit}>
            <header className="modal-card-head">
              <p className="modal-card-title">Add Tutor</p>
              <button
                onClick={this.handleCancel}
                class="delete"
                aria-label="close"
              ></button>
            </header>
            <section class="modal-card-body">
              {/* name email */}
              <div className="field is-grouped">
                <div className="control is-expanded">
                  <label htmlFor="name" className="label">
                    Name
                  </label>
                  <input
                    name="name"
                    type="text"
                    className="input"
                    placeholder="Enter name"
                    value={name}
                    onChange={this.handleChange}
                  />
                </div>

                <div className="control is-expanded">
                  <label htmlFor="email" className="label">
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    className="input"
                    placeholder="Enter email"
                    value={email}
                    onChange={this.handleChange}
                  />
                </div>
              </div>

              {/* phone */}
              <div className="field">
                <div className="control">
                  <label htmlFor="phone" className="label">
                    Phone
                  </label>
                  <input
                    type="text"
                    name="phone"
                    className="input"
                    placeholder="Enter phone number"
                    value={phone}
                    onChange={this.handleChange}
                  />
                </div>
              </div>

              {/* gender age */}
              <div className="field is-grouped">
                <div className="control">
                  <label htmlFor="gender" className="label">
                    Gender
                  </label>
                  <div className="select">
                    <select
                      name="gender"
                      value={gender}
                      onChange={this.handleChange}
                    >
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                </div>

                <div className="control is-expanded">
                  <label htmlFor="age" className="label">
                    Age
                  </label>
                  <input
                    className="input"
                    type="number"
                    name="age"
                    placeholder="Enter age"
                    value={age}
                    onChange={this.handleChange}
                  />
                </div>

                <div className="control is-expanded">
                  <label htmlFor="subject" className="label">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    list="subjects"
                    className="input"
                    placeholder="Enter subject"
                    value={subject}
                    onChange={this.handleChange}
                  />
                  <datalist id="subjects">
                    <option value="Mathematics">Mathematics</option>
                    <option value="Pyhsics">Physics</option>
                  </datalist>
                </div>
              </div>

              {/* exp rate */}
              <div className="field is-grouped">
                <div className="control is-expanded ">
                  <label htmlFor="experience" className="label">
                    Experience (years)
                  </label>
                  <input
                    className="input"
                    type="number"
                    name="experience"
                    placeholder="Enter years of experience"
                    value={experience}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="control is-expanded">
                  <label htmlFor="rate" className="label">
                    Rate ($)
                  </label>
                  <input
                    className="input"
                    type="number"
                    name="rate"
                    placeholder="Enter rate per hour"
                    value={rate}
                    onChange={this.handleChange}
                  />
                </div>
              </div>

              {/* featured */}
              <div className="control is-expanded">
                <label htmlFor="is_recommended" className="checkbox">
                  <input
                    type="checkbox"
                    checked={is_recommended}
                    name="is_recommended"
                    onChange={this.handleChange}
                  />{" "}
                  Featured
                </label>
              </div>

              <hr />

              {/* street */}
              <div className="field">
                <div className="control is-expanded">
                  <label htmlFor="street" className="label">
                    Street
                  </label>
                  <input
                    name="street"
                    type="text"
                    className="input"
                    placeholder="Enter street"
                    value={street}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              {/* city state */}
              <div className="field is-grouped">
                <div className="control is-expanded">
                  <label htmlFor="city" className="label">
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
                <div className="control is-expanded">
                  <label htmlFor="stateUS" className="label">
                    State
                  </label>
                  <input
                    name="stateUS"
                    type="text"
                    className="input"
                    placeholder="Enter state"
                    value={stateUS}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
            </section>
            <footer class="modal-card-foot">
              <button type="submit" class="button is-success">
                Save changes
              </button>
              <button onClick={this.handleCancel} class="button">
                Cancel
              </button>
            </footer>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  filterCriteria: state.tutor.filterCriteria,
  filteredTutors: state.tutor.filteredTutors
})

export default connect(mapStateToProps, { toggleModal, addTutor, refreshFilteredTutors, updateFilteredTutors })(AddTutor);


// import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import { toggleModal } from '../../actions/tutorAction'

// export class AddTutor extends Component {
//   handleToggle = e => {
//     this.props.toggleModal()
//   }
//   render() {
//     return (
//       <div>
//         <button onClick={this.handleToggle}>Toggle</button>
//       </div>
//     )
//   }
// }

// export default connect(null, {toggleModal})(AddTutor)
